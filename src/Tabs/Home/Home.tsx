import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import StatusShiftModal from '../../Components/StatusShiftModal';
import styles from './styles';
import Colors from '../../utils/Colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { deliveryData } from '../../DummyData/DummyData';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setStatus, setShift } from '../../../src/redux/slices/statusShiftStore';
import { SH, SF, SW } from '../../utils/Responsiveness/Dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const Home = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const { status, shift } = useSelector((state: RootState) => state.status);

  useFocusEffect(
  useCallback(() => {
    console.log('Status on focus:', status);
  }, [status])
);

  const firstTrip = deliveryData[0];

  return (
    <KeyboardAvoidWrapper>
      <View style={[GlobalStyles.container, { paddingTop: 10 }]}>
        <StatusShiftModal
          onStatusChange={(val) => dispatch(setStatus(val))}
          onShiftSelect={(val) => dispatch(setShift(val.label))}
        />

        <Image
          source={require('../../assests/Images/HomeBanner.png')}
          style={styles.homeBanner}
          resizeMode="cover"
        />

        {/* --- In Progress Card --- */}
        <View style={styles.progressCard}>
          <View style={[styles.cardHeader,{backgroundColor:Colors.yellow}]}>
            <View style={styles.cardHeaderRow}>
               <FontAwesome5 name="motorcycle" size={18} color="#000" style={styles.cardIcon} />
              <Text style={[styles.progressTitle,{color:Colors.black}]}>In Progress Trip</Text>
            </View>
          </View>


          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SH(6), backgroundColor: Colors.red, padding: SW(5), borderRadius: 5 }}>
            <Ionicons name="document-text-outline" size={SF(14)} color={Colors.white} />
            <Text style={styles.orderIdText}> Order Id: 1234</Text>
          </View>

          <TouchableOpacity style={styles.pickupButton}>
            <Text style={styles.pickupButtonText}>{firstTrip.buttonLabel}</Text>
          </TouchableOpacity>

          <View style={styles.tripHeaderRow}>
            <Text style={[styles.tripName,{paddingTop:SH(5)}]}>{firstTrip.name}</Text>
          </View>

          <Text style={styles.tripAddress}>{firstTrip.address}</Text>

          <View style={styles.tripRow}>
            <Text style={styles.tripInfo}>
              🧍‍♂️ Pickup From:{' '}
              <Text style={styles.boldText}>{firstTrip.pickup.distance}</Text>
            </Text>
            <Text style={styles.tripInfo}>
              🛵 Drop To:{' '}
              <Text style={styles.boldText}>{firstTrip.drop.distance}</Text>
            </Text>
          </View>

        </View>

        <View style={styles.progressCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderRow}>
              <Ionicons name="checkmark-circle-outline" size={18} color="#2266D1" style={styles.cardIcon} />
              <Text style={styles.progressTitle}>Today's progress</Text>
            </View>
          </View>

          <View>
            {status !== 'Offline' && (
              <View style={styles.inProgressBadge}>
                <Text style={styles.inProgressText}>In progress</Text>
              </View>
            )}

            <Text style={styles.shiftTime}>
              {shift ? `${shift}` : 'No Shift Selected'}
            </Text>

            <View style={styles.progressRow}>
              <TouchableOpacity style={styles.progressItem} onPress={() => navigation.navigate('PayoutScreen')}>
                <Text style={styles.amount}>₹210.30</Text>
                <Text style={styles.itemLabel}>Earnings ▶</Text>
              </TouchableOpacity>

              <View style={styles.progressItem}>
                <Text style={styles.hours}>3.00 hrs</Text>
                <Text style={styles.itemLabel}>Login hours</Text>
              </View>

              <View style={styles.progressItem}>
                <Text style={styles.trips}>10</Text>
                <Text style={styles.itemLabel}>Trips</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            disabled={status === 'Offline'}
            style={[
              styles.startButton,
              { backgroundColor: status === 'Offline' ? '#B9B9B9' : Colors.red },
            ]}
            onPress={() => {
              if (status !== 'Offline') {
                navigation.navigate('AllTrips');
              }
            }}
          >
            <Text style={styles.startText}>START DUTY</Text>
          </TouchableOpacity>
        </View>

        {/* --- Trip Section --- */}
        <View style={styles.tripContainer}>
          <TouchableOpacity
            style={styles.tripHeaderRow}
            onPress={() => status !== 'Offline' && navigation.navigate('AllTrips')}
            disabled={status === 'Offline'}
          >
            <Text
              style={[
                styles.tripHeader,
                status === 'Offline' && { color: '#999' },
              ]}
            >
              View Trip Details History
            </Text>
            <Ionicons
              name="chevron-forward"
              size={18}
              color={status === 'Offline' ? '#999' : '#000'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tripCard, status === 'Offline' && { opacity: 0.8 }]}
            disabled={status === 'Offline'}
            onPress={() => status !== 'Offline' && navigation.navigate('AllTrips')}
          >
            <View style={styles.earningBadge}>
              <Text style={styles.earningBadgeText}>
                earnings ₹{firstTrip.expectedEarnings.toFixed(1)}
              </Text>
            </View>

            <View style={styles.tripHeaderRow}>
              <Text style={styles.tripName}>{firstTrip.name}</Text>
            </View>

            <View style={styles.tripRow}>
              <Text style={styles.tripInfo}>
                🧍‍♂️ Pickup From:{' '}
                <Text style={styles.boldText}>{firstTrip.pickup.distance}</Text>
              </Text>
              <Text style={styles.tripInfo}>
                🛵 Drop To:{' '}
                <Text style={styles.boldText}>{firstTrip.drop.distance}</Text>
              </Text>
            </View>

            <TouchableOpacity style={styles.pickupButton}>
              <Text style={styles.pickupButtonText}>{firstTrip.buttonLabel}</Text>
            </TouchableOpacity>

            <Text style={styles.tripAddress}>{firstTrip.address}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default Home;
