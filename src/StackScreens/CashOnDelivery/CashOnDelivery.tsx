import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, FlatList } from 'react-native';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utils/Colors/Colors';
import styles from './styles';
import { SW, SH } from '../../utils/Responsiveness/Dimensions';

const CashOnDelivery = ({ route, navigation }: any) => {
  const { tripData } = route.params || {};
  const amount = tripData?.amount || 970;
  const [showOrderModal, setShowOrderModal] = useState(false);

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

  return (
    <KeyboardAvoidWrapper>
      <View style={GlobalStyles.container}>
        <Header title="Deliver" />
        <View style={styles.collectBox}>
          <Ionicons name="qr-code-outline" size={22} color={Colors.dark_green} />
          <Text style={styles.collectText}>Collect ₹{amount} via UPI</Text>
        </View>
        <View style={styles.qrBox}>
          <Image
            source={require('../../assests/Images/qr_placeholder.png')}
            style={styles.qrImage}
            resizeMode="contain"
          />
          <Text style={styles.orText}>OR</Text>
          <Text style={styles.cashCollectText}>Collect Cash: ₹{amount}</Text>
        </View>
        <View style={styles.paymentRow}>
          <Ionicons name="checkmark-circle-outline" size={30} color={Colors.dark_green} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.paymentTitle}>Collect Cash ₹{amount}</Text>
            <Text style={styles.paymentOrderId}>Order Id: {tripData?.orderId}</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.customerRow}>
          <Ionicons name="person-circle-outline" size={26} color={'#BFBFBF'} />
          <Text style={styles.customerName}>{tripData?.customerName}</Text>
          <View style={{ flex: 1 }} />
          <View style={styles.callIconCircle}>
            <Ionicons name="call-outline" size={20} color={"#0788E4"} />
          </View>
        </View>
        <Text style={styles.customerAddress}>{tripData?.address}</Text>
        <Text style={styles.customerOrderId}>Order Id: {tripData?.orderId}</Text>
        <TouchableOpacity
          style={styles.orderBox}
          onPress={() => setShowOrderModal(true)}
          activeOpacity={0.7}
        >
          <View style={styles.orderHeader}>
            <Ionicons name="document-text-outline" size={16} color={Colors.black} />
            <Text style={styles.orderTitle}>Order Details</Text>
            <View style={{ flex: 1 }} />
            <Ionicons name="chevron-down-outline" size={14} color={Colors.black} />
          </View>
          <Text style={styles.restaurantName}>{tripData?.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deliverButton} onPress={()=>navigation.navigate('DeliveryComplete', { tripData })}>
          <Ionicons name="chevron-forward-outline" size={18} color={Colors.white} />
          <Text style={styles.deliverButtonText}>Order delivered</Text>
        </TouchableOpacity>
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
                          <Text style={styles.itemPrice}>₹{item.price.toFixed(2)}</Text>
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

                      <Text style={styles.totalAmount}>₹{totalAmount.toFixed(2)}</Text>
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
