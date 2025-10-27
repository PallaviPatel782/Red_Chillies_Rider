import { StyleSheet } from 'react-native';
import { SF, SW, SH } from '../utils/Responsiveness/Dimensions';
import Colors from '../utils/Colors/Colors';

const styles = StyleSheet.create({
    image: {
        width: SW(300),
        height: SH(300),
        marginBottom: SH(30),
    },
    title: {
        fontSize: SF(20),
        fontFamily: 'Ubuntu-Medium',
        color: Colors.black,
        marginBottom: SH(10),
    },
    subtitle: {
        fontSize: SF(15),
        color: Colors.gray,
        textAlign: 'center',
    },
    middleContainer:{
        paddingTop:SH(100)
    }
});

export default styles;
