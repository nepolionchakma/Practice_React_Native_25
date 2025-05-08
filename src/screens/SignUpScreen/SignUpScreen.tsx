import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Button from '../../components/Button/Button';
import SocialLogin from '../LoginScreen/SocialLogin';
interface SignUpScreenProps {
  goBack: () => void;
}
const SignUpScreen = ({goBack}: SignUpScreenProps) => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.signUpText}>Create an account</Text>
      <View style={{width: '80%', marginTop: 20, gap: 10}}>
        <TextInput
          inputMode="text"
          placeholder="Email"
          autoCapitalize="none"
          style={styles.inputField}
          keyboardType="email-address"
        />
        <TextInput
          inputMode="text"
          placeholder="Enter Password"
          secureTextEntry={true}
          style={styles.inputField}
        />
        <TextInput
          inputMode="text"
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={styles.inputField}
        />
        {/* <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
          // style={{
          //   backgroundColor: 'black',
          //   padding: 10,
          //   alignItems: 'center',
          //   borderRadius: 5,
          // }}
          >
            <Text style={{color: 'white'}}>Forget your password?</Text>
          </TouchableOpacity>
        </View> */}
        <Button title="Sign Up" />
        <Button
          onPress={goBack}
          title="Already have an account"
          style={{
            backgroundColor: 'transparent',
          }}
        />
        <SocialLogin />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  signUpText: {fontSize: 20, fontWeight: 'bold'},
  inputField: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    width: '100%',
    height: 60,
  },
});
