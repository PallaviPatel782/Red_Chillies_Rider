import React, { useState } from 'react';
import {View,Text,TouchableOpacity,Modal,Image,TouchableWithoutFeedback,} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import CustomButton from '../../Components/CustomButton';
import styles from './styles';
import { SH } from '../../utils/Responsiveness/Dimensions';
import { useTranslation } from 'react-i18next';
import Header from '../../Components/Header';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';

const WithdrawSuccessfully = () => {
    const route = useRoute<any>();
    const { amount } = route.params || {};
    const currencySymbol = 'SAR';
    const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation();

    return (
        <KeyboardAvoidWrapper>
            <View style={GlobalStyles.container}>
                <Header title={''} />
                <View style={styles.container}>
                    <Image
                        source={require('../../assests/Images/WithdrawSuccessfully.png')}
                        style={styles.successImage}
                    />

                    <Text style={styles.title}>{t("successWithdraw")}</Text>

                    <Text style={styles.amount}>{amount} {currencySymbol}</Text>


                    <View style={{ width: '100%', position: 'absolute', bottom: SH(1) }}>
                        <CustomButton title={t("okay")} onPress={() => setShowModal(true)} />
                    </View>
                </View>
                <Modal
                    animationType="slide"
                    transparent
                    visible={showModal}
                    onRequestClose={() => setShowModal(false)}>
                    <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
                        <View style={styles.modalOverlay}>
                            <TouchableWithoutFeedback>
                                <View style={styles.modalContainer}>
                                    <Text style={styles.amount}>{currencySymbol}{amount}</Text>

                                    <Text style={styles.modalTitle}>{t("pocketWithdrawSuccess")}</Text>

                                    <View style={styles.detailBox}>
                                        <View style={styles.detailRow}>
                                            <Text style={styles.detailLabel}>{t("date")}</Text>
                                            <Text style={styles.detailValue}>14 Oct 2025</Text>
                                        </View>
                                        <View style={styles.detailRow}>
                                            <Text style={styles.detailLabel}>{t("impsRef")}</Text>
                                            <Text style={styles.detailValue}>1234567890</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        </KeyboardAvoidWrapper>
    );
};

export default WithdrawSuccessfully;
