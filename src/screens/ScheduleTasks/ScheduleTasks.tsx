import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Search from '../../components/Search/Search';
import {useNavigation} from '@react-navigation/native';
import DatePickerModal from '../../components/DatePicker/DatePickerModal';
import DayOfMonthList from '../../components/DayOfMonthList/DayOfMonthList';

const ScheduleTasks = () => {
  const navigate = useNavigation();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const getMonth = useCallback(() => {
    const options: {
      year: 'numeric' | '2-digit';
      month: 'long' | 'short' | 'numeric';
    } = {
      year: 'numeric',
      month: 'long',
    };

    return currentDate.toLocaleString('en-US', options);
  }, [currentDate]);
  return (
    <View style={{flex: 1, padding: 10, gap: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <BackButton onpress={() => navigate.goBack()} />
        <Search />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Text style={styles.scheduleText}>{getMonth()}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 5,
            width: 100,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}> Add Task </Text>
        </TouchableOpacity>
      </View>
      <View>
        <DatePickerModal
          onClose={() => setIsModalVisible(false)}
          isVisible={isModalVisible}
          selectedDate={currentDate}
          handleDateChange={date => {
            setCurrentDate(date);
            setIsModalVisible(false);
          }}
        />
      </View>
      <DayOfMonthList date={currentDate} />
    </View>
  );
};

export default ScheduleTasks;

const styles = StyleSheet.create({
  scheduleText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
});
