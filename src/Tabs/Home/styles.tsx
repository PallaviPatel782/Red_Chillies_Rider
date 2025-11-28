import { StyleSheet } from 'react-native';
import { SH, SW, SF } from '../../utils/Responsiveness/Dimensions';
import Colors from '../../utils/Colors/Colors';

export default StyleSheet.create({
  homeBanner: {
    width: '100%',
    height: SH(160),
    borderRadius: 10,
    marginTop: SH(15),
  },
  progressCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingVertical: SH(9.5),
    paddingHorizontal: SW(10),
    marginVertical: SH(5),
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardHeader: {
    backgroundColor: '#EAF1FF',
    paddingVertical: SH(6),
    paddingHorizontal: SW(8),
    marginBottom: SH(8),
    margin: -SW(10),
    borderTopLeftRadius: 12,
    borderTopEndRadius: 12
  },
  progressTitle: {
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Bold',
    color: '#2266D1',
    marginLeft: SW(5)
  },
  shiftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: SH(5),
  },
  inProgressBadge: {
    paddingHorizontal: SW(8),
    paddingVertical: SH(2),
    borderRadius: 6,
    marginRight: SW(8),
    marginTop: SH(10),
    alignSelf: "flex-start",
  },
  inProgressText: {
    color: '#41495C',
    fontSize: SF(13),
    fontFamily: 'Ubuntu-Regular',
    padding: SW(2),
  },
  shiftTime: {
    fontSize: SF(13),
    color: Colors.black,
    fontFamily: 'Ubuntu-Regular',
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SH(7),
  },

  progressItem: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: SH(10),
    paddingHorizontal: SW(15),
    alignItems: 'flex-start',
    marginHorizontal: SW(3),
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  iconCircle: {
    width: SW(30),
    height: SW(30),
    borderRadius: SW(15),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  amount: {
    color: '#fff',
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Bold',
    marginTop: SH(5),
  },

  hours: {
    color: '#fff',
    fontSize: SF(16),
    fontFamily: 'Ubuntu-Bold',
    marginTop: SH(5),
  },

  trips: {
    color: '#fff',
    fontSize: SF(16),
    fontFamily: 'Ubuntu-Bold',
    marginTop: SH(5),
  },

  itemLabel: {
    color: '#fff',
    fontSize: SF(12),
    fontFamily: 'Ubuntu-Regular',
    marginTop: SH(2),
  },


  startButton: {
    marginTop: SH(15),
    paddingVertical: SH(10),
    borderRadius: 8,
    alignItems: 'center',
  },
  startText: {
    color: Colors.white,
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(13),
    letterSpacing: 0.5,
  },
  shiftLabel: {
    fontSize: SF(13),
    color: Colors.gray,
    marginTop: 3,
    fontFamily: 'Ubuntu-Regular',
  },
  tripContainer: {
    marginTop: SH(15),
  },

  tripHeader: {
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Medium',
    color: '#000',
    marginBottom: SH(10),
  },
  tripCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    borderWidth: 0.5,
    borderColor: '#eee',
    position: 'relative',
  },
  tripHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tripName: {
    fontSize: SF(15),
    fontFamily: 'Ubuntu-Medium',
    color: '#000',
  },
  addressBox: {
    paddingVertical: SH(8),
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  addressLabel: {
    fontSize: SF(13),
    color: '#2EAD64',
    fontFamily: 'Ubuntu-Regular',
  },
  addressText: {
    fontSize: SF(14),
    color: '#333',
    lineHeight: 20,
    fontFamily: 'Ubuntu-Regular',
  },
  orderIdText: {
    color: Colors.white,
    fontFamily: 'Ubuntu-Regular',
    fontSize: SF(12),
    marginLeft: SW(4),
  },
  earningBadge: {
    position: 'absolute',
    top: -1,
    right: -1,
    backgroundColor: Colors.red,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  earningBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Ubuntu-Regular',
  },

  tripRow: {
    marginTop: SH(8),
  },
  tripInfo: {
    fontSize: SF(13),
    color: '#444',
    fontFamily: 'Ubuntu-Regular',
    marginVertical: SH(5),
  },
  boldText: {
    fontFamily: 'Ubuntu-Medium',
  },
  pickupButton: {
    backgroundColor: '#000',
    alignSelf: 'flex-start',
    borderRadius: 6,
    paddingHorizontal: SW(10),
    paddingVertical: SH(6),
    marginBottom: SH(5),
  },
  pickupButtonText: {
    color: '#fff',
    fontFamily: 'Ubuntu-Regular',
    fontSize: SF(11),
  },
  tripAddress: {
    fontSize: SF(12),
    color: '#555',
    fontFamily: 'Ubuntu-Regular',
    marginTop: SH(6),
    lineHeight: SH(18),
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardIcon: {
    marginRight: SW(6),
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: SH(20),
    paddingHorizontal: SW(20),
    alignItems: 'center',
  },
  timerCircle: {
    borderWidth: 2,
    borderColor: Colors.red,
    borderRadius: 40,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 40,
    marginBottom: 8,
  },
  timerText: {
    marginLeft: 6,
    color: Colors.red,
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Medium',
  },
  earningLabel: {
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Regular',
    color: '#777',
  },
  earningValue: {
    fontSize: SF(24),
    fontFamily: 'Ubuntu-Bold',
    color: '#000',
    marginBottom: SH(10),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: SH(10),
  },
  distanceText: {
    fontSize: SF(13),
    color: '#333',
    fontFamily: 'Ubuntu-Regular',
  },
  pickupCard: {
    padding: SW(5),
    width: '100%',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: SH(14),
  },
  pickupTitle: {
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Medium',
    color: '#000',
    marginBottom: SH(4),
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SH(6),
  },
  greenText: {
    color: '#1B8E3E',
    fontSize: SF(14),
    marginLeft: 4,
    fontFamily: 'Ubuntu-Regular',
  },
  acceptButton: {
    backgroundColor: Colors.dark_green,
    borderRadius: 10,
    paddingVertical: SH(10),
    width: '100%',
    alignItems: 'center',
    marginTop: SH(15),
  },
  acceptText: {
    color: '#fff',
    fontSize: SF(15),
    fontFamily: 'Ubuntu-Medium',
  },
  onlineModalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  onlineModalCard: {
    backgroundColor: '#fff',
    padding: SH(20),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },

  onlineModalContent: {
    alignItems: 'center',
  },

  offlineTitle: {
    fontSize: SF(16),
    fontFamily: 'Ubuntu-Bold',
    marginTop: SH(10),
    textAlign: 'center',
  },

  offlineSubtitle: {
    fontSize: SF(14),
    color: '#555',
    fontFamily: 'Ubuntu-Regular',
    marginTop: SH(5),
    textAlign: 'center',
  },

  goOnlineBtn: {
    width: '100%',
    paddingVertical: SH(12),
    backgroundColor: Colors.dark_green,
    borderRadius: 10,
    marginTop: SH(18),
    alignItems: 'center',
  },

  goOnlineText: {
    color: '#fff',
    fontSize: SF(15),
    fontFamily: 'Ubuntu-Medium',
  },

});
