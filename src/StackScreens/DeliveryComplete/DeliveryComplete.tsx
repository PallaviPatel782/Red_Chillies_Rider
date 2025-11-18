import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import styles from './styles';

const DeliveryComplete = ({ route, navigation }: any) => {
  const { tripData } = route.params || {};
  const currencySymbol = 'SAR';
  useEffect(() => {
    console.log('Trip data received:', tripData);
  }, [tripData]);

  const totalAmount = tripData?.orderItems?.reduce(
    (acc: number, item: any) => acc + item.price,
    0
  );

  const totalDistance =
    parseFloat(tripData?.pickup?.distance || 0) +
    parseFloat(tripData?.drop?.distance || 0);

  return (
    <KeyboardAvoidWrapper>
      <View style={styles.mainContainer}>
        <View style={styles.topSection} />
        <View style={styles.bottomSection} />
        <View style={styles.successCard}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../../assests/Images/WithdrawSuccessfully.png')}
              style={styles.successImage}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.confirmationText}>Great job! Delivery complete</Text>
          <Text style={styles.earningsLabel}>Trip earnings</Text>
          <Text style={styles.earningsValue}>
            {tripData?.expectedEarnings ?? '0.00'}  {currencySymbol}
          </Text>
        </View>
        <View style={styles.ContentContainer}>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailText}>Details</Text>
            <View style={styles.rowBetween}>
              <Text style={styles.detailsLabel}>Trip pay</Text>
              <Text style={styles.detailsValue}>
                {tripData?.expectedEarnings ?? '0.00'}  {currencySymbol}
              </Text>
            </View>
            <View style={styles.rowBetween}>
              <Text style={styles.detailsLabel}>Total bill</Text>
              <Text style={styles.detailsValue}>
                {totalAmount?.toFixed(2) ?? '0.00'}  {currencySymbol}
              </Text>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.rowBetween}>
              <Text style={styles.detailsLabel}>Trip distance</Text>
              <Text style={styles.detailsValue}>{totalDistance.toFixed(2)} km</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.deliverButton}
          onPress={() => navigation.navigate('MainTabs')}
        >
          <Text style={styles.deliverButtonText}>Get next order</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default DeliveryComplete;
