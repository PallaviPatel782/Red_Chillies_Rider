import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Platform, PermissionsAndroid, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { useDispatch } from 'react-redux';
import { setLocation } from '../../redux/slices/locationStore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Routing/RootNavigator';
import Colors from '../../utils/Colors/Colors';

type LoadingNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Loading'>;

type Props = {
  navigation: LoadingNavigationProp;
};

const Loading: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'We need access to your location to find nearby delivery routes.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getCurrentLocation();
          } else {
            navigation.replace('Splash');
          }
        } else {
          getCurrentLocation();
        }
      } catch (err) {
        console.warn(err);
        navigation.replace('Splash');
      }
    };

    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('Current position:', position.coords);
          dispatch(setLocation({ latitude, longitude }));
          navigation.replace('Splash');
        },
        (error) => {
          console.log('Error getting location:', error);
          Alert.alert('Location Error', 'Unable to fetch your current location.');
          navigation.replace('Splash');
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };

    const timer = setTimeout(() => {
      requestLocationPermission();
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch, navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../src/assests/Images/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white_cream,
  },
  logo: {
    width: 150,
    height: 150,
  },
});
