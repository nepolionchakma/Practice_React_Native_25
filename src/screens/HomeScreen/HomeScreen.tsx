import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  console.log('HomeScreen this is');
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{color: 'black'}}>HomeScreen</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
