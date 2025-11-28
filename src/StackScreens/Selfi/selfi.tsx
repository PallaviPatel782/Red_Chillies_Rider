import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
} from 'react-native';
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
import { useTranslation } from 'react-i18next';

const Selfi = ({ navigation }: any) => {
  const { t } = useTranslation();
  const [photo, setPhoto] = useState<string | null>(null);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: t("cameraPermissionTitle"),
          message: t("cameraPermissionMsg"),
          buttonNegative: t("cancel"),
          buttonPositive: t("ok"),
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const handleTakeSelfie = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      showMessage({ message: t("cameraDenied"), type: 'danger' });
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
        message: t("cameraError"),
        description: error.message,
        type: 'danger',
      });
    }
  };

  const handleSubmit = () => {
    showMessage({
      message: t("selfieSubmitted"),
      type: 'success',
    });
    navigation.navigate('MainTabs');
  };

  return (
    <KeyboardAvoidWrapper
      bottomComponent={
        !photo ? (
          <CustomButton title={t("takeSelfie")} onPress={handleTakeSelfie} />
        ) : (
          <View style={styles.bottomButtonsContainer}>
            <View style={styles.buttonHalf}>
              <TouchableOpacity onPress={handleTakeSelfie}>
                <Text style={styles.RetakeButton}>
                  <FontAwesome name="camera" size={18} color={Colors.red} />{" "}
                  {t("retake")}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonHalf}>
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.SubmitButton}>{t("submit")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    >
      <View style={[GlobalStyles.container]}>
        <Header title={t("takeSelfie")} />

        <Text style={styles.guidelineTitle}>{t("selfieGuidelines")}</Text>

        <View style={styles.row}>
          <Image
            source={require('../../assests/Images/ClearImage.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>{t("imgShouldBeClear")}</Text>
        </View>

        <View style={styles.row}>
          <Image
            source={require('../../assests/Images/UnClearImage.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>{t("clickWithoutCap")}</Text>
        </View>

        {photo && (
          <View style={styles.previewContainer}>
            <Image source={{ uri: photo }} style={styles.previewImage} />
            <Text style={styles.previewText}>{t("previewSelfie")}</Text>
          </View>
        )}
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default Selfi;
