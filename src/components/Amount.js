import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Amount = ({ amount, onAmountChange }) => {
    return <TextInput
        style={styles.inputStyle}
        placeholder="Rupee"
        value={amount}
        onChangeText={onAmountChange}
        keyboardType="numeric"
    />
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
})

export default Amount