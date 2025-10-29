import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from '../../Components/Header';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import CustomButton from '../../Components/CustomButton';
import Colors from '../../utils/Colors/Colors';
import { SF, SH, SW } from '../../utils/Responsiveness/Dimensions';
import { showMessage } from 'react-native-flash-message';
import { Dropdown } from 'react-native-element-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ReportIssue = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const data = [
        { label: 'Report an Issue', value: 'Report an Issue' },
        { label: 'Report an Incident', value: 'Report an Incident' },
    ];

    const handleSubmit = () => {
        if (!selectedOption || !name || !mobile || !message) {
            showMessage({
                message: 'Please fill all required fields (*)',
                type: 'warning',
            });
            return;
        }

        showMessage({
            message: 'Issue submitted successfully!',
            type: 'success',
        });
    };

    return (
        <KeyboardAvoidWrapper
            bottomComponent={<CustomButton title="Submit" onPress={handleSubmit} />}
        >
            <View style={GlobalStyles.container}>
                <Header title={'Report an Issue'} />
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>How can we help you <FontAwesome name="asterisk" color="red" size={8} /></Text>
                    <Dropdown
                        style={GlobalStyles.textInput}
                        data={data}
                        labelField="label"
                        valueField="value"
                        placeholder="Select an option"
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholderStyle={styles.placeholderStyle}
                        value={selectedOption}
                        onChange={item => setSelectedOption(item.value)}
                    />
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>Name <FontAwesome name="asterisk" color="red" size={8} /></Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        placeholder="Enter your name"
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor={Colors.gray}
                    />
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>Mobile <FontAwesome name="asterisk" color="red" size={8} /></Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        placeholder="Enter your mobile number"
                        keyboardType="phone-pad"
                        value={mobile}
                        onChangeText={setMobile}
                        placeholderTextColor={Colors.gray}
                    />
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>Email</Text>
                    <TextInput
                        style={GlobalStyles.textInput}
                        placeholder="Enter your email (optional)"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor={Colors.gray}
                    />
                </View>
                <View style={GlobalStyles.textInputContainer}>
                    <Text style={GlobalStyles.inputLabel}>Message <FontAwesome name="asterisk" color="red" size={8} /></Text>
                    <TextInput
                        style={[GlobalStyles.textInput, { height: SH(100), textAlignVertical: 'top' }]}
                        placeholder="Write your message here..."
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
