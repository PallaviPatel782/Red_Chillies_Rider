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
    padding: SW(15),
    marginTop: SH(15),
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardHeader: {
    backgroundColor: '#EAF1FF',
    paddingVertical: SH(6),
    paddingHorizontal: SW(10),
    marginBottom: SH(8),
    margin: -SW(15)
  },
  progressTitle: {
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Medium',
    color: '#2266D1',
  },
  shiftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: SH(5),
  },
  inProgressBadge: {
    backgroundColor: '#D9F6E5',
    paddingHorizontal: SW(8),
    paddingVertical: SH(2),
    borderRadius: 6,
    marginRight: SW(8),
    marginVertical: SH(5),
    alignSelf: "flex-start",
  },
  inProgressText: {
    color: '#1B8E3E',
    fontSize: SF(12),
    fontFamily: 'Ubuntu-Medium',
    padding: SW(2)
  },
  shiftTime: {
    fontSize: SF(13),
    color: Colors.black,
    fontFamily: 'Ubuntu-Regular',
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SH(12),
  },
  progressItem: {
    flex: 1,
    alignItems: 'flex-start',
  },
  amount: {
    fontSize: SF(15),
    color: Colors.black,
    fontFamily: 'Ubuntu-Medium',
  },
  hours: {
    fontSize: SF(15),
    color: Colors.black,
    fontFamily: 'Ubuntu-Medium',
  },
  trips: {
    fontSize: SF(15),
    color: Colors.black,
    fontFamily: 'Ubuntu-Medium',
  },
  itemLabel: {
    fontSize: SF(12),
    color: "#26662F",
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
    marginBottom: 2,
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
    marginTop: SH(8),
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

});
