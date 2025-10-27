import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { SF, SH, SW } from '../../utils/Responsiveness/Dimensions';

export default StyleSheet.create({
    innerContainer: {
        paddingHorizontal: SW(10),
        paddingTop: SH(15),
    },

    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SH(15),
    },

    redLine: {
        width: SW(3),
        height: SH(18),
        backgroundColor: Colors.red,
        marginRight: SW(8),
        borderRadius: SW(2),
    },

    titleText: {
        fontSize: SF(16),
        fontFamily: 'Ubuntu-Medium',
        color: Colors.black,
    },

    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: SH(12),
    },

    listText: {
        fontSize: SF(14),
        fontFamily: 'Ubuntu-Regular',
        color: Colors.black,
    },

    divider: {
        height: 1,
        backgroundColor: Colors.gray,
        opacity: 0.3,
    },
});
