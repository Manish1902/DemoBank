import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const AllSelectedDetails = ({ navigation }) => {
    return <View style={styles.container}>
        <Text style={styles.text}>All Details</Text>
        <Text> Your select type of transfer is: </Text>
        <Text>Transfer Type:</Text>
        <Text>Date:</Text>
        <Text>Amount to be transfered:</Text>
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