import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { SF, SH, SW } from '../../utils/Responsiveness/Dimensions';

export default StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: SW(15),
        paddingBottom: SH(40),
        backgroundColor: Colors.white_cream,
        alignItems: 'center',
    },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: SW(194),
        height: SH(194),
    },

    title: {
        fontSize: SF(14),
        fontFamily: "Ubuntu-Bold",
        textAlign: 'center',
        color: Colors.black,
        marginBottom: SH(10),
    },

    paragraph: {
        fontSize: SF(14),
        fontFamily: "Ubuntu-Regular",
        color: Colors.text_grey,
        textAlign: 'justify',
        lineHeight: SH(22),
        marginBottom: SH(10),
    },

    highlight: {
        fontSize: SF(15),
        color: Colors.black,
        fontFamily: "Ubuntu-Medium",
        textAlign: 'center',
        marginVertical: SH(15),
    },

    subheading: {
        fontSize: SF(15),
        fontFamily: "Ubuntu-Regular",
        color: Colors.black,
        alignSelf: 'flex-start',
        marginTop: SH(10),
        marginBottom: SH(5),
    },

    listContainer: {
        alignSelf: 'flex-start',
        marginLeft: SW(10),
        marginBottom: SH(10),
    },

    listItem: {
        fontSize: SF(14),
        color: Colors.black,
        lineHeight: SH(22),
        fontFamily: "Ubuntu-Regular",
    },
});
