import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import Header from '../../../Components/Header';
import KeyboardAvoidWrapper from '../../../Components/KeyboardAvoidWrapper';
import GlobalStyles from '../../../utils/GlobalStyles/GlobalStyles';
import styles from './styles';
import Colors from '../../../utils/Colors/Colors';
import { SH, SW } from '../../../utils/Responsiveness/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HelpCenterDenyOrder = ({ route }: any) => {
  const { selectedReason } = route.params || {};
  const [modalVisible, setModalVisible] = useState(false);

  const getImageData = () => {
    if (selectedReason?.includes('Met with an accident')) {
      return {
        image: require('../../../assests/Images/CannotDeliver.png'),
      };
    } else if (selectedReason?.includes('Restaurant is closed')) {
      return {
        image: require('../../../assests/Images/Restaurantclosed.png'),
      };
    } else if (selectedReason?.includes('Can’t find restaurant')) {
      return {
        image: require('../../../assests/Images/Cantfindrestaurant.png'),
      };
    } else {
      return {
        image: require('../../../assests/Images/CannotDeliver.png'),
      };
    }
  };

  const { image } = getImageData();

  return (
    <KeyboardAvoidWrapper>
      <View style={[GlobalStyles.container]}>
        <Header title="Help Center" />
        <Text style={styles.reasonTitle}>
          {selectedReason ?? 'No reason selected'}
        </Text>
        <View style={styles.warningBox}>
          <Text style={styles.warningText}>
            You did <Text style={{ fontFamily: 'Ubuntu-Bold' }}>2 denials</Text> in the last{' '}
            <Text style={{ fontFamily: 'Ubuntu-Bold' }}>20 orders!</Text>
          </Text>
        </View>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.denyBtnOutline}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.denyText}>Deny order</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dontDenyBtn}>
            <Text style={styles.dontDenyText}>Don't Deny</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <Pressable
            style={styles.modalOverlay}
            onPress={() => setModalVisible(false)}
          />
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Are you sure?</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={22} color={Colors.black} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalCard}>
              <View style={styles.cardRow}>
                <MaterialCommunityIcons
                  name="file-document-outline"
                  size={20}
                  color={Colors.red}
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.modalCardText}>
                  <Text style={styles.modalLabel}>Order Id: </Text>1234
                </Text>
              </View>
              <Text style={[styles.modalCardText, { marginTop: SH(6) }]}>
                <Text style={styles.modalLabel}>Reason: </Text>
                {selectedReason?.split(': ')[1] ?? 'Not provided'}
              </Text>
            </View>
            <View style={styles.infoBox}>
              <View style={styles.infoHeader}>
                <MaterialCommunityIcons
                  name="help-circle-outline"
                  size={20}
                  color={Colors.red}
                />
                <View style={{ flex: 1, marginLeft: SW(8) }}>
                  <Text style={styles.infoText}>
                    You will be taken offline for denial
                  </Text>
                  <Text style={styles.subText}>
                    Please come back online when you are ready to start delivering
                    orders
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={'#777'}
                />
              </View>
            </View>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalDenyBtn}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.modalDenyText}>Deny order</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalDontDenyBtn}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.modalDontDenyText}>Don’t Deny</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default HelpCenterDenyOrder;
