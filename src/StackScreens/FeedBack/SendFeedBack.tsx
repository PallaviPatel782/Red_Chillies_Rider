import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from '../../Components/Header';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import CustomButton from '../../Components/CustomButton';
import { SF, SH, SW } from '../../utils/Responsiveness/Dimensions';
import Colors from '../../utils/Colors/Colors';
import { showMessage } from 'react-native-flash-message';

const SendFeedBack = () => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = () => {
        if (!feedback.trim()) {
            showMessage({
                message: 'Please enter your feedback before submitting.',
                type: 'warning',
                color: Colors.white,
            });
            return;
        }
        showMessage({
            message: 'Feedback submitted successfully!',
            type: 'success',
            backgroundColor: Colors.green,
            color: Colors.white,
        });
        setFeedback('');
    };

    return (
        <KeyboardAvoidWrapper
            bottomComponent={
                <CustomButton title="Submit feedback" onPress={handleSubmit} />
            }
        >
            <View style={GlobalStyles.container}>
                <Header title={'Send Feedback'} />

                <View style={styles.innerContainer}>
                    <Text style={styles.infoText}>
                        Tell us what you love about the app, or what we could be doing better.
                    </Text>

                    <TextInput
                        style={styles.inputBox}
                        placeholder="Write your feedback here..."
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
