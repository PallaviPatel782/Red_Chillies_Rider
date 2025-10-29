import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../Components/Header';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import styles from './styles';
import Colors from '../../utils/Colors/Colors';

const WithdrawScreen = ({ navigation }: any) => {
  const [amount, setAmount] = useState('');
  const withdrawableAmount = 1816.55;

  const handleWithdraw = () => {
    if (!amount || parseFloat(amount) <= 0) return;
    navigation.navigate('WithdrawSucessfully', { amount });
  };

  const displayAmount = amount ? parseFloat(amount) : withdrawableAmount;

  return (
    <KeyboardAvoidWrapper
    bottomComponent={
         <View style={styles.noteBox}>
          <Text style={styles.noteItem}>• Maximum withdrawal limit is ₹2000</Text>
          <Text style={styles.noteItem}>• You can withdraw only 1 time in a day</Text>
        </View>
    }
    >
      <View style={[GlobalStyles.container, { paddingHorizontal: 16 }]}>
        <Header title="Add to bank account" />
        <View style={styles.withdrawCard}>
          <Text style={styles.withdrawTitle}>Withdrawable amount</Text>
          <Text style={styles.withdrawValue}>₹{displayAmount.toFixed(2)}</Text>
        </View>
        <View style={styles.amountSection}>
          <Text style={styles.amountLabel}>Enter amount</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.rupeeSymbol}>₹</Text>
            <TextInput
              style={styles.amountInput}
              placeholder="0"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.withdrawButton,
            { backgroundColor: amount ? Colors.red : '#f3b9b9' },
          ]}
          onPress={handleWithdraw}
          disabled={!amount}>
          <Text style={styles.withdrawText}>Withdraw</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default WithdrawScreen;
