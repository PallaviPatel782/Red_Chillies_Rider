import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { SH, SW, SF } from '../../utils/Responsiveness/Dimensions';
import { useNavigation } from '@react-navigation/native';
const TripHistory = () => {
  const navigation = useNavigation<any>();

  return (
    <KeyboardAvoidWrapper>
      <View style={GlobalStyles.container}>
        <Header title="Trip History" />
        <View style={styles.progressCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderRow}>
              <Ionicons name="checkmark-circle-outline" size={18} color="#2266D1" />
              <Text style={styles.progressTitle}>You can view your trip history and pocket statement from here.</Text>
            </View>
          </View>

          <View>
            <View style={styles.progressRow}>
              <TouchableOpacity style={[styles.progressItem, { backgroundColor: '#3DA966' }]} onPress={() => navigation.navigate('PastTrips')}>
                <View style={styles.iconCircle}>
                  <Ionicons name="time-outline" size={20} color="#3DA966" />
                </View>
                <Text style={styles.amount}>Trip</Text>
                <Text style={[styles.itemLabel]}>History</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.progressItem, { backgroundColor: '#00B1C5' }]}
                onPress={() => navigation.navigate('PocketStatement')}
              >
                <View style={styles.iconCircle}>
                  <MaterialCommunityIcons name="wallet-outline" size={20} color="#00B1C5" />
                </View>
                <Text style={styles.amount}>Pocket</Text>
                <Text style={styles.itemLabel}>Statement</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.summaryContainer}>
            <Text style={styles.todaysSummaryText}>Today’s Summary</Text>
            <View style={styles.tripTextContainer}>
              <Text style={styles.tripText}>Trip completed: 10</Text>
              <Text style={styles.tripText}>Earnings: 210 SAR</Text>
            </View>
          </View>

        </View>

        <View style={styles.infoHeader}>
          <View style={styles.cardHeaderRow}>
            <MaterialCommunityIcons name="lightbulb-variant-outline" size={18} color="#E11311" />
            <Text style={styles.infoTitle}>Tip: Keep your trip details updated regularly to view accurate pocket statements.</Text>
          </View>
        </View>


      </View>
    </KeyboardAvoidWrapper>
  );
};

export default TripHistory;
