import React from "react";
import { TextInput, View, Text } from "react-native";
import { GlobalStyles } from "../Styles/GlobalStyles";

const ValueInput = ({ label, amount, onValueChange, placeholder }) => {
    return <View>
        <Text>{label}</Text>
        <TextInput
            style={GlobalStyles.inputStyle}
            placeholder={placeholder}
            value={amount}
            onChangeText={onValueChange}
            keyboardType="numeric"
        />
    </View>
}


export default ValueInput