import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  Linking,
  Alert,
  TextInput,
} from 'react-native';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utils/Colors/Colors';
import styles from './styles';
import { SW, SH, SF } from '../../utils/Responsiveness/Dimensions';
import SwipeButton from 'rn-swipe-button';

const CashOnDelivery = ({ route, navigation }: any) => {
  const { tripData } = route.params || {};
  const amount = tripData?.amount || 970;
  const currencySymbol = 'SAR';

  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const totalAmount = tripData?.orderItems?.reduce(
    (sum: number, item: any) => sum + item.price,
    0
  );

  const renderFoodTypeIcon = (type: string) => (
    <Image
      source={
        type === 'non-veg'
          ? require('../../assests/Images/nonveg.png')
          : require('../../assests/Images/veg.png')
      }
      style={{ width: SW(14), height: SH(14), marginRight: SW(6) }}
      resizeMode="contain"
    />
  );

  const handleCall = () => {
    if (tripData?.contact) {
      Linking.openURL(`tel:${tripData.contact}`);
    } else {
      Alert.alert('No phone number available');
    }
  };

  const handleOtpVerify = () => {
    setShowOtpModal(false);
    navigation.navigate('DeliveryComplete', { tripData });
  };

  return (
    <KeyboardAvoidWrapper>
      <View style={GlobalStyles.container}>
        <Header title="Deliver" />
        <View style={styles.paymentRow}>
          <Ionicons name="checkmark-circle-outline" size={30} color={Colors.dark_green} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.paymentTitle}>
              Collect Cash {amount} {currencySymbol}
            </Text>
            <Text style={styles.paymentOrderId}>Order Id: {tripData?.orderId}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Customer Row */}
        <View style={styles.customerRow}>
          <Ionicons name="person-circle-outline" size={26} color={'#BFBFBF'} />
          <Text style={styles.customerName}>{tripData?.customerName}</Text>

          <View style={{ flex: 1 }} />
          <TouchableOpacity style={styles.callIconCircle} onPress={handleCall}>
            <Ionicons name="call-outline" size={16} color={'#0788E4'} />
          </TouchableOpacity>
        </View>

        <Text style={styles.customerAddress}>{tripData?.drop?.address}</Text>
        <Text style={styles.customerOrderId}>Order Id: {tripData?.orderId}</Text>

        {/* Order Detail Box */}
        <TouchableOpacity style={styles.orderBox} onPress={() => setShowOrderModal(true)}>
          <View style={styles.orderHeader}>
            <Ionicons name="document-text-outline" size={16} color={Colors.black} />
            <Text style={styles.orderTitle}>Order Details</Text>
            <View style={{ flex: 1 }} />
            <Ionicons name="chevron-down-outline" size={14} color={Colors.black} />
          </View>
          <Text style={styles.restaurantName}>{tripData?.name}</Text>
        </TouchableOpacity>

        <View style={{ alignItems: 'center', marginTop: SH(15), flex: 1 }}>
          <SwipeButton
            containerStyles={{ borderRadius: SW(40), overflow: 'hidden' }}
            height={SH(45)}
            width={SW(350)}
            title="Order Delivered"
            titleStyles={{
              color: '#fff',
              fontSize: SF(14),
              fontFamily: 'Ubuntu-Medium',
            }}
            railBackgroundColor={Colors.dark_green}
            railFillBackgroundColor={Colors.dark_green}
            railBorderColor="transparent"
            thumbIconBackgroundColor="#fff"
            thumbIconBorderColor="transparent"
            thumbIconComponent={() => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="chevron-forward" size={14} color={Colors.dark_green} />
                <Ionicons
                  name="chevron-forward"
                  size={14}
                  color={Colors.dark_green}
                  style={{ marginLeft: -5 }}
                />
              </View>
            )}
            onSwipeSuccess={() => setShowOtpModal(true)}
            shouldResetAfterSuccess={true}
          />
        </View>
        <Image source={require('../../assests/Images/CashOnDelivery.png')} style={styles.image} />
        <Modal visible={showOtpModal} transparent animationType="fade">
          <View style={styles.otpOverlay}>
            <View style={styles.otpCard}>
              <Ionicons name="shield-checkmark-outline" size={50} color={Colors.dark_green} />

              <Text style={styles.otpTitle}>Enter Delivery OTP</Text>
              <Text style={styles.otpSubtitle}>Customer will share a 4-digit OTP</Text>

              <TextInput
                value={otp}
                onChangeText={(t) => {
                  setOtp(t);
                  setError('');
                }}
                keyboardType="number-pad"
                maxLength={4}
                placeholder="Enter OTP"
                style={styles.otpInput}
              />

              {error ? <Text style={styles.errorText}>{error}</Text> : null}

              <TouchableOpacity style={styles.verifyBtn} onPress={handleOtpVerify}>
                <Text style={styles.verifyBtnText}>Verify & Complete Delivery</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setShowOtpModal(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          visible={showOrderModal}
          animationType="slide"
          transparent
          onRequestClose={() => setShowOrderModal(false)}
        >
          <TouchableWithoutFeedback onPress={() => setShowOrderModal(false)}>
            <View style={styles.modalOverlay}>
              <TouchableWithoutFeedback>
                <View style={styles.bottomSheet}>
                  <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Order Details</Text>
                    <TouchableOpacity onPress={() => setShowOrderModal(false)}>
                      <Ionicons name="close-outline" size={24} color={Colors.black} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.orderCard}>
                    <Ionicons
                      name="document-text-outline"
                      size={24}
                      color={Colors.red}
                      style={styles.orderIcon}
                    />

                    <Text style={styles.orderId}>Order ID: {tripData.orderId}</Text>

                    <View style={styles.divider} />

                    <FlatList
                      data={tripData.orderItems}
                      scrollEnabled={false}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({ item }) => (
                        <View style={styles.itemRow}>
                          {renderFoodTypeIcon(item.type)}
                          <Text style={styles.itemName}>
                            {item.quantity > 1
                              ? `${item.quantity} × ${item.itemName}`
                              : item.itemName}
                          </Text>
                          <Text style={styles.itemPrice}>
                            {item.price.toFixed(2)} {currencySymbol}
                          </Text>
                        </View>
                      )}
                    />

                    <View style={styles.divider} />
                    <View style={styles.totalRow}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.totalText}>Total bill</Text>
                        <View
                          style={[
                            styles.paidTagBox,
                            {
                              backgroundColor: '#E6F8ED',
                              borderColor: Colors.green,
                            },
                          ]}
                        >
                          <Ionicons
                            name="checkmark-done-circle-outline"
                            size={14}
                            color={Colors.green}
                            style={{ marginRight: 4 }}
                          />
                          <Text style={[styles.paidTagText, { color: Colors.green }]}>
                            PAID
                          </Text>
                        </View>
                      </View>

                      <Text style={styles.totalAmount}>
                        {totalAmount.toFixed(2)} {currencySymbol}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default CashOnDelivery;
