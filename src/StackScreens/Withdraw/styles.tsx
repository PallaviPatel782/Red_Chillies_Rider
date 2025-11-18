import { StyleSheet } from 'react-native';
import { SH, SW, SF } from '../../utils/Responsiveness/Dimensions';
import Colors from '../../utils/Colors/Colors';

export default StyleSheet.create({
    withdrawCard: {
        backgroundColor: '#EAF7EA',
        borderRadius: 8,
        paddingVertical: SH(10),
        paddingHorizontal: SW(10),
        marginTop: SH(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    withdrawTitle: {
        color: '#333',
        fontSize: SF(14),
    },
    withdrawValue: {
        color: '#333',
        fontFamily: 'Ubuntu-Medium',
    },
    amountSection: {
        marginTop: SH(30),
        alignItems: 'center',
    },
    amountLabel: {
        fontSize: SF(14),
        color: '#555',
        marginBottom: SH(5),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: Colors.lightGray,
        paddingBottom: SH(4),
    },
    rupeeSymbol: {
        fontSize: SF(28),
        color: '#000',
        fontFamily: 'Ubuntu-Regular',
    },
    amountInput: {
        fontSize: SF(28),
        color: '#000',
        minWidth: SW(50),
        fontFamily: 'Ubuntu-Regular',
    },
    withdrawButton: {
        marginTop: SH(40),
        backgroundColor: Colors.red,
        borderRadius: 10,
        paddingVertical: SH(12),
        alignItems: 'center',
    },
    withdrawText: {
        color: Colors.white,
        fontSize: SF(16),
        fontFamily: 'Ubuntu-Regular',
    },
    noteBox: {
        marginBottom: SH(50),
        backgroundColor: '#fff',
        padding: SH(10),
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    noteItem: {
        color: '#333',
        fontFamily: 'Ubuntu-Regular',
        fontSize: SF(13),
        marginBottom: SH(5),
    },
});
