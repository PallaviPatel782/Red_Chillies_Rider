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
  reachedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark_green,
    borderRadius: SW(8),
    paddingVertical: SH(12),
  },
  reachedButtonText: {
    color: Colors.white,
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(14),
    marginLeft: SW(4),
  },
});
