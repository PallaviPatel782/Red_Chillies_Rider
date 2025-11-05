import React from 'react';
import { View, Text, TouchableOpacity, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import Colors from '../../utils/Colors/Colors';
import { SF } from '../../utils/Responsiveness/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const DropOrder = () => {
  const navigation = useNavigation<any>();

  const handleCall = () => {
    const phone = '9876543210';
    if (phone) {
      Linking.openURL(`tel:${phone}`);
    } else {
      Alert.alert('No phone number available');
    }
  };

  return (
    <KeyboardAvoidWrapper>
      <View style={GlobalStyles.container}>
        <Header title="Drop Order" />
        <View style={styles.dropTag}>
          <Text style={styles.dropTagText}>Drop</Text>
        </View>
        <View style={styles.customerInfo}>
          <Text style={styles.customerName}>Samruddhi Bansod</Text>
          <Text style={styles.address}>
            37/3-153, Sector No.33, Chinchwad, Pimpri-Chinchwad,{'\n'}
            Maharashtra 411033, India.
          </Text>
          <Text style={styles.orderId}>Order Id: 1234</Text>
        </View>
        <View style={styles.callMapRow}>
          <TouchableOpacity style={styles.callButton} onPress={handleCall}>
            <Ionicons name="call-outline" size={SF(14)} color={Colors.red} />
            <Text style={styles.callButtonText}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mapButton}>
            <Ionicons name="navigate-outline" size={SF(14)} color={Colors.white} />
            <Text style={styles.mapButtonText}>Map</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.reachedButton}>
          <Ionicons name="chevron-forward" size={SF(16)} color={Colors.white} />
          <Text style={styles.reachedButtonText}>Reached drop</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default DropOrder;
