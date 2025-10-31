import { StyleSheet } from 'react-native';
import Colors from '../../../utils/Colors/Colors';
import { SF, SH, SW } from '../../../utils/Responsiveness/Dimensions';

export default StyleSheet.create({
    reasonTitle: {
        color: Colors.black,
        fontSize: SF(14),
        fontFamily: 'Ubuntu-Regular',
        marginTop: SH(15),
        borderLeftWidth: 2,
        borderLeftColor: Colors.red,
        paddingLeft: SW(8),
    },
    warningBox: {
        backgroundColor: '#FFE7E8',
        borderRadius: 6,
        paddingVertical: SH(8),
        paddingHorizontal: SW(10),
        marginTop: SH(10),
    },
    warningText: {
        color: Colors.black,
        fontSize: SF(14),
        textAlign: 'center',
        fontFamily: 'Ubuntu-Regular',
    },
    waitingText: {
        fontSize: SF(14),
        color: Colors.black,
        fontFamily: 'Ubuntu-Bold',
        width: '55%',
    },
    image: {
        width: SW(355),
        height: SH(130),
        alignSelf: "center",
        marginVertical: SH(20)
    },
    buttonContainer: {
        position: 'absolute',
        bottom: SH(20),
         alignSelf: "center",
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: SW(20),
    },
    denyBtnOutline: {
        width: '100%',
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: SH(12),
        alignItems: 'center',
        marginBottom: SH(10),
    },
    denyText: {
        color: Colors.black,
        fontSize: SF(15),
        fontFamily: 'Ubuntu-Medium',
    },
    dontDenyBtn: {
        width: '100%',
        backgroundColor: Colors.red,
        borderRadius: 8,
        paddingVertical: SH(12),
        alignItems: 'center',
    },
    dontDenyText: {
        color: Colors.white,
        fontSize: SF(15),
        fontFamily: 'Ubuntu-Medium',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.white,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: SW(20),
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: -2 },
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SH(15),
    },
    modalTitle: {
        fontSize: SF(18),
        fontFamily: 'Ubuntu-Medium',
        color: Colors.black,
    },
    modalCard: {
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
        padding: SW(12),
        marginBottom: SH(15),
    },
    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    modalCardText: {
        fontSize: SF(14),
        fontFamily: 'Ubuntu-Regular',
        color: Colors.black,
    },
    modalLabel: {
        fontFamily: 'Ubuntu-Medium',
        color: Colors.black,
         fontSize: SF(12),
    },
    infoBox: {
        backgroundColor: '#FFF5F5',
        borderRadius: 8,
        padding: SW(12),
        marginBottom: SH(20),
    },
    infoHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoText: {
        color: Colors.black,
        fontFamily: 'Ubuntu-Bold',
        fontSize: SF(14),
    },
    subText: {
        color: '#777',
        fontSize: SF(12),
        marginTop: SH(3),
        fontFamily: 'Ubuntu-Regular',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        gap: SW(10),
    },
    modalDenyBtn: {
        flex: 1,
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: SH(12),
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalDontDenyBtn: {
        flex: 1,
        backgroundColor: Colors.red,
        borderRadius: 8,
        paddingVertical: SH(12),
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalDenyText: {
        color: Colors.black,
        fontSize: SF(15),
        fontFamily: 'Ubuntu-Medium',
    },
    modalDontDenyText: {
        color: Colors.white,
        fontSize: SF(15),
        fontFamily: 'Ubuntu-Medium',
    },


});
