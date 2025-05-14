import {Image, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../Button/Button';
interface BackButtonProps {
  onpress: () => void;
}
const BackButton = ({onpress}: BackButtonProps) => {
  return (
    <Button style={styles.button} onPress={onpress}>
      <Image source={require('../../Assets/img/back.png')} />
    </Button>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {backgroundColor: 'transparent', width: 30, height: 30},
});
