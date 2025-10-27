import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { SH, SW, SF } from '../../utils/Responsiveness/Dimensions';

export default StyleSheet.create({
    contentContainer: {
        paddingHorizontal: SW(5),
        paddingBottom: SH(50),
    },
    profileCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: SW(10),
        borderRadius: SW(10),
        marginTop: SH(10),
        elevation: 3,
    },
    profileImage: {
        width: SW(60),
        height: SW(60),
        borderRadius: SW(30),
        marginRight: SW(15),
    },
    profileInfo: {
        flex: 1,
    },
    nameText: {
        fontSize: SF(18),
        fontWeight: '600',
        color: '#000',
    },
    viewProfileText: {
        fontSize: SF(14),
        color: Colors.red,
        marginTop: SH(4),
        fontFamily: "Ubuntu-Regular"
    },
    bankButton: {
        backgroundColor: "#26662F",
        borderRadius: SW(5),
        paddingVertical: SH(6),
        paddingHorizontal: SW(10),
        alignSelf: 'flex-start',
        marginTop: SH(15),
    },
    bankButtonText: {
        color: '#fff',
        fontSize: SF(14),
        fontFamily: "Ubuntu-Regular"
    },
    bankDetailsBox: {
        backgroundColor: '#fff',
        borderRadius: SW(8),
        padding: SW(10),
        marginTop: SH(10),
        elevation: 2,
    },
    bankText: {
        fontSize: SF(14),
        color: '#333',
        marginBottom: SH(4),
        fontFamily: "Ubuntu-Regular"
    },
    sectionContainer: {
        backgroundColor: '#fff',
        borderRadius: SW(8),
        marginTop: SH(15),
        elevation: 2,
    },
    sectionTitle: {
        fontSize: SF(14),
        fontFamily: "Ubuntu-Bold",
        color: '#666',
        paddingHorizontal: SW(10),
        paddingVertical: SH(8),
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SW(15),
        paddingVertical: SH(12),
        borderTopWidth: 0.5,
        borderColor: '#ddd',
    },
    listText: {
        fontSize: SF(15),
        color: '#000',
        fontFamily: "Ubuntu-Regular"
    },
    arrow: {
        fontSize: SF(20),
        color: '#999',
        fontFamily: "Ubuntu-Regular"
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
});
