import {ScrollView} from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import {RootStackParamList} from './src/Types/Types';

const App = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
};

export default App;

// const styles = StyleSheet.create({});

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
