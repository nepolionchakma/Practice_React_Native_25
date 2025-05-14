import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-date-picker';

interface DatePickerProps {
  isVisible: boolean;
  onClose: () => void;
  selectedDate: Date;
  handleDateChange: (date: Date) => void;
}
const DatePickerModal = ({
  isVisible,
  onClose,
  selectedDate,
  handleDateChange,
}: DatePickerProps) => {
  return (
    <View>
      <Modal
        visible={isVisible}
        transparent
        animationType="fade"
        onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <DatePicker
            date={selectedDate}
            onDateChange={handleDateChange}
            open={isVisible}
            modal
            mode="date"
            onCancel={onClose}
            onConfirm={handleDateChange}
          />
        </View>
      </Modal>
    </View>
  );
};

export default DatePickerModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
