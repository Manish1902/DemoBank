import React, { useState, useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import RadioButton from '../components/RadioButton';
import DatePicker from '../components/DatePicker';
import { DataContext } from '../context/dataContext';
import { GlobalStyles } from '../Styles/GlobalStyles';
import ValueInput from '../components/ValueInput';

const AmountDetails = ({ navigation }) => {
    let { amount, setAmount, selectedDate, setSelectedDate, selectedOption, setSelectedOption } = useContext(DataContext)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const options = ['Transfer after time', 'Immediate Transfer'];

    const handleSelect = (option) => {
        setSelectedOption(option);
        if (option === 'Immediate Transfer') {
            setSelectedDate(new Date());
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setDatePickerVisibility(false);
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.text}>Amount Details</Text>
            <RadioButton options={options} selectedOption={selectedOption} onSelect={handleSelect} />
            {selectedOption === 'Transfer after time' &&
                <>
                    <Button title="Select Date" onPress={showDatePicker} />
                    <DatePicker
                        isVisible={isDatePickerVisible}
                        selectedDate={selectedDate}
                        onDateChange={handleDateChange}
                        onClose={hideDatePicker}
                    />
                </>
            }
            <Text style={styles.selectedDateText}>Selected Date: {selectedDate.toDateString()}</Text>
            <ValueInput
                amount={amount}
                onValueChange={setAmount}
                placeholder="Rupee"
            />
            <Button
                onPress={() => navigation.navigate("AllDetails")}
                title="Next"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    selectedDateText: {
        marginTop: 10,
    },
});

export default AmountDetails;
