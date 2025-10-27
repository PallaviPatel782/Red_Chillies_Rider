import { StyleSheet } from 'react-native';
import Colors from '../Colors/Colors';
import { SF, SH, SW } from '../Responsiveness/Dimensions';

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: SW(15),
    paddingTop: SH(10),
  },
  textInputContainer: {
    width: '100%',
    marginVertical: SH(7),
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.lightGray || '#ccc',
    borderRadius: SW(10),
    paddingVertical: SH(10),
    paddingHorizontal: SW(15),
    fontSize: SF(14),
    color: Colors.black,
    backgroundColor: Colors.white,
    fontFamily: 'Ubuntu-Regular',
  },
  inputLabel: {
    fontSize: SF(13),
    fontFamily: 'Ubuntu-Medium',
    color: Colors.gray || '#555',
    marginBottom: SH(5),
  },
});

export default GlobalStyles;
