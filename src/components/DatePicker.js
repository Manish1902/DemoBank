import React from 'react';
import { View, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ selectedDate, isVisible, onDateChange, onClose }) => {
    return (
        <View>
            {isVisible && (
                <DateTimePicker
                    style={styles.datePicker}
                    value={selectedDate}
                    mode="date"
                    display="default"
                    onChange={(event, date) => {
                        onDateChange(date);
                        onClose();
                    }}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    datePicker: {
        width: '100%',
        backgroundColor: '#fff',
    },
});

export default DatePicker;
