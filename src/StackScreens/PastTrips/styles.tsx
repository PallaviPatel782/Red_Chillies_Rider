import { StyleSheet } from 'react-native';
import { SH, SW, SF } from '../../utils/Responsiveness/Dimensions';
import Colors from '../../utils/Colors/Colors';

export default StyleSheet.create({
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

  timerCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: SH(15),
    backgroundColor: '#FFECEC',
    borderRadius: 50,
    paddingHorizontal: SW(10),
    paddingVertical: SH(6),
  },
  timerText: {
    color: Colors.red,
    fontFamily: 'Ubuntu-Medium',
    fontSize: SF(13),
    marginLeft: 5,
  },
  addressBox: {
    paddingVertical: SH(8),
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressLabel: {
    fontSize: SF(13),
    fontFamily: 'Ubuntu-Regular',
    color: '#2EAD64',
  },
  addressText: {
    fontSize: SF(14),
    color: '#333',
    lineHeight: 20,
    fontFamily: 'Ubuntu-Regular',
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SW(12),
    marginVertical: SH(10),
  },

  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: SW(10),
    paddingVertical: SH(6),
    elevation: 1,
  },
  filterText: {
    marginLeft: SW(4),
    fontSize: SF(13),
    color: '#000',
    fontFamily: 'Ubuntu-Medium',
  },

  tabRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabActive: {
    fontSize: SF(13),
    color: '#000',
    fontFamily: 'Ubuntu-Medium',
  },
  tabUnderline: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
    marginTop: 2,
  },

  tripHistoryHeading: {
    marginLeft: SW(12),
    fontSize: SF(14),
    color: '#000',
    fontFamily: 'Ubuntu-Medium',
    marginBottom: SH(6),
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SH(15),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dateText: {
    marginHorizontal: SW(10),
    fontSize: SF(13),
    fontFamily: 'Ubuntu-Regular',
    color: '#444',
  },
  filterOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  dropdownWrapper: {
    position: 'absolute',
    top: SH(122),
    left: SW(18),
    width: SW(160),
  },

  dropdownContainer: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    width: '100%',
    paddingVertical: SH(5),
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },

  dropdownItem: {
    paddingVertical: SH(8),
    paddingHorizontal: SW(10),
  },
  dropdownText: {
    fontSize: SF(14),
    color: Colors.black,
  },
  filterDropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: SW(10),
    paddingVertical: SH(6),
    width: SW(160),
  },
  dropdown: {
    flex: 1,
    height: SH(30),
  },
  dropdownSelectedText: {
    fontSize: SF(14),
    color: Colors.black,
  },
  dropdownItemText: {
    fontSize: SF(14),
    color: Colors.black,
  },

  dateRangeText: {
    fontSize: SF(13),
    color: Colors.gray,
  },

  divider: {
    height: 1,
    backgroundColor: Colors.gray,
    marginVertical: SH(10),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: SH(15),
    width: '90%',
    elevation: 6,
  },
  doneBtn: {
    backgroundColor: Colors.green,
    borderRadius: 8,
    marginTop: SH(12),
    paddingVertical: SH(10),
    alignItems: 'center',
  },
  doneText: {
    color: '#fff',
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Medium',
  },
  filterHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SW(10),
    marginTop: SH(5),
  },

  rightStatsBox: {
    alignItems: 'flex-end',
  },

  statsText: {
    fontSize: 13,
    color: '#000',
    fontFamily: 'Ubuntu-Regular',
  },


});
