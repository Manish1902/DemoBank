import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { DataContext } from '../context/dataContext';

const AllSelectedDetails = ({ navigation }) => {
    let { fromAccount, toAccount, amount, selectedDate,selectedOption} = useContext(DataContext)

    return <View style={styles.container}>
        <Text style={styles.text}>All Details</Text>
        <Text>From Account: {fromAccount}</Text>
        <Text>To Account: {toAccount}</Text>
        <Text>Transfer Type: {selectedOption}</Text>
        {/* <Text>Date: {selectedDate}</Text> */}
        <Text>Amount to be transfered: {amount}</Text>
        <Button
            onPress={() => navigation.navigate("Decleration")}
            title="Next"
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,    },
});

export default AllSelectedDetails