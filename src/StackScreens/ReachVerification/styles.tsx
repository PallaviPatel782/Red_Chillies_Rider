import { StyleSheet } from 'react-native';
import { SH, SW, SF } from '../../utils/Responsiveness/Dimensions';
import Colors from '../../utils/Colors/Colors';

export default StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SH(10),
  },
  rejectBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffecec',
    borderRadius: SW(16),
    paddingHorizontal: SW(10),
    paddingVertical: SH(4),
    alignSelf:"flex-end"
  },
  rejectText: {
    color: Colors.red,
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(13),
  },
  pickupTag: {
   backgroundColor: '#000',
    alignSelf: 'flex-start',
    borderRadius: 6,
    paddingHorizontal: SW(10),
    paddingVertical: SH(6),
    marginTop: SH(8),
  },
  pickupText: {
   color: '#fff',
    fontFamily: 'Ubuntu-Regular',
    fontSize: SF(11),
  },
  orderIdText: {
    color: '#333',
    fontFamily: 'Ubuntu-Regular',
    fontSize: SF(12),
    marginLeft: SW(4),
  },
  hotelName: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(14),
    marginTop: SH(4),
  },
  addressText: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: SF(12),
    color: '#555',
    marginVertical: SH(4),
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SH(8),
  },
  greenText: {
    color: Colors.green,
    fontSize: SF(12),
    fontFamily: 'Ubuntu-Regular',
  },
  callMapRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SH(10),
    width:"100%"
  },
  callButton: {
      width:"47%",
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: SH(12),
    paddingHorizontal: SW(35),
    borderRadius: SW(20),
    elevation: 2,
     justifyContent: 'center', 
  },
  callButtonText: {
    color: Colors.red,
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(13),
    marginLeft: SW(6),
  },
  mapButton: {
      width:"47%",
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.red,
    paddingVertical: SH(12),
    paddingHorizontal: SW(35),
    borderRadius: SW(20),
     justifyContent: 'center', 
  },
  mapButtonText: {
    color: Colors.white,
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(13),
    marginLeft: SW(6),
  },
  reachedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.green,
    borderRadius: SW(8),
    paddingVertical: SH(12),
    marginTop: SH(10),
  },
  reachedButtonText: {
    color: Colors.white,
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(14),
    marginLeft: SW(4),
  },
});
