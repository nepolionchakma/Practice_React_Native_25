import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

const App = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <LoginScreen />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({});

// import {ScrollView, StyleSheet} from 'react-native';
// import React from 'react';
// import LoginScreen from './src/screens/LoginScreen/LoginScreen';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';

// const App = () => {
//   const Stack = createNativeStackNavigator();
//   return (
//     <ScrollView>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Login" component={LoginScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </ScrollView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
