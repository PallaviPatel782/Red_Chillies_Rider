import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from '../../Components/Header';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import CustomButton from '../../Components/CustomButton';
import Colors from '../../utils/Colors/Colors';
import { SF, SH } from '../../utils/Responsiveness/Dimensions';
import { showMessage } from 'react-native-flash-message';
import { Dropdown } from 'react-native-element-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';

const ReportIssue = () => {
    const { t } = useTranslation();

    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const data = [
    { label: t('reportIssueOption1'), value: t('reportIssueOption1') },
    { label: t('reportIssueOption2'), value: t('reportIssueOption2') },
];


    const handleSubmit = () => {
        if (!selectedOption || !name || !mobile || !message) {
            showMessage({
                message: t('fillAllRequiredFields'),
                type: 'warning',
            });
            return;
        }

        showMessage({
            message: t('issueSubmittedSuccessfully'),
            type: 'success',
        });

        // Reset form
        setSelectedOption(null);
        setName('');
        setMobile('');
        setEmail('');
        setMessage('');
    };

    return (
        <KeyboardAvoidWrapper bottomComponent={<CustomButton title={t('submit')} onPress={handleSubmit} />}>
            <View style={GlobalStyles.container}>
                <Header title={t('reportIssue')} />

                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        {t('howCanWeHelp')} <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <Dropdown
                        style={GlobalStyles.textInput}
                        data={data}
                        labelField="label"
                        valueField="value"
                        placeholder={t('selectOption')}
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholderStyle={styles.placeholderStyle}
                        value={selectedOption}
                        onChange={item => setSelectedOption(item.value)}
                    />
                </View>

                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        {t('name')} <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        placeholder={t('enterName')}
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor={Colors.gray}
                    />
                </View>

                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        {t('mobile')} <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        placeholder={t('enterMobile')}
                        keyboardType="phone-pad"
                        value={mobile}
                        onChangeText={setMobile}
                        placeholderTextColor={Colors.gray}
                    />
                </View>

                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>{t('email')}</Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        placeholder={t('enterEmailOptional')}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor={Colors.gray}
                    />
                </View>

                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>
                        {t('message')} <FontAwesome name="asterisk" color="red" size={8} />
                    </Text>
                    <TextInput
                        style={[GlobalStyles.textInput, { height: SH(100), textAlignVertical: 'top' }]}
                        placeholder={t('writeMessage')}
                        value={message}
                        onChangeText={setMessage}
                        placeholderTextColor={Colors.gray}
                        multiline
                    />
                </View>
            </View>
        </KeyboardAvoidWrapper>
    );
};

export default ReportIssue;

const styles = StyleSheet.create({
    selectedTextStyle: {
        fontSize: SF(14),
        color: Colors.black,
        fontFamily: 'Ubuntu-Regular',
    },
    placeholderStyle: {
        fontSize: SF(14),
        color: Colors.gray,
        fontFamily: 'Ubuntu-Regular',
    },
});
