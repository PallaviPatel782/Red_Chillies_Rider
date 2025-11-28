import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from '../../Components/Header';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import CustomButton from '../../Components/CustomButton';
import { showMessage } from 'react-native-flash-message';
import Colors from '../../utils/Colors/Colors';
import { useTranslation } from 'react-i18next';
import { SH, SW, SF } from '../../utils/Responsiveness/Dimensions';

const SendFeedBack = () => {
    const { t } = useTranslation();
    const [feedback, setFeedback] = useState('');

    const handleSubmit = () => {
        if (!feedback.trim()) {
            showMessage({
                message: t('feedbackEmpty'),
                type: 'warning',
                color: Colors.white,
            });
            return;
        }
        showMessage({
            message: t('feedbackSubmitted'),
            type: 'success',
            backgroundColor: Colors.green,
            color: Colors.white,
        });
        setFeedback('');
    };

    return (
        <KeyboardAvoidWrapper
            bottomComponent={
                <CustomButton title={t('submitFeedback')} onPress={handleSubmit} />
            }
        >
            <View style={GlobalStyles.container}>
                <Header title={t('sendFeedback')} />

                <View style={styles.innerContainer}>
                    <Text style={styles.infoText}>{t('feedbackInfo')}</Text>

                    <TextInput
                        style={styles.inputBox}
                        placeholder={t('feedbackPlaceholder')}
                        placeholderTextColor={Colors.gray}
                        multiline
                        numberOfLines={6}
                        textAlignVertical="top"
                        value={feedback}
                        onChangeText={setFeedback}
                    />
                </View>
            </View>
        </KeyboardAvoidWrapper>
    );
};

export default SendFeedBack;

const styles = StyleSheet.create({
    innerContainer: {
        paddingTop: SH(15),
    },

    infoText: {
        fontSize: SF(14),
        color: Colors.black,
        marginBottom: SH(15),
        marginLeft: SW(5),
        fontFamily: 'Ubuntu-Regular',
        lineHeight: SH(22),
    },

    inputBox: {
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: SW(10),
        padding: SW(12),
        fontSize: SF(14),
        color: Colors.black,
        minHeight: SH(120),
        fontFamily: 'Ubuntu-Regular',
    },
});
