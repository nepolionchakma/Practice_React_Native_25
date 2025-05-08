import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/Button/Button';
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import SocialLogin from './SocialLogin';

const LoginScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {!isSignUp && (
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.loginText}>Login Here</Text>
          <Text>Welcome back!</Text>
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
              placeholder="Password"
              secureTextEntry={true}
              style={styles.inputField}
            />
            <View style={{alignItems: 'flex-end'}}>
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
            </View>
            <Button title="Login" />
            <Button
              onPress={() => setIsSignUp(true)}
              title="Create a account"
              style={{
                backgroundColor: 'transparent',
              }}
            />
            <SocialLogin />
          </View>
        </View>
      )}
      {isSignUp && <SignUpScreen goBack={() => setIsSignUp(false)} />}
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    width: '100%',
    height: 60,
  },
});
