import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface DayOfMonthListProps {
  date: Date;
}

interface DaysTypes {
  date: Date;
  day: string;
  fullDate: string;
}

interface DateItemViewProps extends DaysTypes {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

const DayOfMonthList = ({date}: DayOfMonthListProps) => {
  const [days, setDays] = useState<DaysTypes[]>([]);
  const [selectedDate, setSelectedDate] = useState(date);
  const FlatListRef = useRef(null);

  // Calculate days in the month whenever selectedDate changes
  useEffect(() => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysArray: DaysTypes[] = [];

    for (let index = 0; index < daysInMonth; index++) {
      const currentDate = new Date(year, month, index + 1); // Date should start from 1
      daysArray.push({
        date: currentDate, // Use the generated date here
        day: currentDate.toLocaleString('en-US', {weekday: 'short'}),
        fullDate: currentDate.toLocaleDateString(),
      });
    }
    setDays(daysArray);
    // setTimeout(() => {
    //   handleScroll(selectedDate, daysArray);
    // }, 100);
  }, [selectedDate]);

  // const handleScroll = useCallback((selectedDate, days) => {
  //   const index = days.findIndex(
  //     day => day.date.toDateString() === selectedDate.toDateString(),
  //   );
  //   if (FlatListRef.current && index !== -1) {
  //     FlatListRef.current?.scrollToIndex({index, animated: true});
  //   }
  // }, []);

  useEffect(() => {
    setSelectedDate(date);
  }, [date]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={FlatListRef}
        data={days}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        renderItem={({item}) => (
          <DateItemView
            {...item}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const DateItemView = ({
  day,
  date,
  selectedDate,
  setSelectedDate,
}: DateItemViewProps) => {
  // Check if the current date is the selected date
  const isSelected = date.toDateString() === selectedDate.toDateString();

  return (
    <TouchableOpacity
      onPress={() => setSelectedDate(date)}
      style={[styles.dayItems, isSelected && styles.selectedDayItem]}>
      <Text style={isSelected && styles.selectedText}>{day}</Text>
      <Text style={[styles.dayText, isSelected && styles.selectedText]}>
        {date.getDate()}
      </Text>
    </TouchableOpacity>
  );
};

export default DayOfMonthList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayItems: {
    gap: 5,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: 50,
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedText: {
    color: 'white',
  },
  selectedDayItem: {
    backgroundColor: '#3B82F6', // Blue background for selected date
  },
});
