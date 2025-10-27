import { StyleSheet, Dimensions } from 'react-native';
import { SF, SW, SH } from '../../utils/Responsiveness/Dimensions';
import Colors from '../../utils/Colors/Colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.white || '#fff',
  },

  container: {
    paddingHorizontal: SW(20),
    paddingTop: SH(18),
    alignItems: 'center',
  },

  title: {
    fontSize: SF(18),
    fontWeight: '600',
    marginBottom: SH(14),
    fontFamily: 'Ubuntu-Regular',
    color: Colors.black || '#000',
  },

  profileWrap: {
    width: SW(120),
    height: SW(120),
    borderRadius: SW(60),
    marginBottom: SH(18),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  profileImage: {
    width: SW(120),
    height: SW(120),
    borderRadius: SW(60),
    borderWidth: 1.5,
    borderColor: '#f3f3f3',
  },

  cameraBtn: {
    position: 'absolute',
    right: SW(0),
    bottom: SH(0),
    backgroundColor: Colors.white,
    borderRadius: SW(20),
    padding: SW(6),
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  docBox: {
    width: '100%',
    height: SH(120),
    borderRadius: SW(10),
    borderWidth: 1,
    borderColor: '#ececec',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },

  uploadPlaceholder: {
    alignItems: 'center',
  },

  uploadText: {
    fontSize: SF(13),
    color: '#6b6b6b',
    marginTop: SH(4),
    fontFamily: 'Ubuntu-Regular',
  },

  docThumb: {
    width: '100%',
    height: '100%',
    borderRadius: SW(10),
  },

  removeBtn: {
    position: 'absolute',
    right: SW(8),
    top: SH(8),
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: SW(12),
    padding: SW(3),
    elevation: 3,
  },

  updateBtn: {
    width: width - SW(40),
    marginTop: SH(18),
    backgroundColor: '#e85a6e',
    paddingVertical: SH(14),
    borderRadius: SW(28),
    alignItems: 'center',
  },

  updateBtnText: {
    color: '#fff',
    fontSize: SF(16),
    fontWeight: '600',
    fontFamily: 'Ubuntu-Regular',
  },

  modalBox: {
    backgroundColor: '#fff',
    padding: SW(20),
    borderTopLeftRadius: SW(20),
    borderTopRightRadius: SW(20),
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },

  modalTitle: {
    fontSize: SF(16),
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: SH(10),
    fontFamily: 'Ubuntu-Regular',
  },

  modalBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SH(12),
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },

  modalBtnText: {
    fontSize: SF(15),
    marginLeft: SW(10),
    color: '#000',
    fontFamily: 'Ubuntu-Regular',
  },
});
