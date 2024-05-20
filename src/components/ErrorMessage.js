import React from "react";
import { View,Text,StyleSheet } from "react-native";

const ErrorMessage = ({message}) => {
    return <View style={styles.container}>
        <Text style={styles.text}>{message}</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ErrorMessage