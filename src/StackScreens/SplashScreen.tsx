import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import CustomButton from '../Components/CustomButton';
import Header from '../Components/Header';
import GlobalStyles from '../utils/GlobalStyles/GlobalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import KeyboardAvoidWrapper from '../Components/KeyboardAvoidWrapper';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import { SH } from '../utils/Responsiveness/Dimensions';

const SplashScreen = ({ navigation }: any) => {
  const [contact, setContact] = useState('');
  const [countryCode, setCountryCode] = useState<CountryCode>('IN');
  const [callingCode, setCallingCode] = useState<string>('91');
  const [visible, setVisible] = useState(false);

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  return (
    <KeyboardAvoidWrapper>
      <View style={GlobalStyles.container}>
        <Header title=" " />
        <View style={styles.middleContainer}>
          <Image
            source={require('../assests/Images/SplashImage.png')}
            style={styles.image}
            resizeMode="contain"
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
              alignSelf: 'center',
            }}
          >
            <Text style={styles.title}>Welcome Back</Text>
            <MaterialCommunityIcons
              name="hand-wave"
              size={28}
              color="#ebb113"
              style={{ marginLeft: 6 }}
            />
          </View>

          <Text style={styles.subtitle}>
            Sign-up to deliver orders with Red Chillies Rider
          </Text>

          <View
            style={[
              GlobalStyles.textInputContainer,
              { flexDirection: 'row', alignItems: 'center' },
            ]}
          >
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 8,
              }}
            >
              <CountryPicker
                {...{
                  countryCode,
                  withFilter: true,
                  withFlag: true,
                  withCallingCodeButton: false,
                  withCallingCode: true,
                  withEmoji: true,
                  onSelect,
                  visible,
                  onClose: () => setVisible(false),
                }}
              />
              <Text style={{ fontSize: 16, color: '#000' }}>+{callingCode}</Text>
            </TouchableOpacity>

            <TextInput
              style={[GlobalStyles.textInput, { flex: 1 }]}
              placeholder="9999999999"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              value={contact}
              onChangeText={setContact}
              returnKeyType="done"
              maxLength={10}
            />
          </View>

          <View style={{ marginTop: SH(15) }}>
            <CustomButton
              title="Continue"
              onPress={() => navigation.navigate('OtpVerification')}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default SplashScreen;
