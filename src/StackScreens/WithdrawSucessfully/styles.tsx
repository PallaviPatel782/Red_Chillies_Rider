import { StyleSheet } from 'react-native';
import { SF, SW, SH } from '../../utils/Responsiveness/Dimensions';
import Colors from '../../utils/Colors/Colors';

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SH(20),
    },
    backBtn: {
        position: 'absolute',
        top: SH(50),
        left: SH(20),
    },
    successImage: {
        width: SW(100),
        height: SH(100),
        resizeMode: 'contain',
        marginBottom: SH(20),
    },
    title: {
        fontSize: SF(16),
        color: '#000',
        fontFamily: 'Ubuntu-Regular',
    },
    amount: {
        fontSize: SF(22),
        fontFamily: 'Ubuntu-Bold',
        color: '#000',
        marginVertical: SH(10),
    },
    okayButton: {
        position: 'absolute',
        bottom: SH(40),
        backgroundColor: '#FF5C5C',
        width: '90%',
        paddingVertical: SH(12),
        borderRadius: SH(8),
        alignItems: 'center',
    },
    okayText: {
        color: Colors.white,
        fontSize: SF(16),
        fontWeight: '600',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalContainer: {
        backgroundColor: '#EAFBF0',
        borderTopLeftRadius: SH(20),
        borderTopRightRadius: SH(20),
        padding: SH(20),
        alignItems: 'center',
    },
    modalAmount: {
        backgroundColor: '#118C4F',
        color: Colors.white,
       fontFamily: 'Ubuntu-Regular',
        fontSize: SF(18),
        paddingVertical: SH(4),
        paddingHorizontal: SH(12),
        borderRadius: SH(6),
    },
    modalTitle: {
        fontSize: SF(15),
        fontFamily: 'Ubuntu-Regular',
        color: '#000',
        marginTop: SH(8),
        marginBottom: SH(16),
    },
    detailBox: {
        width: '100%',
        backgroundColor: Colors.white,
        borderRadius: SH(10),
        padding: SH(15),
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        elevation: 2,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: SH(6),
    },
    detailLabel: {
        fontSize: SF(14),
        color: '#666',
        fontFamily: 'Ubuntu-Regular',
    },
    detailValue: {
        fontSize: SF(14),
        color: '#000',
        fontFamily: 'Ubuntu-Regular',
    },
    doneBtn: {
        backgroundColor:Colors.red,
        width: '90%',
        paddingVertical: SH(10),
        borderRadius: SH(8),
        alignItems: 'center',
        marginTop: SH(20),
    },
    doneText: {
        color: Colors.white,
        fontFamily: 'Ubuntu-Regular',
        fontSize:SF(15),
    },
});

export default styles;
