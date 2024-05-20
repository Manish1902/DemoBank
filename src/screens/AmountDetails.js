import React, { useState, useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import RadioButton from '../components/RadioButton';
import DatePicker from '../components/DatePicker';
import { DataContext } from '../context/dataContext';
import { GlobalStyles } from '../Styles/GlobalStyles';
import ValueInput from '../components/ValueInput';
import ErrorMessage from '../components/ErrorMessage';

const AmountDetails = ({ navigation }) => {
    let { amount, setAmount, selectedDate, setSelectedDate, selectedOption, setSelectedOption } = useContext(DataContext)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const options = ['Transfer after time', 'Immediate Transfer'];
    const [error,setError] = useState('')

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

    const handleNextButtonPress = () => {
        if(amount===""){
            setError('Please enter a amount')
        }
        else{
            setError('');
            navigation.navigate("Conformation");
        }
    }
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
                label="Enter Amount"
                amount={amount}
                onValueChange={setAmount}
                placeholder="Rupee"
            />
            {error ? <ErrorMessage message={error} /> : null}
            <Button
                onPress={handleNextButtonPress}
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
