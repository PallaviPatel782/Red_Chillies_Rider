import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../utils/Colors/Colors';
import { SH, SW, SF } from '../utils/Responsiveness/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';

const StatusShiftModal: React.FC = () => {
    const navigation = useNavigation<any>();
    const [visible, setVisible] = useState(false);
    const [shiftModalVisible, setShiftModalVisible] = useState(false);
    const [status, setStatus] = useState<'Online' | 'On break' | 'Offline'>('Offline');
    const [shift, setShift] = useState<string>('');

    const handleStatusPress = (newStatus: 'Online' | 'On break' | 'Offline') => {
        setStatus(newStatus);
        if (newStatus === 'Online') {
            setShiftModalVisible(true);
        } else {
            setVisible(false);
        }
    };

    const handleApplyShift = (selectedShift: string) => {
        setShift(selectedShift);
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
                <TouchableOpacity
                    onPress={() => navigation.navigate('HelpCenter')}
                    style={styles.infoIconOutside}>
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


                        <View style={styles.statusRow}>
                            {['Offline', 'Online', 'On break'].map((item) => (
                                <TouchableOpacity
                                    key={item}
                                    style={[
                                        styles.statusBtn,
                                        item === 'Offline'
                                            ? styles.offlineBtn
                                            : item === 'Online'
                                                ? styles.onlineBtn
                                                : styles.breakBtn,
                                        status === item && styles.selected,
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
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingVertical: SH(10),
                            }}>
                            <Text style={[styles.title, { color: '#26662F' }]}>
                                Select your shift
                            </Text>
                            <TouchableOpacity onPress={() => setShiftModalVisible(false)}>
                                <AntDesign name="close" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                        {[
                            { label: 'Morning', time: '7 AM – 3 PM' },
                            { label: 'Evening', time: '3 PM – 11 PM' },
                            { label: 'Night', time: '11 PM – 7 AM' },
                        ].map((item) => (
                            <TouchableOpacity
                                key={item.label}
                                style={[
                                    styles.shiftOption,
                                    shift === item.label && styles.selectedShift,
                                ]}
                                onPress={() => handleApplyShift(item.label)}>
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
                            onPress={() => setShiftModalVisible(false)}>
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
        marginTop: SH(10),
        justifyContent: "space-between"
    },

    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        paddingVertical: SH(6),
        paddingHorizontal: SW(18),
        borderWidth: 1.5,
    },

    statusLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    statusOnline: {
        borderColor: '#00B56A',
        backgroundColor: 'rgba(0, 181, 106, 0.1)',
    },

    statusOffline: {
        borderColor: '#FF4D4D',
        backgroundColor: 'rgba(255, 77, 77, 0.1)',
    },

    statusBreak: {
        borderColor: 'orange',
        backgroundColor: 'rgba(255, 165, 0, 0.1)',
    },

    statusIndicator: {
        width: SW(10),
        height: SH(10),
        borderRadius: 5,
        marginRight: SW(6),
    },

    statusLabel: {
        fontSize: SF(14),
        fontFamily: 'Ubuntu-Medium',
    },

    infoIconOutside: {
        marginLeft: SW(10),
        backgroundColor: '#f2f2f2',
        borderRadius: SW(20),
        padding: SW(6),
        justifyContent: 'center',
        alignItems: 'center',
    },

    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    content: {
        backgroundColor: '#fff',
        width: '85%',
        borderRadius: 14,
        paddingHorizontal: SW(20),
        paddingVertical: SH(20)
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: SF(16),
        fontFamily: 'Ubuntu-Medium',
        color: '#000',
    },
    statusRow: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: SH(10),
    },
    statusBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SH(8),
        paddingHorizontal: SW(25),
    },
    offlineBtn: {
        borderColor: Colors.red,
    },
    onlineBtn: {
        borderColor: Colors.green,
    },
    breakBtn: {
        borderColor: '#FFD712',
    },
    selected: {
        opacity: 0.6,
    },
    statusDotSmall: {
        width: SW(15),
        height: SH(15),
        borderRadius: 10,
        marginRight: 6,
    },
    statusTextModal: {
        fontSize: SF(15),
        color: '#000',
        fontFamily: 'Ubuntu-Regular',
    },
    closeBtn: {
        alignSelf: 'flex-end',
        marginTop: SH(15),
    },
    closeText: {
        color: '#ff4d4d',
        fontFamily: 'Ubuntu-Regular',
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
        paddingVertical: SH(20)
    },
    shiftOption: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: SW(10),
        paddingVertical: SH(10),
        marginBottom: 10,
    },
    selectedShift: {
        borderColor: Colors.red,
        backgroundColor: '#ffecec',
    },
    shiftLabel: {
        fontSize: SF(14),
        fontFamily: 'Ubuntu-Regular',
    },
    shiftTime: {
        fontSize: SF(12),
        color: '#555',
        fontFamily: 'Ubuntu-Regular',
    },
    applyButton: {
        backgroundColor: '#ffecec',
        borderRadius: 20,
        paddingVertical: SH(10),
        marginTop: SH(10),
    },
    applyText: {
        textAlign: 'center',
        color: Colors.red,
        fontFamily: 'Ubuntu-Medium',
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

});
