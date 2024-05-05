import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RadioButton = ({ options, selectedOption, onSelect }) => {
    return (
        <View style={styles.container}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.radioButton}
                    onPress={() => onSelect(option)}
                >
                    <View style={styles.radioButtonCircle}>
                        {selectedOption === option && <View style={styles.selectedRadioButtonCircle} />}
                    </View>
                    <Text style={styles.radioButtonText}>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    radioButtonCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selectedRadioButtonCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#000',
    },
    radioButtonText: {
        fontSize: 16,
    },
});

export default RadioButton;
