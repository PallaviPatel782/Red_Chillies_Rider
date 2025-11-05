import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import styles from './styles';
import Colors from '../../utils/Colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PickOrder = () => {
   const navigation = useNavigation<any>();
  return (
    <KeyboardAvoidWrapper>
      <View style={[GlobalStyles.container, styles.mainContainer]}>
        <Header title="Pick Order" />
        <View style={styles.timerContainer}>
          <View style={styles.timerBox}>
            <Text style={styles.timerText}>1:05</Text>
          </View>
          <Text style={styles.timerStatus}>Order is ready Pickup the order</Text>
        </View>
        <View style={styles.orderCard}>
          <Ionicons name="document-text-outline" size={24} color={Colors.red} style={{alignSelf:"center"}} />
          <Text style={styles.orderId}>Order Id: 1234</Text>

          <View style={styles.divider} />
          <View style={styles.itemRow}>
            <Ionicons name="checkmark-circle-outline" size={18} color={Colors.green} />
            <Text style={styles.itemName}>Panner Tikka Masala</Text>
            <Text style={styles.itemPrice}>₹250.00</Text>
          </View>

          <View style={styles.itemRow}>
            <Ionicons name="checkmark-circle-outline" size={18} color={Colors.green} />
            <Text style={styles.itemName}>2 × Dal Makhani</Text>
            <Text style={styles.itemPrice}>₹470.00</Text>
          </View>

          <View style={styles.itemRow}>
            <Ionicons name="alert-circle-outline" size={18} color={Colors.red} />
            <Text style={styles.itemName}>Chicken Tandoori</Text>
            <Text style={styles.itemPrice}>₹250.00</Text>
          </View>

          <View style={styles.divider} />
          <View style={styles.totalRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.totalText}>Total bill</Text>
              <View style={styles.paidTagBox}>
                <Text style={styles.paidTagText}>PAID</Text>
              </View>
            </View>
            <Text style={styles.totalAmount}>₹970.00</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.pickButton} onPress={()=>navigation.navigate('DropOrder')}>
          <Ionicons name="chevron-forward-outline" size={20} color={Colors.white} />
          <Text style={styles.pickButtonText}>Picked order</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default PickOrder;
