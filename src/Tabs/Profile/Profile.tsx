import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Routing/RootNavigator';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation();

  return (
    <KeyboardAvoidWrapper>
      <View style={GlobalStyles.container}>
        <Header title={t('profile')} />

        <ScrollView contentContainerStyle={styles.contentContainer}>

          <View style={styles.profileCard}>
            <Image
              source={require('../../assests/Images/ProfilePic.png')}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.nameText}>Samruddhi</Text>
              <TouchableOpacity onPress={() => navigation.navigate('YourProfile')}>
                <Text style={styles.viewProfileText}>{t('viewProfile')} ›</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.bankButton} onPress={()=>navigation.navigate("ChangeBankAccount")}>
            <Text style={styles.bankButtonText}>{t('bankDetails')}</Text>
          </TouchableOpacity>
          <View style={styles.bankDetailsBox}>
            <Text style={styles.bankText}>{t('bank')} : {t("snb")}</Text>
            <Text style={styles.bankText}>{t('accountNumber')} : 1234567890</Text>
            <Text style={styles.bankText}>{t('iban')} : SA03 0000 0000 0000 0000 0000</Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{t('support')}</Text>

            <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('HelpCenter')}>
              <View style={styles.iconRow}>
                <Icon name="help-circle-outline" size={20} color="#555" />
                <Text style={styles.listText}>{t('helpCenter')}</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('Settings')}>
              <View style={styles.iconRow}>
                <Icon name="settings-outline" size={20} color="#555" />
                <Text style={styles.listText}>{t('settings')}</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('ChangeBankAccount')}>
              <View style={styles.iconRow}>
                <MaterialIcon name="bank-outline" size={20} color="#555" />
                <Text style={styles.listText}>{t('changeBankAccount')}</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          </View>

          {/* More Section */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{t('more')}</Text>

            <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('About')}>
              <View style={styles.iconRow}>
                <Icon name="information-circle-outline" size={20} color="#555" />
                <Text style={styles.listText}>{t('about')}</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('SendFeedBack')}>
              <View style={styles.iconRow}>
                <MaterialIcon name="email-outline" size={20} color="#555" />
                <Text style={styles.listText}>{t('sendFeedback')}</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('ReportIssue')}>
              <View style={styles.iconRow}>
                <MaterialIcon name="alert-circle-outline" size={20} color="#555" />
                <Text style={styles.listText}>{t('reportIssue')}</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem}>
              <View style={styles.iconRow}>
                <Icon name="log-out-outline" size={20} color="red" />
                <Text style={[styles.listText, { color: 'red' }]}>{t('logout')}</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default Profile;
