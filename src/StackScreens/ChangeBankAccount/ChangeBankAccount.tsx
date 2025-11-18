import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Header from '../../Components/Header';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import CustomButton from '../../Components/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../utils/Colors/Colors';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './styles';

const ChangeBankAccount = ({ navigation }: any) => {
    const [bank, setBank] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
    const [iban, setIban] = useState('');

    const bankOptions = [
        { label: "Saudi National Bank (SNB)", value: "SNB" },
        { label: "Al Rajhi Bank", value: "ALRAJHI" },
        { label: "Riyad Bank", value: "RIYAD" },
        { label: "Saudi British Bank (SABB)", value: "SABB" },
        { label: "Arab National Bank", value: "ANB" },
        { label: "Bank AlJazira", value: "ALJAZIRA" },
        { label: "Banque Saudi Fransi", value: "BSF" },
        { label: "Alinma Bank", value: "ALINMA" },
        { label: "Bank AlBilad", value: "ALBILAD" },
        { label: "Gulf International Bank", value: "GIB" },
    ];

    const handleVerify = () => {
        navigation.goBack();
    };

    return (
        <KeyboardAvoidWrapper bottomComponent={<CustomButton title="Verify" onPress={handleVerify} />}>

            <View style={[GlobalStyles.container]}>
                <Header title="Change Bank Account Details" />

                <Text style={styles.infoText}>
                    Please update your bank account details to continue receiving your earnings.

                </Text>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        Bank <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <Dropdown
                        style={GlobalStyles.textInput}
                        data={bankOptions}
                        labelField="label"
                        valueField="value"
                        placeholder="Select bank"
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholderStyle={styles.placeholderStyle}
                        value={bank}
                        onChange={(item) => setBank(item.value)}
                    />
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        Account Number <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        placeholder="Enter account number"
                        keyboardType="numeric"
                        value={accountNumber}
                        placeholderTextColor={Colors.gray}
                        onChangeText={setAccountNumber}
                    />
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        Confirm Account Number <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        placeholder="Confirm account number"
                        keyboardType="numeric"
                        value={confirmAccountNumber}
                        placeholderTextColor={Colors.gray}
                        onChangeText={setConfirmAccountNumber}
                    />
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        IBAN Number <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        placeholder="Enter IBAN (e.g., SA03XXXXXXXXXXXXXXX)"
                        autoCapitalize="characters"
                        value={iban}
                        placeholderTextColor={Colors.gray}
                        onChangeText={setIban}
                    />
                </View>
                <Text style={styles.noteText}>
                    All future earnings will be deposited into your updated bank account.
                </Text>

            </View>
        </KeyboardAvoidWrapper>
    );
};

export default ChangeBankAccount;
