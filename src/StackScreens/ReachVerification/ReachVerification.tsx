import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Linking, Alert, Modal, Image, TouchableWithoutFeedback, Platform } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import styles from './styles';
import { SH, SF, SW } from '../../utils/Responsiveness/Dimensions';
import Colors from '../../utils/Colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../Routing/RootNavigator';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

type ReachVerificationNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ReachVerification'
>;

const ReachVerification = () => {
  const { latitude, longitude } = useSelector(
    (state: RootState) => state.locationStore
  );
  const route = useRoute<any>();
  const navigation = useNavigation<ReachVerificationNavigationProp>();
  const { tripData } = route.params || {};

  const [isModalVisible, setModalVisible] = useState(false);
  const [timer, setTimer] = useState(180);

  useEffect(() => {
    let interval: any;
    if (isModalVisible && timer > 0) {
      interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isModalVisible, timer]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  const handleCall = () => {
    if (tripData?.contact) {
      Linking.openURL(`tel:${tripData.contact}`);
    } else {
      Alert.alert('No phone number available');
    }
  };

  const handleOpenMap = () => {
    if (latitude && longitude) {
      const label = tripData?.name || 'Pickup Location';
      const destinationLat = tripData?.pickup?.latitude ?? 18.6278;
      const destinationLng = tripData?.pickup?.longitude ?? 73.8007;

      const url = Platform.select({
        ios: `maps://app?saddr=${latitude},${longitude}&daddr=${destinationLat},${destinationLng} (${encodeURIComponent(label)})`,
        android: `google.navigation:q=${destinationLat},${destinationLng} (${encodeURIComponent(label)})`,
      });

      Linking.openURL(url!).catch(() => {
        Alert.alert('Error', 'Unable to open map.');
      });
    } else {
      Alert.alert('Location Error', 'Your current location is not available.');
    }
  };



  return (
    <KeyboardAvoidWrapper>
      <View style={[GlobalStyles.container]}>
        <Header title="Reach Verification" />
        <TouchableOpacity
          style={styles.rejectBtn}
          onPress={() => navigation.navigate('HelpCenter')}>
          <Text style={styles.rejectText}>Reject</Text>
          <AntDesign name="close" size={SF(12)} color={Colors.red} style={{ marginLeft: SW(4) }} />
        </TouchableOpacity>

        {tripData ? (
          <View style={{ paddingHorizontal: SW(7), paddingBottom: SH(16) }}>
            <View style={styles.pickupTag}>
              <Text style={styles.pickupText}>PICK UP</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SH(6) }}>
              <Ionicons name="document-text-outline" size={SF(14)} color={Colors.red} />
              <Text style={styles.orderIdText}> Order Id: {tripData.orderId}</Text>
            </View>
            <Text style={styles.hotelName}>{tripData.name}</Text>
            <Text style={styles.addressText}>{tripData.address}</Text>

            <View style={styles.locationRow}>
              <Ionicons name="time-outline" size={SF(14)} color={Colors.dark_green} />
              <Text style={styles.greenText}> 10 mins away</Text>
            </View>
            <View style={styles.callMapRow}>
              <TouchableOpacity style={styles.callButton} onPress={handleCall}>
                <Ionicons name="call-outline" size={SF(14)} color={Colors.red} />
                <Text style={styles.callButtonText}>Call</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.mapButton} onPress={handleOpenMap}>
                <Ionicons name="navigate-outline" size={SF(14)} color={Colors.white} />
                <Text style={styles.mapButtonText}>Map</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.reachedButton} onPress={() => setModalVisible(true)}>
              <Ionicons name="chevron-forward" size={SF(16)} color={Colors.white} />
              <Text style={styles.reachedButtonText}>Reached pickup</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={{ textAlign: 'center', marginTop: SH(20) }}>No trip data found.</Text>
        )}
      </View>

      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <TouchableOpacity
                  style={styles.modalCloseIcon}
                  onPress={() => setModalVisible(false)}
                >
                  <AntDesign name="close" size={20} color={Colors.black} />
                </TouchableOpacity>

                <Text style={styles.modalTitle}>Pick order now!</Text>

                <View style={styles.modalImageWrapper}>
                  <Image
                    source={require('../../assests/Images/ReachPickup.png')}
                    style={styles.modalImage}
                  />
                  <View style={styles.timerContainer}>
                    <Text style={styles.timerText}>{formatTime(timer)}</Text>
                  </View>
                </View>

                <Text style={styles.modalInfoText}>
                  Restaurant has marked food ready{'\n'}Please collect now!
                </Text>

                <View style={styles.modalOrderBox}>
                  <View style={styles.orderRow}>
                    <Ionicons name="document-text-outline" size={SF(14)} color={Colors.black} />
                    <Text style={styles.orderText}>Order Id: {tripData.orderId}</Text>
                  </View>
                  <View style={styles.orderRow}>
                    <Ionicons name="person-outline" size={SF(14)} color={Colors.black} />
                    <Text style={styles.orderText}>Customer: {tripData.customerName}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate('PickOrder', { tripData });
                  }}
                >
                  <Text style={styles.modalButtonText}>Okay, I'm picking!</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

    </KeyboardAvoidWrapper>
  );
};

export default ReachVerification;
