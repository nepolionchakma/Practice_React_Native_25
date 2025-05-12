// import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ScheduleTasks from '../ScheduleTasks/ScheduleTasks';
import {Image} from 'react-native';
import HomeFilled from '../../Assets/img/home-filled.png';
import HomeEmpty from '../../Assets/img/home-empty.png';
import ScheduleTasksFilled from '../../Assets/img/appointment-filled.png';
import ScheduleTasksEmpty from '../../Assets/img/appointment-empty.png';

const HomeTabNavigatore = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? HomeFilled : HomeEmpty}
              style={{width: 30, height: 30, marginTop: 10}}
            />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="ScheduleTasks"
        component={ScheduleTasks}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? ScheduleTasksFilled : ScheduleTasksEmpty}
              style={{width: 30, height: 30, marginTop: 10}}
            />
          ),
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigatore;

// const styles = StyleSheet.create({})
