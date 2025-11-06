import React from 'react';
import { View, Text, TouchableOpacity, Linking, Alert, Platform } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import Colors from '../../utils/Colors/Colors';
import { SF } from '../../utils/Responsiveness/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { RootStackParamList } from '../../Routing/RootNavigator';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

type DropOrderRouteProp = RouteProp<RootStackParamList, 'DropOrder'>;

const DropOrder = () => {
   const { latitude, longitude } = useSelector(
    (state: RootState) => state.locationStore
  );
  const navigation = useNavigation<any>();
  const route = useRoute<DropOrderRouteProp>();
  const { tripData } = route.params;

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
      <View style={GlobalStyles.container}>
        <Header title="Drop Order" />
        <View style={styles.dropTag}>
          <Text style={styles.dropTagText}>DROP</Text>
        </View>
        <View style={styles.customerInfo}>
          <Text style={styles.customerName}>{tripData?.customerName}</Text>
          <Text style={styles.address}>{tripData?.address}</Text>
          <Text style={styles.orderId}>Order ID: {tripData?.orderId}</Text>
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

        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.reachedButton}
          onPress={() => {
            if (tripData.paymentMode === 'Online Payment') {
              navigation.navigate('PaidOnline', { tripData });
            } else {
              navigation.navigate('CashOnDelivery', { tripData });
            }
          }}
        >
          <Ionicons name="chevron-forward" size={SF(16)} color={Colors.white} />
          <Text style={styles.reachedButtonText}>Reached Drop</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default DropOrder;
