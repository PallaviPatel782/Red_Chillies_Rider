import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Header from '../../Components/Header';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import CustomButton from '../../Components/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../utils/Colors/Colors';
import { SF, SH, SW } from '../../utils/Responsiveness/Dimensions';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './styles';

const BankDetials = ({ navigation }: any) => {
    const [bank, setBank] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
    const [ifscCode, setIfscCode] = useState('');

    const bankOptions = [
        { label: 'State Bank of India', value: 'SBI' },
        { label: 'HDFC Bank', value: 'HDFC' },
        { label: 'ICICI Bank', value: 'ICICI' },
        { label: 'Axis Bank', value: 'AXIS' },
        { label: 'Kotak Mahindra Bank', value: 'KOTAK' },
        { label: 'Punjab National Bank', value: 'PNB' },
    ];

    const handleVerify = () => {
        navigation.navigate('selfi');
    };

    return (
        <KeyboardAvoidWrapper bottomComponent={<CustomButton title="Verify" onPress={handleVerify} />}>

            <View style={[GlobalStyles.container]}>
                <Header title="Bank Account Details" />

                <Text style={styles.infoText}>
                    Please fill details of the bank account where you want your earnings.
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
                        placeholder="Select bank account"
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
                        Bank IFSC Code <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        placeholder="IFSC Code"
                        autoCapitalize="characters"
                        placeholderTextColor={Colors.gray}
                        value={ifscCode}
                        onChangeText={setIfscCode}
                    />
                </View>
                <Text style={styles.noteText}>
                    Bank account can be changed only once in 7 days.
                </Text>
            </View>
        </KeyboardAvoidWrapper>
    );
};

export default BankDetials;
