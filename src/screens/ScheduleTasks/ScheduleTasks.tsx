import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ScheduleTasks = () => {
  return (
    <View>
      <Text style={styles.scheduleText}>ScheduleTasks</Text>
    </View>
  );
};

export default ScheduleTasks;

const styles = StyleSheet.create({
  scheduleText: {fontSize: 20, fontWeight: 'bold', color: '#2188ff'},
});
