import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { SH,SF,SW } from '../../utils/Responsiveness/Dimensions';

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  content: {
    alignItems: 'center',
    marginTop: SH(40),
  },
  title: {
    fontSize: SF(20),
    fontFamily: 'Ubuntu-Bold',
    color: Colors.black,
    marginBottom: SH(10),
  },
  subtitle: {
    fontSize: SF(12),
    color: Colors.gray,
    textAlign: 'center',
    marginBottom: SH(30),
    lineHeight: SH(20),
    fontFamily: 'Ubuntu-Regular',
    textTransform:"capitalize",
    marginHorizontal:SW(25)
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  otpBox: {
    width: SW(50),
    height: SH(50),
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    fontSize: SF(20),
    color: Colors.black,
    marginHorizontal: SW(5), 
  },
});

export default styles;
