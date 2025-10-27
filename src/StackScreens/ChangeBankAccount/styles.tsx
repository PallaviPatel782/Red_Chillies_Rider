import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { SF, SH, SW } from '../../utils/Responsiveness/Dimensions';

export default StyleSheet.create({
  infoText: {
    fontSize: SF(12),
    color: Colors.gray,
    marginBottom: SH(20),
    fontFamily: 'Ubuntu-Medium',
  },

  selectedTextStyle: {
    fontSize: SF(14),
    color: Colors.black,
    fontFamily: 'Ubuntu-Regular',
  },

  placeholderStyle: {
    fontSize: SF(14),
    color: Colors.gray,
    fontFamily: 'Ubuntu-Regular',
  },

  noteText: {
    color: '#446AF4',
    fontSize: SF(12),
    marginTop: SH(10),
    fontFamily: 'Ubuntu-Regular',
    backgroundColor: '#DEE5FF',
    padding: SW(5),
    textAlign: 'center',
    borderRadius: 5,
  },
});
