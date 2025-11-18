import { StyleSheet } from 'react-native';
import { SF, SH, SW } from '../../utils/Responsiveness/Dimensions';
import Colors from '../../utils/Colors/Colors';

export default StyleSheet.create({
  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentTitle: {
    color: Colors.black,
    fontSize: SF(15),
    fontFamily: 'Ubuntu-Regular',
  },
  paymentOrderId: {
    color: Colors.gray,
    fontSize: SF(12),
    marginTop: SH(2),
  },
  customerBox: {
    backgroundColor: Colors.white,
    borderRadius: SW(8),
    marginHorizontal: SW(15),
    padding: SH(12),
    marginTop: SH(15),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  customerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    fontSize: SF(12),
    color: Colors.gray,
    marginTop: SH(4),
    lineHeight: SH(16),
  },
  orderDetailsBox: {
    marginTop: SH(20),
    backgroundColor: '#F3F5F6',
    marginHorizontal: SW(15),
    borderRadius: SW(8),
    padding: SH(12),
  },
  orderDetailsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderDetailsTitle: {
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Regular',
    marginLeft: SW(6),
    color: Colors.black,
  },
  restaurantName: {
    fontSize: SF(13),
    color: Colors.gray,
    marginLeft: SW(6),
  },
  deliveredButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark_green,
    borderRadius: SW(25),
    paddingVertical: SH(12),
    marginTop: SH(25),
    marginHorizontal: SW(15),
  },
  deliveredText: {
    color: Colors.white,
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Regular',
    marginLeft: SW(5),
  },
  customerName: {
    fontSize: SF(15),
    fontFamily: 'Ubuntu-Medium',
    color: Colors.black,
    marginLeft: SW(8),
  },
  callIconCircle: {
    width: SW(35),
    height: SW(35),
    borderRadius: SW(20),
    backgroundColor: '#CEEBFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customerAddress: {
    fontSize: SF(12),
    color: Colors.gray,
    marginTop: SH(6),
    lineHeight: SH(18),
  },
  customerOrderId: {
    fontSize: SF(12),
    color: Colors.gray,
    marginTop: SH(4),
    fontFamily: 'Ubuntu-Regular',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: SH(12),
  },
  orderBox: {
    backgroundColor: '#E9F8EF',
    borderRadius: SW(8),
    paddingVertical: SH(10),
    paddingHorizontal: SW(12),
    marginTop: SH(16),
  },
  orderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderTitle: {
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Regular',
    marginLeft: SW(6),
    color: Colors.black,
  },
  deliverButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark_green,
    borderRadius: SW(30),
    paddingVertical: SH(14),
    marginTop: SH(25),
  },
  deliverButtonText: {
    color: Colors.white,
    fontSize: SF(15),
    fontFamily: 'Ubuntu-Regular',
    marginLeft: SW(8),
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  bottomSheet: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: SW(20),
    borderTopRightRadius: SW(20),
    paddingBottom: SH(30),
    paddingTop: SH(10),
  },
  orderCard: {
    paddingHorizontal: SW(18),
  },
  orderIcon: {
    marginBottom: SH(8),
    alignSelf: "center"
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SH(6),
  },
  itemName: {
    flex: 1,
    color: Colors.black,
    fontSize: SF(13),
  },
  itemPrice: {
    color: Colors.black,
    fontSize: SF(13),
    fontFamily: 'Ubuntu-Regular',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SH(6),
  },
  totalText: {
    fontSize: SF(14),
    color: Colors.black,
    fontFamily: 'Ubuntu-Regular',
    marginRight: SW(10),
  },
  paidTagBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SW(8),
    paddingVertical: SH(3),
    borderRadius: SW(6),
    borderWidth: 1,
  },
  paidTagText: {
    fontSize: SF(11),
    fontFamily: 'Ubuntu-Regular',
  },
  totalAmount: {
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Regular',
    color: Colors.black,
  },
  closeButton: {
    alignSelf: 'center',
    marginTop: SH(16),
  },
  closeText: {
    color: Colors.black,
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Regular',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SH(10),
    marginHorizontal: SW(10)
  },
  modalTitle: {
    fontSize: SF(16),
    fontFamily: 'Ubuntu-Regular',
    color: Colors.dark_green,
  }, orderId: {
    textAlign: 'center',
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(15),
    color: Colors.black,
  },
  otpOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  otpCard: {
    width: SW(300),
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: SH(25),
    alignItems: "center",
  },

  otpTitle: {
    fontSize: SF(18),
    fontFamily: "Ubuntu-Bold",
    color: Colors.dark_green,
    marginTop: SH(10),
  },

  otpSubtitle: {
    fontSize: SF(12),
    fontFamily: "Ubuntu-Medium",
    color: "#555",
    marginTop: SH(4),
    marginBottom: SH(10),
  },

  otpInput: {
    width: SW(200),
    height: SH(45),
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    textAlign: "center",
    fontSize: SF(16),
    fontFamily: "Ubuntu-Bold",
    letterSpacing: 6,
    color: Colors.black,
    marginTop: SH(10),
  },

  verifyBtn: {
    backgroundColor: Colors.dark_green,
    marginTop: SH(15),
    paddingVertical: SH(10),
    paddingHorizontal: SW(20),
    borderRadius: 8,
  },

  verifyBtnText: {
    color: "#fff",
    fontFamily: "Ubuntu-Medium",
    fontSize: SF(14),
  },

  cancelText: {
    color: Colors.red,
    marginTop: SH(10),
    fontFamily: "Ubuntu-Medium",
  },

  errorText: {
    color: "red",
    marginTop: SH(5),
    fontFamily: "Ubuntu-Medium",
  },
 image: {
  width: SW(200),
  height: SH(200),
  position: "absolute",
  bottom: SH(10),
  alignSelf: "center",
  resizeMode: "contain",
},

});
