import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { DataContext } from '../context/dataContext';
import { GlobalStyles } from '../Styles/GlobalStyles';

const FinalConformation = ({ navigation }) => {
    let { fromAccount, toAccount, amount, selectedDate,selectedOption} = useContext(DataContext)

    return <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.text}>All Details</Text>
        <Text style={GlobalStyles.text}>From Account: {fromAccount}</Text>
        <Text style={GlobalStyles.text}>To Account: {toAccount}</Text>
        <Text style={GlobalStyles.text}>Transfer Type: {selectedOption}</Text>
        <Text style={GlobalStyles.text}>Date: {selectedDate.toDateString()}</Text>
        <Text style={GlobalStyles.text}>Amount to be transfered: {amount}</Text>
        <Button
            onPress={() => navigation.navigate("Decleration")}
            title="Next"
        />
    </View>
}

export default FinalConformation