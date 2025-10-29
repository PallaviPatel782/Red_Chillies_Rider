import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useRoute, useNavigation } from '@react-navigation/native';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import CustomButton from '../../Components/CustomButton';
import styles from './styles';
import { SH } from '../../utils/Responsiveness/Dimensions';

const WithdrawSuccessfully = () => {
    const route = useRoute<any>();
    const navigation = useNavigation<any>();
    const { amount } = route.params || {};
    const [showModal, setShowModal] = useState(false);

    return (
        <KeyboardAvoidWrapper>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={22} color="#000" />
                </TouchableOpacity>
                <Image
                    source={require('../../assests/Images/WithdrawSuccessfully.png')}
                    style={styles.successImage}
                />

                <Text style={styles.title}>Successfully withdrawn</Text>
                <Text style={styles.amount}>₹{amount}</Text>

                <View style={{ width: '100%', position: 'absolute', bottom: SH(1) }}>
                    <CustomButton title="Okay" onPress={() => setShowModal(true)} />
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
                                    <Text style={styles.modalAmount}>₹{amount}</Text>
                                    <Text style={styles.modalTitle}>Pocket withdrawal successful</Text>

                                    <View style={styles.detailBox}>
                                        <View style={styles.detailRow}>
                                            <Text style={styles.detailLabel}>Date</Text>
                                            <Text style={styles.detailValue}>14 Oct 2025</Text>
                                        </View>
                                        <View style={styles.detailRow}>
                                            <Text style={styles.detailLabel}>IMPS ref no.</Text>
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
