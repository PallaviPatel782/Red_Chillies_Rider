import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import Colors from '../../utils/Colors/Colors';
import styles from './styles';
import { SH } from '../../utils/Responsiveness/Dimensions';

const filterOptions = [
  'Last 7 days',
  'Last 30 days',
  'This Month',
  'Last Month',
  'Date Range',
];

const transactions = [
  {
    id: '1',
    title: 'Trip cancellation deduction',
    time: '01:27 PM',
    date: '14 Oct 2025',
    amount: -5,
  },
  {
    id: '2',
    title: 'Trip Earning',
    time: '12:18 PM',
    date: '14 Oct 2025',
    amount: 120.2,
  },
];

const PocketStatement = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Last 7 days');
  const [range, setRange] = useState<{ start?: string; end?: string }>({});

  // handle calendar range selection
  const onDayPress = (day: any) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: day.dateString, end: undefined });
    } else {
      if (new Date(day.dateString) < new Date(range.start)) {
        setRange({ start: day.dateString, end: range.start });
      } else {
        setRange({ ...range, end: day.dateString });
      }
    }
  };

  const getMarkedDates = () => {
    const marked: any = {};
    if (range.start) {
      marked[range.start] = { startingDay: true, color: Colors.green, textColor: '#fff' };
    }
    if (range.end) {
      marked[range.end] = { endingDay: true, color: Colors.green, textColor: '#fff' };

      let current = new Date(range.start!);
      const end = new Date(range.end);
      while (current < end) {
        const dateString = current.toISOString().split('T')[0];
        if (dateString !== range.start && dateString !== range.end)
          marked[dateString] = { color: '#c6f6d5', textColor: '#000' };
        current.setDate(current.getDate() + 1);
      }
    }
    return marked;
  };

  const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', options);
  };

  return (
    <KeyboardAvoidWrapper>
      <View style={GlobalStyles.container}>
        <Header title="Pocket statement" />
        <View style={{ alignItems: 'flex-start', marginTop: SH(15) }}>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setShowFilterModal(true)}>
            <Icon name="filter" size={16} color={Colors.black} />
            <Text style={styles.filterText}> Filters ▾</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dateRow}>
          <View style={styles.line} />
          <Text style={styles.dateText}>
            {range.start && range.end
              ? `${formatDate(range.start)} to ${formatDate(range.end)}`
              : '12 Oct to 19 Oct'}
          </Text>
          <View style={styles.line} />
        </View>


        <View style={styles.divider} />
        <FlatList
          data={transactions}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <View>
                <Text style={styles.transactionTitle}>{item.title}</Text>
                <Text style={styles.transactionSub}>
                  {item.time} • {item.date}
                </Text>
              </View>
              <Text
                style={[
                  styles.transactionAmount,
                  { color: item.amount < 0 ? 'red' : 'green' },
                ]}>
                {item.amount < 0 ? `-₹${Math.abs(item.amount)}` : `+₹${item.amount}`}
              </Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.itemDivider} />}
          contentContainerStyle={{ paddingTop: 10 }}
        />
        <Modal
          visible={showFilterModal}
          transparent
          animationType="fade"
          onRequestClose={() => setShowFilterModal(false)}>
          <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
            <View style={styles.filterOverlay}>
              <TouchableWithoutFeedback>
                <View style={styles.dropdownWrapper}>
                  <View style={styles.dropdownContainer}>
                    {filterOptions.map((item) => (
                      <TouchableOpacity
                        key={item}
                        style={styles.dropdownItem}
                        onPress={() => {
                          setSelectedFilter(item);
                          setShowFilterModal(false);
                          if (item === 'Date Range') {
                            setShowCalendar(true);
                          }
                        }}>
                        <Text style={styles.dropdownText}>{item}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Modal
          visible={showCalendar}
          transparent
          animationType="slide"
          onRequestClose={() => setShowCalendar(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.calendarContainer}>
              <Calendar
                markingType="period"
                markedDates={getMarkedDates()}
                onDayPress={onDayPress}
                theme={{
                  selectedDayBackgroundColor: Colors.green,
                  todayTextColor: Colors.red,
                  arrowColor: Colors.black,
                }}
              />
              <TouchableOpacity
                style={styles.doneBtn}
                onPress={() => setShowCalendar(false)}>
                <Text style={styles.doneText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </View>
    </KeyboardAvoidWrapper>
  );
};

export default PocketStatement;
