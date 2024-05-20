import React, { useState, useContext } from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';
import Checkbox from '../components/CheckBox'
import TermsAndConditions from '../components/Terms&Conditions';
import { DataContext } from '../context/dataContext';
import { GlobalStyles } from '../Styles/GlobalStyles';
import ValueInput from '../components/ValueInput';
import ErrorMessage from '../components/ErrorMessage';

const AccountDetails = ({ navigation }) => {
    let {fromAccount, setFromAccount} = useContext(DataContext);
    let {toAccount, setToAccount} = useContext(DataContext);
    const [isSelected, setSelection] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [error,setError] = useState('')

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
            setError('');
            navigation.navigate("Amount");
        } else {
            setError('Please enter valid account numbers (11-16 digits) and accept terms and conditions.');
        }
    };
    return (
        <View style={GlobalStyles.container}>
            <Text style={styles.text}>Welcome to My bank App!</Text>
            <ValueInput
                label="From Account"
                placeholder="From Account"
                value={fromAccount}
                onValueChange={handleFromAccountChange}
            />
            <ValueInput
                label="To Account"
                placeholder="To Account"
                value={toAccount}
                onValueChange={handleToAccountChange}
            />
            <View style={GlobalStyles.row}>
                <Checkbox isSelected={isSelected} onPress={handleCheckboxToggle} />
                <TermsAndConditions modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </View>
            {error ? <ErrorMessage message={error} /> : null}
            <Button
                onPress={handleNextButtonPress}
                title="Next"
                style={GlobalStyles.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 100,
    },
    button: {
        marginTop: 20,
    }
});

export default AccountDetails;
