import {StyleSheet, Text, Pressable, StyleProp} from 'react-native';
import React from 'react';
interface ButtonProps {
  children?: React.ReactNode;
}
interface ButtonProps {
  title?: string;
  style?: StyleProp<any>;
  variant?: string;
  onPress?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  title,
  style,
  variant = 'primary',
  onPress,
  children,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        style,
        pressed ? {opacity: 0.5} : {opacity: 1},
      ]}>
      {!children && (
        <Text
          style={[styles.text, variant !== 'primary' ? {color: 'black'} : {}]}>
          {title}
        </Text>
      )}
      {children}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3B82F6',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    height: 60,
    justifyContent: 'center',
    width: 'auto',
  },
  text: {
    color: 'white',
  },
});
