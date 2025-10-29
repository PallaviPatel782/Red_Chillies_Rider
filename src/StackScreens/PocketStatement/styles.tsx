import { StyleSheet } from 'react-native';
import { SH, SW, SF } from '../../utils/Responsiveness/Dimensions';
import Colors from '../../utils/Colors/Colors';

export default StyleSheet.create({
    filterRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SH(15),
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderColor: Colors.gray,
        borderWidth: 1,
        paddingHorizontal: SW(10),
        paddingVertical: SH(6),
        borderRadius: 8,
    },
    filterText: {
        fontSize: SF(14),
        color: Colors.black,
    },
    dateRangeText: {
        fontSize: SF(13),
        color: Colors.gray,
    },
    dateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: SH(10),
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
        marginHorizontal: SW(10),
    },
    dateText: {
        fontSize: SF(13),
        color: Colors.gray,
        fontFamily: 'Ubuntu-Regular',
    },

    divider: {
        height: 1,
        backgroundColor: Colors.gray,
        marginVertical: SH(10),
    },
    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: SH(8),
        paddingHorizontal: SW(5),
    },
    transactionTitle: {
        fontSize: SF(15),
        fontFamily: 'Ubuntu-Medium',
        color: Colors.black,
    },
    transactionSub: {
        fontSize: SF(12),
        color: Colors.gray,
        marginTop: 2,
    },
    transactionAmount: {
        fontSize: SF(15),
        fontFamily: 'Ubuntu-Medium',
    },
    itemDivider: {
        height: 1,
        backgroundColor: '#EAEAEA',
        marginVertical: SH(4),
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownContainer: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        width: SW(150),
        paddingVertical: SH(5),
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
    },
    dropdownItem: {
        paddingVertical: SH(8),
        paddingHorizontal: SW(10),
    },
    dropdownText: {
        fontSize: SF(14),
        color: Colors.black,
    },
    calendarContainer: {
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: SH(10),
        width: '90%',
        alignSelf: 'center',
    },
    doneBtn: {
        marginTop: SH(20),
        backgroundColor: Colors.red,
        paddingVertical: SH(10),
        borderRadius: 8,
        alignItems: 'center',
    },
    doneText: {
        color: Colors.white,
        fontSize: SF(15),
        fontFamily: 'Ubuntu-Regular',
    },
});
