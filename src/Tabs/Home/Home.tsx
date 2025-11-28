import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, ToastAndroid } from 'react-native';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import StatusShiftModal from '../../Components/StatusShiftModal';
import styles from './styles';
import Colors from '../../utils/Colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { deliveryData } from '../../DummyData/DummyData';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SH, SF, SW } from '../../utils/Responsiveness/Dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useIsFocused } from '@react-navigation/native';
import SwipeButton from 'rn-swipe-button';
import { setStatus } from '../../redux/slices/statusShiftStore';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const modalRef = useRef<any>(null);
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();
  const { status } = useSelector((state: RootState) => state.status);
  const [showOnlineModal, setShowOnlineModal] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<any>(null);
  const [timer, setTimer] = useState(30);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [currentTripIndex, setCurrentTripIndex] = useState(0);
  const currencySymbol = 'SAR'

  useFocusEffect(
    useCallback(() => {
      console.log('Status on focus:', status);
    }, [status])
  );

  useEffect(() => {
    if (status === 'Offline' && !dontShowAgain) {
      setShowOnlineModal(true);
    } else {
      setShowOnlineModal(false);
    }
  }, [status, isFocused, dontShowAgain]);

  const handleGoOnline = () => {
    setShowOnlineModal(false);
    dispatch(setStatus("Online"));
    ToastAndroid.show("You are now Online", ToastAndroid.SHORT);
  };


  const firstTrip = deliveryData[0];

  useEffect(() => {
    if (!isFocused || status !== 'Online') {
      setSelectedTrip(null);
      setTimer(30);
      return;
    }

    let showTimeout: any;
    let hideTimeout: any;
    let interval: any;

    const showNextTrip = (index: number) => {
      setSelectedTrip(deliveryData[index]);
      setTimer(30);

      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      hideTimeout = setTimeout(() => {
        clearInterval(interval);
        setSelectedTrip(null);
        showTimeout = setTimeout(() => {
          setCurrentTripIndex((prev) =>
            prev + 1 >= deliveryData.length ? 0 : prev + 1
          );
        }, 500);
      }, 30000);
    };

    showNextTrip(currentTripIndex);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      clearInterval(interval);
    };
  }, [currentTripIndex, status, isFocused]);


  return (
    <KeyboardAvoidWrapper>
      <View style={[GlobalStyles.container]}>
        <StatusShiftModal ref={modalRef} />

        <View style={styles.inProgressBadge}>
          <Text style={styles.inProgressText}>
            {status === 'Offline'
              ? t('offlineStatus')
              : status === 'On break'
                ? t('onBreakStatus')
                : t('onlineStatus')}
          </Text>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderRow}>
              <Ionicons name="checkmark-circle-outline" size={18} color="#2266D1" />
              <Text style={styles.progressTitle}>{t('todaysProgress')}</Text>
            </View>
          </View>

          <View>
            <View style={styles.progressRow}>
              <TouchableOpacity
                style={[styles.progressItem, { backgroundColor: '#2EAD64' }]}
                onPress={() => navigation.navigate('PayoutScreen')}
              >
                <View style={styles.iconCircle}>
                  <MaterialCommunityIcons name="wallet-outline" size={20} color="#2EAD64" />
                </View>
                <Text style={styles.amount}>210 {currencySymbol}</Text>
                <Text style={styles.itemLabel}>{t('earnings1')}</Text>
              </TouchableOpacity>

              <View style={[styles.progressItem, { backgroundColor: '#4D88FF' }]}>
                <View style={styles.iconCircle}>
                  <Ionicons name="time-outline" size={20} color="#4D88FF" />
                </View>
                <Text style={styles.amount}>3.00 hrs</Text>
                <Text style={[styles.itemLabel, { paddingTop: SH(8) }]}>{t('loginHours')}</Text>
              </View>
            </View>

            <View style={styles.progressRow}>
              <TouchableOpacity
                style={[styles.progressItem, { backgroundColor: '#00B1C5' }]}
                onPress={() => navigation.navigate('PastTrips')}
              >
                <View style={styles.iconCircle}>
                  <MaterialCommunityIcons name="history" size={20} color="#00B1C5" />
                </View>
                <Text style={styles.amount}>30</Text>
                <Text style={[styles.itemLabel, { paddingTop: SH(8) }]}>{t('tripHistory')}</Text>
              </TouchableOpacity>

              <View style={[styles.progressItem, { backgroundColor: '#B58AF9' }]}>
                <View style={styles.iconCircle}>
                  <MaterialCommunityIcons name="scooter" size={20} color="#B58AF9" />
                </View>
                <Text style={styles.amount}>10</Text>
                <Text style={[styles.itemLabel, { paddingTop: SH(8) }]}>{t('todaysTrips')}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.progressCard}>
          <View style={[styles.cardHeader, { backgroundColor: Colors.yellow }]}>
            <View style={styles.cardHeaderRow}>
              <MaterialCommunityIcons name="scooter" size={18} color="#000" style={styles.cardIcon} />
              <Text style={[styles.progressTitle, { color: Colors.black }]}>
                {t('inProgressTrip')}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: SH(6),
              backgroundColor: Colors.red,
              padding: SW(5),
              borderRadius: 5,
            }}
          >
            <Ionicons name="document-text-outline" size={SF(14)} color={Colors.white} />
            <Text style={styles.orderIdText}>
              {t('orderId')}: 1234
            </Text>
          </View>

          <TouchableOpacity style={[styles.pickupButton, { marginVertical: SH(5) }]}>
            <Text style={styles.pickupButtonText}>{firstTrip.buttonLabel}</Text>
          </TouchableOpacity>

          <View style={styles.tripHeaderRow}>
            <Text style={[styles.tripName, { paddingTop: SH(5) }]}>{firstTrip.name}</Text>
          </View>

          <View style={styles.addressBox}>
            <View style={styles.labelRow}>
              <MaterialCommunityIcons name="map-marker" size={18} color="#2EAD64" />
              <Text style={styles.addressLabel}> Pickup From</Text>
            </View>
            <Text style={styles.addressText}>{firstTrip.pickup.address}</Text>
          </View>

          <View style={styles.addressBox}>
            <View style={styles.labelRow}>
              <MaterialCommunityIcons name="map-marker-outline" size={18} color="#E53935" />
              <Text style={[styles.addressLabel, { color: '#E53935' }]}> Drop To</Text>
            </View>
            <Text style={styles.addressText}>{firstTrip.drop.address}</Text>
          </View>
        </View>
      </View>

      <Modal
        visible={!!selectedTrip && isFocused}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedTrip(null)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setSelectedTrip(null)}
          style={styles.modalOverlay}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={styles.modalCard}
            onPress={() => { }}
          >
            <View style={styles.timerCircle}>
              <AntDesign name="clockcircleo" size={16} color={Colors.red} />
              <Text style={styles.timerText}>{timer}s</Text>
            </View>

            <Text style={styles.earningLabel}>{t('expectedEarnings')}</Text>
            <Text style={styles.earningValue}>
              {selectedTrip?.expectedEarnings?.toFixed(1)} {currencySymbol}
            </Text>
            <View style={styles.pickupCard}>
              <TouchableOpacity style={styles.pickupButton}>
                <Text style={styles.pickupButtonText}>{firstTrip.buttonLabel}</Text>
              </TouchableOpacity>

              <Text style={styles.pickupTitle}>{selectedTrip?.name}</Text>
              <View style={styles.addressBox}>
                <View style={styles.labelRow}>
                  <MaterialCommunityIcons name="map-marker" size={18} color="#2EAD64" />
                  <Text style={styles.addressLabel}> Pickup From</Text>
                </View>
                <Text style={styles.addressText}>{firstTrip.pickup.address}</Text>
              </View>

              <View style={styles.addressBox}>
                <View style={styles.labelRow}>
                  <MaterialCommunityIcons name="map-marker-outline" size={18} color="#E53935" />
                  <Text style={[styles.addressLabel, { color: '#E53935' }]}> Drop To</Text>
                </View>
                <Text style={styles.addressText}>{firstTrip.drop.address}</Text>
              </View>

              <View style={styles.locationRow}>
                <Ionicons name="location-outline" size={14} color="#1B8E3E" />
                <Text style={styles.greenText}>10 mins away</Text>
              </View>

              <View style={styles.divider} />

            </View>
            <View style={{ alignItems: 'center', marginTop: SH(15) }}>
              <SwipeButton
                containerStyles={{
                  borderRadius: SW(40),
                  overflow: 'hidden',
                }}
                height={SH(45)}
                width={SW(350)}
                title={t('acceptOrder')}
                titleStyles={{
                  color: '#fff',
                  fontSize: SF(14),
                  fontFamily: 'Ubuntu-Medium',
                  letterSpacing: 0.5,
                }}
                railBackgroundColor={Colors.dark_green}
                railFillBackgroundColor={Colors.dark_green}
                railBorderColor="transparent"
                railFillBorderColor="transparent"
                thumbIconBackgroundColor="#fff"
                thumbIconBorderColor="transparent"
                thumbIconStyles={{
                  width: SW(25),
                  height: SH(25),
                  borderRadius: SW(25),
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 4,
                }}
                thumbIconComponent={() => (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons
                      name="chevron-forward"
                      size={SF(14)}
                      color={Colors.dark_green}
                    />
                    <Ionicons
                      name="chevron-forward"
                      size={SF(14)}
                      color={Colors.dark_green}
                      style={{ marginLeft: -5 }}
                    />
                  </View>
                )}
                onSwipeSuccess={() => {
                  navigation.navigate('ReachVerification', { tripData: selectedTrip });
                  setSelectedTrip(null);
                }}
                shouldResetAfterSuccess={false}
              />
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
      <Modal
        visible={showOnlineModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowOnlineModal(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setShowOnlineModal(false)}
          style={styles.onlineModalOverlay}
        >
          <TouchableOpacity activeOpacity={1} style={styles.onlineModalCard}>
            <View style={styles.onlineModalContent}>
              <Ionicons name="alert-circle-outline" size={40} color={Colors.red} />

              <Text style={styles.offlineTitle}>{t('youAreOffline')}</Text>

              <Text style={styles.offlineSubtitle}>{t('goOnlineMessage')}</Text>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() => setDontShowAgain(!dontShowAgain)}
                  style={{
                    width: 20,
                    height: 20,
                    borderWidth: 2,
                    borderColor: Colors.dark_green,
                    marginRight: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {dontShowAgain ? (
                    <Ionicons name="checkmark" size={14} color={Colors.dark_green} />
                  ) : null}
                </TouchableOpacity>

                <Text style={styles.offlineSubtitle}>{t('dontShowAgain')}</Text>
              </View>

              <TouchableOpacity onPress={handleGoOnline} style={styles.goOnlineBtn}>
                <Text style={styles.goOnlineText}>{t('goOnline')}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </KeyboardAvoidWrapper>
  );
};

export default Home;
