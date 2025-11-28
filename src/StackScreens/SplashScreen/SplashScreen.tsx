import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import styles from './styles';
import CustomButton from '../../Components/CustomButton';
import Header from '../../Components/Header';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import { SF, SH } from '../../utils/Responsiveness/Dimensions';
import { useTranslation } from 'react-i18next';
import LanguageModal from '../../Components/LanguageModal';

const SplashScreen = ({ navigation }: any) => {
  const [contact, setContact] = useState('');
  const [showLangModal, setShowLangModal] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setShowLangModal(true);
    }, 300);
  }, []);

  return (
    <KeyboardAvoidWrapper>
      <View style={GlobalStyles.container}>
        <LanguageModal
          visible={showLangModal}
          onClose={() => setShowLangModal(false)}
        />

        <Header title=" " />

        <View style={styles.middleContainer}>
          <Image
            source={require('../../assests/Images/SplashImage.png')}
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
            <Text style={styles.title}>{t('welcome')}</Text>

            <MaterialCommunityIcons
              name="hand-wave"
              size={28}
              color="#ebb113"
              style={{ marginLeft: 6 }}
            />
          </View>

          <Text style={styles.subtitle}>
            {t('signupText')}
          </Text>

          <View
            style={[
              GlobalStyles.textInputContainer,
              { flexDirection: 'row', alignItems: 'center' },
            ]}
          >
            <Text
              style={{
                fontSize: SF(15),
                color: '#000',
                fontFamily: "Ubuntu-Regular",
                margin: 7
              }}
            >
              +966
            </Text>

            <TextInput
              style={[GlobalStyles.textInput, { flex: 1 }]}
              placeholder={t("enterPhone")}
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              value={contact}
              onChangeText={setContact}
              returnKeyType="done"
              maxLength={9}
            />
          </View>

          <View style={{ marginTop: SH(15) }}>
            <CustomButton
              title={t("continue")}
              onPress={() => navigation.navigate('OtpVerification')}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default SplashScreen;
