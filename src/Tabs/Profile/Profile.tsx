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

const Profile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <KeyboardAvoidWrapper>
      <View style={GlobalStyles.container}>
        <Header title={''} />
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.profileCard}>
            <Image
              source={require('../../assests/Images/ProfilePic.png')}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.nameText}>Samruddhi</Text>
              <TouchableOpacity onPress={() => navigation.navigate('YourProfile')}>
                <Text style={styles.viewProfileText}>View Profile ›</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.bankButton}>
            <Text style={styles.bankButtonText}>Bank Details</Text>
          </TouchableOpacity>

          <View style={styles.bankDetailsBox}>
            <Text style={styles.bankText}>Bank : Union Bank Of India</Text>
            <Text style={styles.bankText}>Account Number : 1234567890</Text>
            <Text style={styles.bankText}>Bank IFSC code : 1234567890</Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Support</Text>

            <TouchableOpacity
              style={styles.listItem}
              onPress={() => navigation.navigate('HelpCenter')}
            >
              <View style={styles.iconRow}>
                <Icon name="help-circle-outline" size={20} color="#555" />
                <Text style={styles.listText}>Help Center</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.listItem}
              onPress={() => navigation.navigate('ChangeBankAccount')}
            >
              <View style={styles.iconRow}>
                <MaterialIcon name="bank-outline" size={20} color="#555" />
                <Text style={styles.listText}>Change Bank Account</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>More</Text>

            <TouchableOpacity
              style={styles.listItem}
              onPress={() => navigation.navigate('About')}
            >
              <View style={styles.iconRow}>
                <Icon name="information-circle-outline" size={20} color="#555" />
                <Text style={styles.listText}>About</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.listItem}
              onPress={() => navigation.navigate('SendFeedBack')}
            >
              <View style={styles.iconRow}>
                <MaterialIcon name="email-outline" size={20} color="#555" />
                <Text style={styles.listText}>Send Feedback</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.listItem}
              onPress={() => navigation.navigate('ReportIssue')}
            >
              <View style={styles.iconRow}>
                <MaterialIcon name="alert-circle-outline" size={20} color="#555" />
                <Text style={styles.listText}>Report an Issue</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem}>
              <View style={styles.iconRow}>
                <Icon name="log-out-outline" size={20} color="red" />
                <Text style={[styles.listText, { color: 'red' }]}>Log out</Text>
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
