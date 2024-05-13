import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { DataContext } from '../context/dataContext';
import { GlobalStyles } from '../Styles/GlobalStyles';

const AllSelectedDetails = ({ navigation }) => {
    let { fromAccount, toAccount, amount, selectedDate,selectedOption} = useContext(DataContext)

    return <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.text}>All Details</Text>
        <Text>From Account: {fromAccount}</Text>
        <Text>To Account: {toAccount}</Text>
        <Text>Transfer Type: {selectedOption}</Text>
        <Text>Date: {selectedDate.toDateString()}</Text>
        <Text>Amount to be transfered: {amount}</Text>
        <Button
            onPress={() => navigation.navigate("Decleration")}
            title="Next"
        />
    </View>
}

export default AllSelectedDetails