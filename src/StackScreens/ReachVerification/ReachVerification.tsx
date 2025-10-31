import React from 'react';
import { View, Text, TouchableOpacity, Linking, Alert } from 'react-native';
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

type ReachVerificationNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ReachVerification'
>;

const ReachVerification = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<ReachVerificationNavigationProp>();
  const { tripData } = route.params || {};

  return (
    <KeyboardAvoidWrapper>
      <View style={[GlobalStyles.container]}>
        <Header title="Reach Verification" />
        <TouchableOpacity style={styles.rejectBtn} onPress={() => navigation.navigate('HelpCenter')}>
          <Text style={styles.rejectText}>Reject</Text>
          <AntDesign name="close" size={SF(12)} color={Colors.red} style={{ marginLeft: SW(4) }} />
        </TouchableOpacity>

        {tripData ? (
          <View style={{ paddingHorizontal: SW(16), paddingBottom: SH(16) }}>
            <View style={styles.pickupTag}>
              <Text style={styles.pickupText}>PICK UP</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SH(6) }}>
              <Ionicons name="document-text-outline" size={SF(14)} color={Colors.red} />
              <Text style={styles.orderIdText}> Order Id: 1234</Text>
            </View>

            <Text style={styles.hotelName}>{tripData.name}</Text>
            <Text style={styles.addressText}>{tripData.address}</Text>
            <View style={styles.locationRow}>
              <Ionicons name="time-outline" size={SF(14)} color={Colors.green} />
              <Text style={styles.greenText}> 10 mins away</Text>
            </View>
            <View style={styles.callMapRow}>
              <TouchableOpacity
                style={styles.callButton}
                onPress={() => {
                  if (tripData?.contact) {
                    Linking.openURL(`tel:${tripData.contact}`);
                  } else {
                    Alert.alert('No phone number available');
                  }
                }}
              >
                <Ionicons name="call-outline" size={SF(14)} color={Colors.red} />
                <Text style={styles.callButtonText}>Call</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.mapButton}>
                <Ionicons name="navigate-outline" size={SF(14)} color={Colors.white} />
                <Text style={styles.mapButtonText}>Map</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.reachedButton}>
              <Ionicons name="chevron-forward" size={SF(16)} color={Colors.white} />
              <Text style={styles.reachedButtonText}>Reached pickup</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={{ textAlign: 'center', marginTop: SH(20) }}>No trip data found.</Text>
        )}
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default ReachVerification;
