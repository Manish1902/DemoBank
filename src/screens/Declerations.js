import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Decleration = ({ navigation }) => {
    return <View style={styles.container}>
        <Text style={styles.text}>Congratulations</Text>
        <Text>Your transaction of 'Amount' was sucessfull. Please navigate back to home page</Text>
        <Button
            onPress={() => navigation.navigate("Home")}
            title="Home"
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

export default Decleration