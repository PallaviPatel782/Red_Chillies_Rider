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
    margin: -SW(15),
    borderTopLeftRadius: 12,
    borderTopEndRadius: 12
  },
  progressTitle: {
    fontSize: SF(13),
    fontFamily: 'Ubuntu-Regular',
    color: '#2266D1',
    marginHorizontal: SW(3)
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
    fontSize: SF(12),
    fontFamily: 'Ubuntu-Regular',
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
    borderRadius: 12,
    paddingVertical: SH(10),
    paddingHorizontal: SW(10),
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
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoHeader: {
    position: 'absolute',
    bottom: SH(10),
    left: SW(10),
    right: SW(10),
    backgroundColor: '#FEE4E2',
    paddingVertical: SH(6),
    paddingHorizontal: SW(10),
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoTitle: {
    fontSize: SF(13),
    fontFamily: 'Ubuntu-Regular',
    color: '#E11311',
    marginHorizontal: SW(10)
  },
  summaryContainer: {
    backgroundColor: "#FFDB83",
    paddingHorizontal: SW(15),
    paddingVertical: SH(15),
    borderRadius: 12,
    marginVertical: SH(10)
  },
  todaysSummaryText: {
    fontSize: SF(14),
    fontFamily: "Ubuntu-Bold",
    color: Colors.black
  },
  tripText: {
    fontSize: SF(13),
    fontFamily: "Ubuntu-Regular",
    color: Colors.black
  },
  tripTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:SH(10)
  }
});
