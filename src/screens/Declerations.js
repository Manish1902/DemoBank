import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { DataContext } from '../context/dataContext';
import { GlobalStyles } from '../Styles/GlobalStyles';
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
        navigation.reset({
            index: 0,
            routes: [{ name: 'Accounts' }]
        });
    }

    return <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.text}>Congratulations</Text>
        <Text>Your transaction of was sucessfull. Please navigate back to home page</Text>
        <Button
            onPress={() => goingHome()}
            title="Home"
        />
    </View>
}

export default Decleration