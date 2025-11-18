import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { SF, SH, SW } from '../../utils/Responsiveness/Dimensions';

export default StyleSheet.create({
  dropTag: {
    backgroundColor: Colors.dark_green,
    alignSelf: 'flex-start',
    borderRadius: 6,
    paddingHorizontal: SW(10),
    paddingVertical: SH(4),
    marginTop: SH(10),
  },
  dropTagText: {
    color: Colors.white,
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(11),
  },
  customerInfo: {
    marginTop: SH(10),
  },
  customerName: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: SF(14),
    color: Colors.black,
  },
  address: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: SF(12),
    color: '#555',
    marginVertical: SH(6),
    lineHeight: SH(18),
  },
  orderId: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(13),
    color: Colors.black,
  },
  callMapRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SH(20),
  },
  callButton: {
    width: '47%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: SH(12),
    borderRadius: SW(20),
    justifyContent: 'center',
    elevation: 2,
  },
  callButtonText: {
    color: Colors.red,
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(13),
    marginLeft: SW(6),
  },
  mapButton: {
    width: '47%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.red,
    paddingVertical: SH(12),
    borderRadius: SW(20),
    justifyContent: 'center',
  },
  mapButtonText: {
    color: Colors.white,
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(13),
    marginLeft: SW(6),
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: SH(14),
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#F5F5F6",
    paddingVertical: SH(10),
    paddingHorizontal: SW(10),
    borderRadius: 20,
    marginVertical: SH(10),
    borderColor: "#5B66AB",
    borderWidth: 0.5
  },
  chatButtonText: {
    color: "#5B66AB",
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Medium',
    marginLeft: 5,
  },

  reachedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark_green,
    borderRadius: SW(8),
    paddingVertical: SH(12),
    marginVertical:SH(10)
  },
  reachedButtonText: {
    color: Colors.white,
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(14),
    marginLeft: SW(4),
  },
   rejectBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffecec',
    borderRadius: SW(16),
    paddingHorizontal: SW(10),
    paddingVertical: SH(4),
    alignSelf: 'flex-end',
  },
  rejectText: {
    color: Colors.red,
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(13),
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
