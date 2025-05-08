import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/Button/Button';
import Facebook from '../../Assets/img/icons8-facebook-24.png';
import Google from '../../Assets/img/icons8-google-24.png';
import Twitter from '../../Assets/img/icons8-twitter-24.png';
const SocialLogin = () => {
  return (
    <View style={{alignItems: 'center', marginTop: 30}}>
      <Text style={{marginTop: 20, marginBottom: 10}}>Or continue with</Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          marginTop: 10,
        }}>
        <Button style={styles.button}>
          <Image source={Google} />
        </Button>
        <Button style={styles.button}>
          <Image source={Facebook} />
        </Button>
        <Button style={styles.button}>
          <Image source={Twitter} />
        </Button>
      </View>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  button: {backgroundColor: 'gray'},
});
