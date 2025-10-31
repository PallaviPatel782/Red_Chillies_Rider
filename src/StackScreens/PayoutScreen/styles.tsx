import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { SF, SH, SW } from '../../utils/Responsiveness/Dimensions';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  tabContainer: {
    paddingVertical: SH(16),
    paddingHorizontal: SW(5)
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: SH(12),
    padding: SH(16),
    elevation: 2,
  },
  cardTitle: {
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Regular',
    color: Colors.black,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: SH(12),
  },
  infoCard: {
    alignItems: 'center',
  },
  infoValue: {
    fontSize: SF(18),
    fontFamily: 'Ubuntu-Regular',
    color: Colors.black,
  },
  infoLabel: {
    fontSize: SF(12),
    color: '#00A676',
  },
  performanceFooter: {
    marginTop: SH(20),
    backgroundColor: '#f5f8ff',
    borderRadius: SH(12),
    padding: SH(16),
  },
  performanceTitle: {
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Regular',
    color: Colors.black,
  },
  periodText: {
    fontSize: SF(13),
    fontFamily: 'Ubuntu-Regular',
    color: Colors.black,
  },
  chart: {
    height: SH(250),
    marginHorizontal:-SW(15)
  },
  tabLabel: {
    fontSize: SF(13),
    fontFamily: 'Ubuntu-Regular',
    textTransform: 'none',
  },
  tabIndicator: {
    backgroundColor: Colors.red,
  },
  performanceCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    elevation: 2,
    overflow: 'hidden',
    marginTop: SH(20),
  },

  performanceHeader: {
    backgroundColor: '#E8F0FF',
    paddingVertical: SH(8),
    paddingHorizontal: SW(12),
  },

  performanceHeaderText: {
    fontSize: SF(13),
    fontFamily: 'Ubuntu-Regular',
    color: Colors.black,
  },

  performanceContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: SH(16),
    backgroundColor: Colors.white,
  },

  circleItem: {
    alignItems: 'center',
  },

  circle: {
    width: SW(60),
    height: SH(60),
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },

  circleValue: {
    fontSize: SF(14),
    fontFamily: 'Ubuntu-Regular',
    color: Colors.black,
  },

  circleLabel: {
    fontSize: SF(12),
    color: '#008753',
    marginTop: 4,
    fontFamily: 'Ubuntu-Regular',
  },
});
