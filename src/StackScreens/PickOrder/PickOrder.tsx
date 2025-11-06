import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import styles from './styles';
import Colors from '../../utils/Colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../Routing/RootNavigator';
import { SH,SW,SF } from '../../utils/Responsiveness/Dimensions';

type PickOrderRouteProp = RouteProp<RootStackParamList, 'PickOrder'>;

const PickOrder = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<PickOrderRouteProp>();
  const { tripData } = route.params;

  const [timeLeft, setTimeLeft] = useState(() => {
    const parts = tripData?.timer?.split('.') || ['0', '0'];
    const totalSeconds = parseInt(parts[0]) * 60 + parseInt(parts[1]);
    return totalSeconds;
  });

  const intervalRef = useRef<any>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const totalAmount = tripData.orderItems.reduce(
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
      <View style={[GlobalStyles.container, styles.mainContainer]}>
        <Header title="Pick Order" />
        <View style={styles.timerContainer}>
          <View
            style={[
              styles.timerBox,
              timeLeft <= 60
                ? { backgroundColor: Colors.red }
                : { backgroundColor: Colors.dark_green },
            ]}
          >
            <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
          </View>
          <Text
            style={[
              styles.timerStatus,
              timeLeft <= 60 && { color: Colors.red },
            ]}
          >
            {timeLeft > 0
              ? 'Order is ready — Pick up the order'
              : '⏰ Time over — please contact support'}
          </Text>
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
                  tripData.paymentMode === 'Online Payment'
                    ? { backgroundColor: '#E6F8ED', borderColor: Colors.green }
                    : { backgroundColor: '#FFF4E1', borderColor: '#FFB84E' },
                ]}
              >
                <Ionicons
                  name={
                    tripData.paymentMode === 'Online Payment'
                      ? 'checkmark-done-circle-outline'
                      : 'cash-outline'
                  }
                  size={14}
                  color={
                    tripData.paymentMode === 'Online Payment'
                      ? Colors.green
                      : '#FF9F1C'
                  }
                  style={{ marginRight: SW(4) }}
                />
                <Text
                  style={[
                    styles.paidTagText,
                    tripData.paymentMode === 'Online Payment'
                      ? { color: Colors.green }
                      : { color: '#FF9F1C' },
                  ]}
                >
                  {tripData.paymentMode === 'Online Payment' ? 'PAID' : 'CASH'}
                </Text>
              </View>
            </View>

            <Text style={styles.totalAmount}>₹{totalAmount.toFixed(2)}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.pickButton}
          onPress={() => navigation.navigate('DropOrder', { tripData })}
        >
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color={Colors.white}
          />
          <Text style={styles.pickButtonText}>Picked order</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default PickOrder;
