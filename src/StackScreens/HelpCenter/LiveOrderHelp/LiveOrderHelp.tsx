import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../../Components/Header';
import KeyboardAvoidWrapper from '../../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../../utils/GlobalStyles/GlobalStyles';
import styles from './styles';
import Colors from '../../../utils/Colors/Colors';
import { useTranslation } from 'react-i18next';

const LiveOrderHelp = ({ navigation, route }: any) => {
    const { t } = useTranslation();
    const { tripData } = route.params;
    const [showWaitModal, setShowWaitModal] = useState(false);
    const [showDeliveredModal, setShowDeliveredModal] = useState(false);

    const handleSelect = async (reasonKey: string) => {
        setShowWaitModal(true);

        setTimeout(() => {
            setShowWaitModal(false);
            setShowDeliveredModal(true);
        }, 3000);
    };

    return (
        <KeyboardAvoidWrapper>
            <View style={GlobalStyles.container}>
                <Header title={t('liveOrderHelp')} />
                <View style={styles.innerContainer}>
                    <View style={styles.titleContainer}>
                        <View style={styles.redLine} />
                        <Text style={styles.titleText}>{t('liveOrderHelp')}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => handleSelect('customerNotReachable')}
                    >
                        <Text style={styles.listText}>{t('customerNotReachable')}</Text>
                        <Icon name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => handleSelect('wrongAddress')}
                    >
                        <Text style={styles.listText}>{t('wrongAddress')}</Text>
                        <Icon name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <View style={styles.divider} />
                </View>
                
                <Modal visible={showWaitModal} transparent animationType="slide">
                    <TouchableOpacity activeOpacity={1} style={styles.waitOverlay}>
                        <View style={styles.waitCard}>
                            <Icon name="time-outline" size={45} color={Colors.dark_green} />
                            <ActivityIndicator size="large" color={Colors.dark_green} />
                            <Text style={styles.waitTitle}>{t('pleaseWait')}</Text>
                            <Text style={styles.waitSubtitle}>{t('adminWillReachSoon')}</Text>
                        </View>
                    </TouchableOpacity>
                </Modal>

                <Modal visible={showDeliveredModal} transparent animationType="fade">
                    <View style={styles.deliveredOverlay}>
                        <View style={styles.deliveredCard}>
                            <Icon name="checkmark-circle-outline" size={60} color={Colors.dark_green} />
                            <Text style={styles.deliveredTitle}>{t('arrivalConfirmed')}</Text>
                            <Text style={[styles.deliveredSubtitle, { textAlign: 'center' }]}>
                                {t('reachedDropLocation')}
                            </Text>

                            <TouchableOpacity
                                style={styles.okButton}
                                onPress={() => {
                                    setShowDeliveredModal(false);
                                    navigation.navigate('DropOrder', { tripData });
                                }}
                            >
                                <Text style={styles.okButtonText}>{t('goToDropDetails')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </KeyboardAvoidWrapper>
    );
};

export default LiveOrderHelp;
