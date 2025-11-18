import { StyleSheet } from 'react-native';
import { SF, SH,SW } from '../../utils/Responsiveness/Dimensions';
import Colors from '../../utils/Colors/Colors';

export default StyleSheet.create({
  warningBox: {
    flexDirection: 'row',
    backgroundColor: '#FFF6E6',
    borderRadius: 8,
    paddingHorizontal:SW(10),
    paddingVertical:SH(10),
    alignItems: 'center',
    marginHorizontal: SW(10),
    marginBottom: SH(10),
  },
  warningIcon: {
    width:SW(25),
    height: SH(25),
    marginRight: 10,
    resizeMode: 'contain',
  },
  warningText: {
    flex: 1,
    fontSize: SF(12),
    color: '#555',
    fontFamily:"Ubuntu-Regular"
  },
  messageBubble: {
    maxWidth: '75%',
    paddingHorizontal:SW(10),
    paddingVertical:SH(10),
    borderRadius: 10,
    marginVertical:SH(5),
  },
  captainBubble: {
    backgroundColor: '#E1E9FF',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
  },
  userBubble: {
    backgroundColor: '#FCE8E8',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
  },
  messageText: {
    fontSize: SF(14),
    fontFamily:"Ubuntu-Regular"
  },
  captainText: {
    color: '#000',
    fontFamily:"Ubuntu-Regular"
  },
  userText: {
    color: '#000',
    fontFamily:"Ubuntu-Regular"
  },
  messageTime: {
    fontSize: SF(10),
    color: '#777',
    alignSelf: 'flex-end',
    marginTop: SH(3),
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    fontSize: SF(14),
    color: '#000',
    marginRight: 10,
    fontFamily:"Ubuntu-Regular"
  },
});
