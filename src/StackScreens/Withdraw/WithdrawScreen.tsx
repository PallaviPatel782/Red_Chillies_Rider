import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../Components/Header';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import styles from './styles';
import Colors from '../../utils/Colors/Colors';
import { useTranslation } from 'react-i18next';

const WithdrawScreen = ({ navigation }: any) => {
  const [amount, setAmount] = useState('');
  const { t } = useTranslation();

  const withdrawableAmount = 1816.55;
  const currencySymbol = "SAR";

  const handleWithdraw = () => {
    if (!amount || parseFloat(amount) <= 0) return;
    navigation.navigate('WithdrawSucessfully', { amount });
  };

  const displayAmount = amount ? parseFloat(amount) : withdrawableAmount;

  return (
    <KeyboardAvoidWrapper
      bottomComponent={
        <View style={styles.noteBox}>
          <Text style={styles.noteItem}>
            • {t("maxWithdrawLimit")} 2000 {currencySymbol}
          </Text>

          <Text style={styles.noteItem}>
            • {t("oneWithdrawDay")}
          </Text>
        </View>
      }
    >
      <View style={[GlobalStyles.container, { paddingHorizontal: 16 }]}>

        <Header title={t("addToBankAccount")} />

        <View style={styles.withdrawCard}>
          <Text style={styles.withdrawTitle}>{t("withdrawableAmount")}</Text>
          <Text style={styles.withdrawValue}>
            {displayAmount.toFixed(2)} {currencySymbol}
          </Text>
        </View>

        <View style={styles.amountSection}>
          <Text style={styles.amountLabel}>{t("enterAmount")}</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.amountInput}
              placeholder="0"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />
            <Text style={styles.rupeeSymbol}>{currencySymbol}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.withdrawButton,
            { backgroundColor: amount ? Colors.red : '#f3b9b9' },
          ]}
          onPress={handleWithdraw}
          disabled={!amount}
        >
          <Text style={styles.withdrawText}>{t("withdraw")}</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidWrapper>
  );
};

export default WithdrawScreen;
