import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { DataContext } from '../context/dataContext';

const Decleration = ({ navigation }) => {
    let {setFromAccount,setToAccount,setAmount,setSelectedDate,setSelectedOption } = useContext(DataContext)
    const resetStates = () => {
        setFromAccount('');
        setToAccount('');
        setAmount('');
        setSelectedDate(new Date());
        setSelectedOption(null);
    };
    const goingHome = () => {
        resetStates()
        navigation.navigate("Home")
    }

    return <View style={styles.container}>
        <Text style={styles.text}>Congratulations</Text>
        <Text>Your transaction of was sucessfull. Please navigate back to home page</Text>
        <Button
            onPress={() => goingHome()}
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