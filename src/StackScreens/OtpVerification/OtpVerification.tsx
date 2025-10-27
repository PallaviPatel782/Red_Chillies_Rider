import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Routing/RootNavigator';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import CustomButton from '../../Components/CustomButton';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../utils/Colors/Colors';
import { SH } from '../../utils/Responsiveness/Dimensions';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';

const OtpVerification: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [timer, setTimer] = useState(45);
  const refs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (/^\d$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < refs.current.length - 1) {
        refs.current[index + 1]?.focus();
      }
      if (!value && index > 0) {
        refs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = () => {
    const code = otp.join('');
    console.log('OTP Entered:', code);
    navigation.navigate('RiderData');
  };

  return (
    <KeyboardAvoidWrapper
      bottomComponent={
        <CustomButton title="Continue" onPress={handleSubmit} />
      }
    >
      <View style={GlobalStyles.container}>
        <Header title="" />
        <View style={styles.content}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.title}>Verification Code</Text>
            <FontAwesome
              name="check-circle"
              color={Colors.green}
              size={24}
              style={{ marginLeft: 8 }}
            />
          </View>

          <Text style={styles.subtitle}>
            We have sent the verification code to your mobile number.
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((value, index) => (
              <TextInput
                key={index}
                ref={(el) => { refs.current[index] = el; }}
                value={value}
                onChangeText={(text) => handleChange(index, text)}
                keyboardType="number-pad"
                maxLength={1}
                style={[
                  styles.otpBox,
                  { borderColor: activeIndex === index ? Colors.green : styles.otpBox.borderColor },
                ]}
                textAlign="center"
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
              />
            ))}
          </View>

          <Text style={{ color: Colors.gray, marginTop: SH(20) }}>
            Didn’t get the OTP? Resend SMS in 0:{timer < 10 ? `0${timer}` : timer}
          </Text>
        </View>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default OtpVerification;
