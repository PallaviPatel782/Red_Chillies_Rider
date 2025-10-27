import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SF, SW, SH } from '../utils/Responsiveness/Dimensions';
import Colors from '../utils/Colors/Colors';

type HeaderProps = {
  title: string;
  showBack?: boolean;
  onBackPress?: () => void;
};

const Header: React.FC<HeaderProps> = ({ title, showBack = true, onBackPress }) => {
  const navigation = useNavigation<any>();
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else if (navigation.canGoBack()) {
      navigation.goBack(); 
    } else {
      BackHandler.exitApp(); 
    }
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      {showBack ? (
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="arrow-back" size={SF(25)} color={Colors.black} />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}

      <Text style={styles.title}>{title}</Text>
      <View style={styles.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SH(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:0,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: SW(5),
    borderWidth: 0.5,
    borderColor: Colors.lightGray,
    borderRadius: SW(25),
  },
  placeholder: {
    width: SW(25),
  },
  title: {
    fontSize: SF(18),
    color: Colors.black,
    fontFamily: 'Ubuntu-Medium',
    textAlign: 'center',
  },
});

export default Header;
