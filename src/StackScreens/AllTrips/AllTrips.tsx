import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, } from 'react-native';
import Header from '../../Components/Header';
import { deliveryData } from '../../DummyData/DummyData';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import styles from './styles';
import Colors from '../../utils/Colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const AllTrips = () => {
    const navigation = useNavigation<any>();
    const [selectedTrip, setSelectedTrip] = useState<any>(null);

    const renderTripCard = ({ item }: any) => (
        <TouchableOpacity style={styles.tripCard} onPress={() => setSelectedTrip(item)}>
            <View style={styles.earningBadge}>
                <Text style={styles.earningBadgeText}>
                    earnings ₹{item.expectedEarnings.toFixed(1)}
                </Text>
            </View>

            <View style={styles.tripHeaderRow}>
                <Text style={styles.tripName}>{item.name}</Text>
            </View>

            <View style={styles.tripRow}>
                <Text style={styles.tripInfo}>
                    🧍‍♂️ Pickup From:{' '}
                    <Text style={styles.boldText}>{item.pickup.distance}</Text>
                </Text>
                <Text style={styles.tripInfo}>
                    🛵 Drop To:{' '}
                    <Text style={styles.boldText}>{item.drop.distance}</Text>
                </Text>
            </View>

            <TouchableOpacity
                style={styles.pickupButton}
                onPress={() => setSelectedTrip(item)}>
                <Text style={styles.pickupButtonText}>{item.buttonLabel}</Text>
            </TouchableOpacity>

            <Text style={styles.tripAddress}>{item.address}</Text>
        </TouchableOpacity>
    );

    return (
        <KeyboardAvoidWrapper>
            <View style={[GlobalStyles.container, { paddingTop: 10 }]}>
                <Header title=" " />
                <FlatList
                    data={deliveryData}
                    scrollEnabled={false}
                    renderItem={renderTripCard}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
                <Modal
                    visible={!!selectedTrip}
                    transparent
                    animationType="slide"
                    onRequestClose={() => setSelectedTrip(null)}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPressOut={() => setSelectedTrip(null)}
                        style={styles.modalOverlay}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.modalCard}
                            onPress={() => { }}>
                            <View style={styles.timerCircle}>
                                <AntDesign name="clockcircleo" size={16} color={Colors.red} />
                               <Text style={styles.timerText}>{selectedTrip?.timer}</Text>
                            </View>

                            <Text style={styles.earningLabel}>Expected earnings</Text>
                            <Text style={styles.earningValue}>
                                ₹{selectedTrip?.expectedEarnings?.toFixed(1)}
                            </Text>

                            <View style={styles.row}>
                                <Text style={styles.distanceText}>
                                    Pickup From: {selectedTrip?.pickup.distance}
                                </Text>
                                <Text style={styles.distanceText}>
                                    Drop To: {selectedTrip?.drop.distance}
                                </Text>
                            </View>

                            <View style={styles.pickupCard}>
                                <Text style={styles.pickupTitle}>{selectedTrip?.name}</Text>
                                <Text style={styles.addressText}>{selectedTrip?.address}</Text>

                                <View style={styles.locationRow}>
                                    <Ionicons name="location-outline" size={14} color="#1B8E3E" />
                                    <Text style={styles.greenText}>10 mins away</Text>
                                </View>
                            </View>

                            <TouchableOpacity
                                style={styles.acceptButton}
                                onPress={() => {
                                    navigation.navigate('ReachVerification', { tripData: selectedTrip });
                                    setSelectedTrip(null);
                                }}>
                                <Text style={styles.acceptText}>ACCEPT ORDER</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>

            </View>
        </KeyboardAvoidWrapper>
    );
};

export default AllTrips;

