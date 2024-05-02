import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Amount = ({ amount, onAmountChange }) => {
    return <View style={styles.backgroundStyle}>
        <TextInput
            style={styles.inputStyle}
            placeholder="Rupee"
            value={amount}
            onChangeText={onAmountChange}
        />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
})

export default Amount