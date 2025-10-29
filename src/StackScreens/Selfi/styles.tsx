import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { SF, SH, SW } from '../../utils/Responsiveness/Dimensions';

export default StyleSheet.create({
  guidelineTitle: {
    fontSize: SF(14),
    color: Colors.gray,
    marginBottom: SH(20),
    fontFamily: 'Ubuntu-Bold',
    borderBottomWidth: 0.5,
    borderColor: Colors.gray,
    paddingBottom: SH(10),
  },
  RetakeButton: {
    borderColor: Colors.red,
    borderWidth: 0.5,
    paddingVertical: SH(15),
    paddingHorizontal: SW(5),
    borderRadius: 8,
    width: "100%",
    color: Colors.red,
    fontSize: SF(15),
    fontFamily: 'Ubuntu-Regular',
    marginVertical: SH(10),
    textAlign: "center",
  },
  SubmitButton: {
    backgroundColor: Colors.red,
    paddingVertical: SH(15),
    paddingHorizontal: SW(5),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    marginVertical: SH(10),
    color: '#ffffff',
    fontSize: SF(15),
    fontFamily: 'Ubuntu-Regular',
    textAlign: "center",
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SH(15),
  },

  icon: {
    width: SW(111),
    height: SH(127),
    resizeMode: 'contain',
    marginRight: SW(10),
  },

  text: {
    fontSize: SF(14),
    color: Colors.black,
    fontFamily: 'Ubuntu-Regular',
  },

  previewContainer: {
    alignItems: 'center',
    marginTop: SH(20),
  },

  previewImage: {
    width: SW(200),
    height: SH(200),
    borderRadius: SW(100),
    borderWidth: 2,
    borderColor: Colors.gray,
  },

  previewText: {
    marginTop: SH(10),
    color: Colors.gray,
    fontSize: SF(13),
    fontFamily: 'Ubuntu-Regular',
  },

  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SW(20),
  },

  buttonHalf: {
    flex: 0.48,
  },
});
