import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { SF, SH, SW } from '../../utils/Responsiveness/Dimensions';

export default StyleSheet.create({
  mainContainer: {
    paddingHorizontal: SW(20),
    paddingTop: SH(10),
  },

  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F8EE',
    borderRadius: 8,
    padding: SW(10),
    marginVertical: SH(10),
  },
  timerBox: {
    backgroundColor: Colors.dark_green,
    borderRadius: 8,
    paddingHorizontal: SW(8),
    paddingVertical: SH(3),
    marginRight: SW(8),
  },
  timerText: {
    color: Colors.white,
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(12),
  },
  timerStatus: {
    color: Colors.dark_green,
    fontSize: SF(13),
    fontFamily: 'Ubuntu-Medium',
  },

  orderCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: SW(16),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderIcon: {
    alignSelf: 'center',
    marginBottom: SH(6),
  },
  orderId: {
    textAlign: 'center',
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(15),
    color: Colors.black,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: SH(8),
  },

  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SH(6),
  },
  itemName: {
    flex: 1,
    marginLeft: SW(2),
    fontSize: SF(13),
    color: Colors.black,
    fontFamily: 'Ubuntu-Regular',
  },
  itemPrice: {
    fontSize: SF(13),
    color: Colors.black,
    fontFamily: 'Ubuntu-Medium',
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SH(8),
  },
  totalText: {
    fontFamily: 'Ubuntu-Bold',
    color: Colors.black,
    fontSize: SF(13),
  },

  paidTagBox: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: SW(8),
    paddingVertical: SH(3),
    marginLeft: SW(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  paidTagText: {
    fontSize: SF(11),
    fontFamily: 'Ubuntu-Medium',
  },

  totalAmount: {
    fontFamily: 'Ubuntu-Medium',
    color: Colors.black,
    fontSize: SF(14),
  },

  pickButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark_green,
    borderRadius: SW(8),
    paddingVertical: SH(12),
    marginTop: SH(16),
  },
  pickButtonText: {
    color: Colors.white,
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(15),
    marginLeft: SW(4),
  },
  image: {
    width: SW(150),
    height: SH(200),
    position: "absolute",
    bottom: SH(10),
    alignSelf: "center",
    resizeMode: "contain",
  },
});
