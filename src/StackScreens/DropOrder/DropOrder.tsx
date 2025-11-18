import React from 'react';
import { View, Text, TouchableOpacity, Linking, Alert, Platform, Image } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import Colors from '../../utils/Colors/Colors';
import { SF, SW, SH } from '../../utils/Responsiveness/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { RootStackParamList } from '../../Routing/RootNavigator';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import SwipeButton from 'rn-swipe-button';
import AntDesign from 'react-native-vector-icons/AntDesign';

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

  const handleChat = () => {
    navigation.navigate('ChatScreen', { tripData });
  };

  return (
    <KeyboardAvoidWrapper>
      <View style={GlobalStyles.container}>
        <Header title="Drop Order" />
        <View style={styles.dropTag}>
          <Text style={styles.dropTagText}>DROP</Text>
        </View>
        <TouchableOpacity
          style={styles.rejectBtn}
          onPress={() => navigation.navigate('LiveOrderHelp', { tripData })}>
          <Text style={styles.rejectText}>Reject</Text>
          <AntDesign name="close" size={SF(12)} color={Colors.red} style={{ marginLeft: SW(4) }} />
        </TouchableOpacity>
        <View style={styles.customerInfo}>
          <Text style={styles.customerName}>{tripData?.customerName}</Text>
          <Text style={styles.address}>{tripData.drop.address}</Text>
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

        <TouchableOpacity style={styles.chatButton} onPress={handleChat}>
          <Text style={styles.chatButtonText}>Send message to customer...</Text>
          <Ionicons name="send" size={SF(18)} color={"#5B66AB"} />
        </TouchableOpacity>

        <View style={styles.divider} />
 

        <View style={{ alignItems: 'center', marginTop: SH(15), flex:1 }}>
          <SwipeButton
            containerStyles={{
              borderRadius: SW(40),
              overflow: 'hidden',
            }}
            height={SH(45)}
            width={SW(350)}
            title="Reached Drop"
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
              navigation.navigate('CashOnDelivery', { tripData })
            }}
            shouldResetAfterSuccess={false}
          />
        </View>
         <Image source={require('../../assests/Images/DropOrder.png')} style={styles.image} />
        
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default DropOrder;
