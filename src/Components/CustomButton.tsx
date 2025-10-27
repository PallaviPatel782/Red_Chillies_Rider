import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import Colors from '../utils/Colors/Colors';
import { SH, SW, SF } from '../utils/Responsiveness/Dimensions';

type CustomButtonProps<Screen extends string = string> = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const CustomButton = <Screen extends string>({
  title,
  onPress,
}: CustomButtonProps<Screen>) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.red,
    paddingVertical: SH(12),
    paddingHorizontal: SW(5),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    marginVertical: SH(10)
  },
  text: {
    color: '#ffffff',
    fontSize: SF(15),
    fontFamily: 'Ubuntu-Regular',
  },
});

export default CustomButton;
