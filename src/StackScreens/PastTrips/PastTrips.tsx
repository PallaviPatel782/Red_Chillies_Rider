import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../Components/Header';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import Colors from '../../utils/Colors/Colors';
import styles from './styles';
import { deliveryData } from '../../DummyData/DummyData';

const filterOptions = [
    'Today',
    'Last 7 days',
    'Last 30 days',
    'This Month',
    'Last Month',
    'Date Range',
];

const PastTrips = () => {
    const firstTrip = deliveryData[0];
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('Today');
    const [range, setRange] = useState<{ start?: string; end?: string }>({});
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

    const applyFilter = (filter: string) => {
        setSelectedFilter(filter);
        setShowFilterModal(false);

        const today = new Date();

        if (filter === 'Today') {
            const date = today.toISOString().split('T')[0];
            setRange({ start: date, end: date });
        } else if (filter === 'Last 7 days') {
            const end = today;
            const start = new Date();
            start.setDate(today.getDate() - 6);
            setRange({
                start: start.toISOString().split('T')[0],
                end: end.toISOString().split('T')[0],
            });
        } else if (filter === 'Last 30 days') {
            const end = today;
            const start = new Date();
            start.setDate(today.getDate() - 29);
            setRange({
                start: start.toISOString().split('T')[0],
                end: end.toISOString().split('T')[0],
            });
        } else if (filter === 'This Month') {
            const start = new Date(today.getFullYear(), today.getMonth(), 1);
            const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            setRange({
                start: start.toISOString().split('T')[0],
                end: end.toISOString().split('T')[0],
            });
        } else if (filter === 'Last Month') {
            const start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
            const end = new Date(today.getFullYear(), today.getMonth(), 0);
            setRange({
                start: start.toISOString().split('T')[0],
                end: end.toISOString().split('T')[0],
            });
        } else if (filter === 'Date Range') {
            setShowCalendar(true);
        }
    };

    useEffect(() => {
        applyFilter('Today');
    }, []);


    return (
        <KeyboardAvoidWrapper>
            <View style={[GlobalStyles.container, { paddingTop: 10 }]}>
                <Header title="Trip History" />
                <View style={styles.filterHeaderRow}>
                    <TouchableOpacity
                        style={styles.filterButton}
                        onPress={() => setShowFilterModal(true)}
                    >
                        <Feather name="filter" size={16} color="#000" />
                        <Text style={styles.filterText}>{selectedFilter} ▾</Text>
                    </TouchableOpacity>
                    <View style={styles.rightStatsBox}>
                        <Text style={styles.statsText}>Total Rides: 12</Text>
                        <Text style={styles.statsText}>Total Earnings: 240 SAR</Text>
                    </View>

                </View>


                <View style={styles.dateRow}>
                    <View style={styles.line} />
                    <Text style={styles.dateText}>
                        {range.start && range.end
                            ? range.start === range.end
                                ? `Today (${formatDate(range.start)})`
                                : `${formatDate(range.start)} to ${formatDate(range.end)}`
                            : 'Select Date Range'}
                    </Text>
                    <View style={styles.line} />
                </View>
                <Text style={styles.tripHistoryHeading}>Trip History</Text>
                <View style={styles.tripCard}>
                    <View style={styles.earningBadge}>
                        <Text style={styles.earningBadgeText}>
                            Earnings {firstTrip.expectedEarnings} SAR
                        </Text>
                    </View>

                    <View style={styles.tripHeaderRow}>
                        <Text style={styles.tripName}>{firstTrip.name}</Text>
                    </View>

                    <View style={styles.addressBox}>
                        <View style={styles.labelRow}>
                            <MaterialCommunityIcons name="map-marker" size={18} color="#2EAD64" />
                            <Text style={styles.addressLabel}> Pickup From</Text>
                        </View>
                        <Text style={styles.addressText}>{firstTrip.pickup.address}</Text>
                    </View>

                    <View style={styles.addressBox}>
                        <View style={styles.labelRow}>
                            <MaterialCommunityIcons name="map-marker-outline" size={18} color="#E53935" />
                            <Text style={[styles.addressLabel, { color: '#E53935' }]}> Drop To</Text>
                        </View>
                        <Text style={styles.addressText}>{firstTrip.drop.address}</Text>
                    </View>
                </View>
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
                                                onPress={() => applyFilter(item)}>
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

export default PastTrips;
