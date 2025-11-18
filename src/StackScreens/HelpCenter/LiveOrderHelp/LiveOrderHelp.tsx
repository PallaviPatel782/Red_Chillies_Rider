import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../../Components/Header';
import KeyboardAvoidWrapper from '../../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../../utils/GlobalStyles/GlobalStyles';
import styles from './styles';
import Colors from '../../../utils/Colors/Colors';

const LiveOrderHelp = ({ navigation, route }: any) => {
    const { tripData } = route.params;
    const [showWaitModal, setShowWaitModal] = useState(false);
    const [showDeliveredModal, setShowDeliveredModal] = useState(false);

    const handleSelect = async (reason: any) => {
        setShowWaitModal(true);

        setTimeout(() => {
            setShowWaitModal(false);
            setShowDeliveredModal(true);
        }, 3000);
    };

    return (
        <KeyboardAvoidWrapper>
            <View style={GlobalStyles.container}>
                <Header title={''} />
                <View style={styles.innerContainer}>
                    <View style={styles.titleContainer}>
                        <View style={styles.redLine} />
                        <Text style={styles.titleText}>Live Order Help</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => handleSelect('Customer not reachable / answering')}
                    >
                        <Text style={styles.listText}>Customer not reachable / answering</Text>
                        <Icon name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => handleSelect('Customer address / location is wrong')}
                    >
                        <Text style={styles.listText}>Customer address / location is wrong</Text>
                        <Icon name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <View style={styles.divider} />
                </View>
                <Modal visible={showWaitModal} transparent animationType="slide">
                    <TouchableOpacity activeOpacity={1} style={styles.waitOverlay}>
                        <View style={styles.waitCard}>
                            <Icon name="time-outline" size={45} color={Colors.dark_green} />

                            <ActivityIndicator size="large" color={Colors.dark_green} />

                            <Text style={styles.waitTitle}>Please wait...</Text>

                            <Text style={styles.waitSubtitle}>
                                Our admin will reach you soon regarding your request.
                            </Text>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <Modal visible={showDeliveredModal} transparent animationType="fade">
                    <View style={styles.deliveredOverlay}>
                        <View style={styles.deliveredCard}>

                            <Icon
                                name="checkmark-circle-outline"
                                size={60}
                                color={Colors.dark_green}
                            />

                            <Text style={styles.deliveredTitle}>Arrival Confirmed</Text>

                            <Text style={[styles.deliveredSubtitle, { textAlign: "center" }]}>
                              You’ve reached the customer’s drop location.
                            </Text>

                            <TouchableOpacity
                                style={styles.okButton}
                                onPress={() => {
                                    setShowDeliveredModal(false);
                                    navigation.navigate('DropOrder', { tripData });
                                }}
                            >
                                <Text style={styles.okButtonText}>Go to Drop Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </KeyboardAvoidWrapper>
    );
};

export default LiveOrderHelp;
