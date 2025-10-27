import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Routing/RootNavigator';
import styles from './styles';
import CustomButton from '../Components/CustomButton';
import Header from '../Components/Header';
import GlobalStyles from '../utils/GlobalStyles/GlobalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import KeyboardAvoidWrapper from '../Components/KeyboardAvoidWrapper'; 

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Splash'
>;

type Props = {
  navigation: SplashScreenNavigationProp;
};

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const [contact, setContact] = useState('');

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

          <View style={GlobalStyles.textInputContainer}>
            <TextInput
              style={GlobalStyles.textInput}
              placeholder="+91 9999999999"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              value={contact}
              onChangeText={setContact}
              returnKeyType="done"
            />
          </View>

          <CustomButton
            title="Continue"
            onPress={() => navigation.replace('OtpVerification')}
          />
        </View>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default SplashScreen;
