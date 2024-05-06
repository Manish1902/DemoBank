import React, { useState, useContext } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import Checkbox from '../components/CheckBox'
import TermsAndConditions from '../components/T&C';
import { DataContext } from '../context/dataContext';

const HomeScreen = ({ navigation }) => {
    // const [fromAccount, setFromAccount] = useState('');
    // const [toAccount, setToAccount] = useState('');
    let {fromAccount, setFromAccount} = useContext(DataContext);
    let {toAccount, setToAccount} = useContext(DataContext);
    const [isSelected, setSelection] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleFromAccountChange = (text) => {
            setFromAccount(text);
    };

    const handleToAccountChange = (text) => {
            setToAccount(text);
    };

    const handleCheckboxToggle = () => {
        setSelection(!isSelected);
    };
    const handleNextButtonPress = () => {
        if (
            /^\d+$/.test(fromAccount) &&
            fromAccount.length >= 11 &&
            fromAccount.length <= 16 &&
            /^\d+$/.test(toAccount) &&
            toAccount.length >= 11 &&
            toAccount.length <= 16 &&
            isSelected
        ) {
            navigation.navigate("Amount");
        } else {
            alert("Please enter valid account numbers (11-16 digits) and accept terms and conditions.");
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to My bank App!</Text>
            <Text>From Account</Text>
            <TextInput
                style={styles.inputStyle}
                placeholder="From Account"
                value={fromAccount}
                onChangeText={handleFromAccountChange}
                keyboardType="numeric"
            />
            <Text>To Account</Text>
            <TextInput
                style={styles.inputStyle}
                placeholder="To Account"
                value={toAccount}
                onChangeText={handleToAccountChange}
                keyboardType="numeric"
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox isSelected={isSelected} onPress={handleCheckboxToggle} />
                <TermsAndConditions modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </View>
            <Button
                onPress={handleNextButtonPress}
                title="Next"
                style={styles.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 100,
    },
    inputStyle: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 20,
    }
});

export default HomeScreen;
