import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/Colors/Colors';
import { SH, SW, SF } from '../utils/Responsiveness/Dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setStatus, setShift } from '../redux/slices/statusShiftStore';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../Routing/RootNavigator';
import { useNavigation } from '@react-navigation/native';

type ShiftType = { label: string; time: string };

type Props = {
    onStatusChange?: (status: 'Online' | 'On break' | 'Offline') => void;
    onShiftSelect?: (shift: ShiftType) => void;
};

const StatusShiftModal: React.FC<Props> = ({ onStatusChange, onShiftSelect }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [visible, setVisible] = useState(false);
    const [shiftModalVisible, setShiftModalVisible] = useState(false);
    const dispatch = useDispatch();
    const { status, shift } = useSelector((state: RootState) => state.status);

    const shifts: ShiftType[] = [
        { label: 'Morning', time: '7 AM – 3 PM' },
        { label: 'Evening', time: '3 PM – 11 PM' },
        { label: 'Night', time: '11 PM – 7 AM' },
    ];

    useEffect(() => {
        if (status === 'Offline' && !shift) {
            onStatusChange?.('Online');
            onShiftSelect?.({ label: 'Morning', time: '7 AM – 3 PM' });
        }
    }, [status, shift]);

    const handleStatusPress = (newStatus: 'Online' | 'On break' | 'Offline') => {
        dispatch(setStatus(newStatus));
        if (newStatus === 'Online') {
            setShiftModalVisible(true);
        } else {
            setVisible(false);
        }
    };

    const handleApplyShift = (selectedShift: string | null) => {
        if (!selectedShift) return;
        dispatch(setShift(selectedShift));
        setShiftModalVisible(false);
        setVisible(false);
    };

    return (
        <>
            <View style={styles.statusWrapper}>
                <TouchableOpacity
                    style={[
                        styles.statusContainer,
                        status === 'Online'
                            ? styles.statusOnline
                            : status === 'On break'
                                ? styles.statusBreak
                                : styles.statusOffline,
                    ]}
                    onPress={() => setVisible(true)}>
                    <View style={styles.statusLeft}>
                        <View
                            style={[
                                styles.statusIndicator,
                                status === 'Online'
                                    ? { backgroundColor: '#00B56A' }
                                    : status === 'On break'
                                        ? { backgroundColor: 'orange' }
                                        : { backgroundColor: '#FF4D4D' },
                            ]}
                        />
                        <Text
                            style={[
                                styles.statusLabel,
                                status === 'Online'
                                    ? { color: '#00B56A' }
                                    : status === 'On break'
                                        ? { color: 'orange' }
                                        : { color: '#FF4D4D' },
                            ]}>
                            {status}
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.infoIconOutside} onPress={() => navigation.navigate('HelpCenter')}>
                    <Icon name="help-circle-outline" size={20} color="#666" />
                </TouchableOpacity>
            </View>
            <Modal
                visible={visible && !shiftModalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setVisible(false)}>
                <View style={styles.bottomOverlay}>
                    <View style={styles.bottomSheet}>
                        <View style={styles.closeIconWrapper}>
                            <TouchableOpacity
                                onPress={() => setVisible(false)}
                                style={styles.closeCircle}>
                                <AntDesign name="close" size={18} color="#000" />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalTitle}>Set your status</Text>

                        <View style={styles.statusRow}>
                            {['Offline', 'Online', 'On break'].map((item) => (
                                <TouchableOpacity
                                    key={item}
                                    style={[
                                        styles.statusBtn,
                                        status === item && { backgroundColor: '#f5f5f5' },
                                    ]}
                                    onPress={() =>
                                        handleStatusPress(item as 'Online' | 'On break' | 'Offline')
                                    }>
                                    <View
                                        style={[
                                            styles.statusDotSmall,
                                            {
                                                backgroundColor:
                                                    item === 'Online'
                                                        ? '#00b56a'
                                                        : item === 'On break'
                                                            ? 'orange'
                                                            : 'red',
                                            },
                                        ]}
                                    />
                                    <Text style={styles.statusTextModal}>{item}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                visible={shiftModalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setShiftModalVisible(false)}>
                <View style={styles.bottomOverlay}>
                    <View style={styles.bottomSheet}>
                        <View style={styles.headerRow}>
                            <Text style={[styles.title, { color: '#26662F' }]}>
                                Select your shift
                            </Text>
                            <TouchableOpacity onPress={() => setShiftModalVisible(false)}>
                                <AntDesign name="close" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>

                        {shifts.map((item) => (
                            <TouchableOpacity
                                key={item.label}
                                style={[
                                    styles.shiftOption,
                                    shift === item.label && styles.selectedShift,
                                ]}
                                onPress={() => dispatch(setShift(item.label))}>
                                <Text
                                    style={[
                                        styles.shiftLabel,
                                        shift === item.label && { color: Colors.red },
                                    ]}>
                                    {item.label}
                                </Text>
                                <Text
                                    style={[
                                        styles.shiftTime,
                                        shift === item.label && { color: Colors.red },
                                    ]}>
                                    {item.time}
                                </Text>
                            </TouchableOpacity>
                        ))}

                        <TouchableOpacity
                            style={styles.applyButton}
                            onPress={() => handleApplyShift(shift)}>
                            <Text style={styles.applyText}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default StatusShiftModal;

const styles = StyleSheet.create({
    statusWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SH(10),
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        paddingVertical: SH(6),
        paddingHorizontal: SW(18),
        borderWidth: 1.5,
    },
    statusLeft: { flexDirection: 'row', alignItems: 'center' },
    statusOnline: { borderColor: '#00B56A', backgroundColor: 'rgba(0,181,106,0.1)' },
    statusOffline: { borderColor: '#FF4D4D', backgroundColor: 'rgba(255,77,77,0.1)' },
    statusBreak: { borderColor: 'orange', backgroundColor: 'rgba(255,165,0,0.1)' },
    statusIndicator: {
        width: SW(10),
        height: SH(10),
        borderRadius: 5,
        marginRight: SW(6),
    },
    statusLabel: { fontSize: SF(14), fontFamily: 'Ubuntu-Medium' },
    infoIconOutside: {
        backgroundColor: '#f2f2f2',
        borderRadius: SW(20),
        padding: SW(6),
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    bottomSheet: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: SW(20),
        paddingVertical: SH(20),
    },
    closeIconWrapper: {
        alignItems: 'center',
        position: 'absolute',
        top: -SH(20),
        left: 0,
        right: 0,
        zIndex: 10,
    },
    closeCircle: {
        width: SW(35),
        height: SW(35),
        borderRadius: SW(35) / 2,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    modalTitle: {
        textAlign: 'center',
        fontSize: SF(16),
        fontFamily: 'Ubuntu-Medium',
        marginBottom: SH(15),
        marginTop: SH(10),
    },
    statusRow: { flexDirection: 'column', gap: SH(10) },
    statusBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SH(10),
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: SW(15),
    },
    statusDotSmall: {
        width: SW(14),
        height: SH(14),
        borderRadius: 7,
        marginRight: SW(8),
    },
    statusTextModal: { fontSize: SF(15), color: '#000', fontFamily: 'Ubuntu-Regular' },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SH(10),
    },
    title: { fontSize: SF(16), fontFamily: 'Ubuntu-Medium' },
    shiftOption: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: SW(10),
        paddingVertical: SH(10),
        marginBottom: 10,
    },
    selectedShift: { borderColor: Colors.red, backgroundColor: '#ffecec' },
    shiftLabel: { fontSize: SF(14), fontFamily: 'Ubuntu-Regular' },
    shiftTime: { fontSize: SF(12), color: '#555', fontFamily: 'Ubuntu-Regular' },
    applyButton: {
        backgroundColor: Colors.red,
        borderRadius: 20,
        paddingVertical: SH(10),
        marginTop: SH(10),
    },
    applyText: {
        textAlign: 'center',
        color: Colors.white,
        fontFamily: 'Ubuntu-Medium',
        fontSize: SF(15),
    },
});
