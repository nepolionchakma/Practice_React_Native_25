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
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../Types/Types';

interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'LoginScreen'>;
}
const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
  // const {navigate} = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
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
          <Text style={{color: 'black'}}>Welcome back!</Text>
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
            <Button title="Login" onPress={() => navigation.navigate('Home')} />
            <Button
              onPress={() => setIsSignUp(true)}
              title="Create a account"
              style={{
                backgroundColor: 'transparent',
              }}
              variant="secondary"
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
    color: '#2188ff',
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    width: '100%',
    height: 60,
    backgroundColor: '#b6b7ba',
  },
});
