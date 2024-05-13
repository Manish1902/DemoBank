import React from "react";
import { TextInput } from "react-native";
import { GlobalStyles } from "../Styles/GlobalStyles";

const ValueInput = ({ amount, onValueChange, placeholder }) => {
    return <TextInput
        style={GlobalStyles.inputStyle}
        placeholder={placeholder}
        value={amount}
        onChangeText={onValueChange}
        keyboardType="numeric"
    />
}


export default ValueInput