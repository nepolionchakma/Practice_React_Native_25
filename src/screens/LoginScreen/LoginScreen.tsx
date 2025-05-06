import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'white',
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
      </View>
    </View>
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
    height: 40,
  },
});
