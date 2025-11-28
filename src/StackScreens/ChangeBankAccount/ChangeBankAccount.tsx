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
import { useTranslation } from 'react-i18next';

const ChangeBankAccount = ({ navigation }: any) => {
    const { t } = useTranslation();

    const [bank, setBank] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
    const [iban, setIban] = useState('');

    const bankOptions = [
        { label: t('snb'), value: 'SNB' },
        { label: t('alrajhi'), value: 'ALRAJHI' },
        { label: t('riyad'), value: 'RIYAD' },
        { label: t('sabb'), value: 'SABB' },
        { label: t('anb'), value: 'ANB' },
        { label: t('aljazira'), value: 'ALJAZIRA' },
        { label: t('bsfr'), value: 'BSF' },
        { label: t('alinma'), value: 'ALINMA' },
        { label: t('albilad'), value: 'ALBILAD' },
        { label: t('gib'), value: 'GIB' },
    ];

    const handleVerify = () => {
        navigation.goBack();
    };

    return (
        <KeyboardAvoidWrapper bottomComponent={<CustomButton title={t('verify')} onPress={handleVerify} />}>

            <View style={[GlobalStyles.container]}>
                <Header title={t('changeBankAccountDetails')} />

                <Text style={styles.infoText}>{t('updateBankInfo')}</Text>

                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        {t('bank')} <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <Dropdown
                        style={GlobalStyles.textInput}
                        data={bankOptions}
                        labelField="label"
                        valueField="value"
                        placeholder={t('selectBank')}
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholderStyle={styles.placeholderStyle}
                        value={bank}
                        onChange={(item) => setBank(item.value)}
                    />
                </View>

                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        {t('accountNumber')} <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        placeholder={t('enterAccountNumber')}
                        keyboardType="numeric"
                        value={accountNumber}
                        placeholderTextColor={Colors.gray}
                        onChangeText={setAccountNumber}
                    />
                </View>

                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        {t('confirmAccountNumber')} <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        placeholder={t('enterConfirmAccount')}
                        keyboardType="numeric"
                        value={confirmAccountNumber}
                        placeholderTextColor={Colors.gray}
                        onChangeText={setConfirmAccountNumber}
                    />
                </View>

                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        {t('ibanNumber')} <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        placeholder={t('enterIban')}
                        autoCapitalize="characters"
                        value={iban}
                        placeholderTextColor={Colors.gray}
                        onChangeText={setIban}
                    />
                </View>

                <Text style={styles.noteText}>{t('bankNote')}</Text>

            </View>
        </KeyboardAvoidWrapper>
    );
};

export default ChangeBankAccount;
