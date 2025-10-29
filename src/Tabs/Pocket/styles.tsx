import { StyleSheet } from 'react-native';
import { SH, SW, SF } from '../../utils/Responsiveness/Dimensions';
import Colors from '../../utils/Colors/Colors';

const styles = StyleSheet.create({
    earningCard: {
        backgroundColor: '#E5F5EC',
        paddingVertical: SH(12),
        borderRadius: SH(8),
        alignItems: 'center',
        marginVertical: SH(12),
    },
    earningPeriod: {
        fontSize: SF(14),
        color: '#555',
        fontFamily: 'Ubuntu-Regular'
    },
    earningAmount: {
        fontSize: SF(22),
        fontFamily: 'Ubuntu-Medium',
        color: '#000',
        marginTop: SH(4),
    },
    infoBanner: {
        backgroundColor: '#375DFB',
        paddingVertical: SH(6),
        borderRadius: SH(4),
        alignItems: 'center',
        marginBottom: SH(10),
    },
    infoText: {
        color: '#fff',
        fontSize: SF(13),
        fontFamily: 'Ubuntu-Regular'
    },
    sectionDivider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SH(10),
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    sectionTitle: {
        marginHorizontal: SW(10),
        fontFamily: 'Ubuntu-Regular',
        color: '#666',
    },
    balanceBox: {
        backgroundColor: '#fff',
        borderRadius: SH(8),
        paddingHorizontal: SW(10),
        paddingVertical: SH(8),
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    balanceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: SH(6),
    },
    balanceLabel: {
        color: '#444',
        fontSize: SF(14),
        fontFamily: 'Ubuntu-Regular'
    },
    balanceValue: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: SF(14),
    },
    withdrawButton: {
        backgroundColor: Colors.red,
        paddingVertical: SH(10),
        borderRadius: SH(6),
        alignItems: 'center',
        marginTop: SH(15),
    },
    withdrawText: {
        color: '#fff',
        fontFamily: 'Ubuntu-Regular',
        fontSize: SF(15),
    },
    withdrawDisabled: {
        backgroundColor: '#999',
    },
    withdrawDisabledText: {
        color: '#eee',
    },
    statementCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: SH(12),
        borderRadius: SH(8),
        marginTop: SH(14),
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    statementLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SW(8),
    },
    statementText: {
        fontSize: SF(15),
        fontFamily: 'Ubuntu-Regular'
    },
});

export default styles;
