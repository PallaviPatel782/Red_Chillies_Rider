import React, { useState } from 'react';
import { View, Text, Image, PermissionsAndroid, Platform, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Header from '../../Components/Header';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import CustomButton from '../../Components/CustomButton';
import styles from './styles';
import { SH, SW } from '../../utils/Responsiveness/Dimensions';
import Colors from '../../utils/Colors/Colors';
import { showMessage } from 'react-native-flash-message';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Selfi = ({ navigation }: any) => {
  const [photo, setPhoto] = useState<string | null>(null);
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message:
            'Red Chillies Rider needs access to your camera to take a selfie.',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const handleTakeSelfie = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      showMessage({ message: 'Camera permission denied', type: 'danger' });
      return;
    }

    try {
      const image = await ImagePicker.openCamera({
        width: SW(1000),
        height: SH(1000),
        cropping: true,
        compressImageQuality: 0.8,
        useFrontCamera: true,
        mediaType: 'photo',
        includeBase64: false,
      });

      if (image?.path) setPhoto(image.path);
    } catch (error: any) {
      if (error?.message?.includes('cancelled')) return;
      showMessage({
        message: 'Camera error',
        description: error.message,
        type: 'danger',
      });
    }
  };

  const handleSubmit = () => {
    showMessage({
      message: 'Selfie submitted successfully!',
      type: 'success',
    });
    navigation.navigate('MainTabs');
  };

  return (
    <KeyboardAvoidWrapper
      bottomComponent={
        !photo ? (
          <CustomButton title="Take Selfie" onPress={handleTakeSelfie} />
        ) : (
          <View style={styles.bottomButtonsContainer}>
            <View style={styles.buttonHalf}>
              <TouchableOpacity
                onPress={handleTakeSelfie}
              >
                <Text style={styles.RetakeButton}><FontAwesome name="camera" size={18} color={Colors.red}/> Retake</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonHalf}>
               <TouchableOpacity
                onPress={handleSubmit}
              >
                <Text style={styles.SubmitButton}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    >

      <View style={[GlobalStyles.container]}>
        <Header title="Take Selfie" />
        <Text style={styles.guidelineTitle}>Selfie Guidelines</Text>

        <View style={styles.row}>
          <Image
            source={require('../../assests/Images/ClearImage.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>Image should be clear</Text>
        </View>

        <View style={styles.row}>
          <Image
            source={require('../../assests/Images/UnClearImage.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>Click without cap</Text>
        </View>

        {photo && (
          <View style={styles.previewContainer}>
            <Image source={{ uri: photo }} style={styles.previewImage} />
            <Text style={styles.previewText}>Preview your selfie</Text>
          </View>
        )}
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default Selfi;
