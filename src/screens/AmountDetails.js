import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Amount from '../components/Amount';

const AmountDetails = ({ navigation }) => {
    const [amount, setAmount] = useState('');
    return (
        <View style={styles.container}>
            <Text>Amount Details</Text>
            <Amount
                amount={amount}
                onAmountChange={setAmount}
            />
            <Button
                onPress={() => navigation.navigate("Home")}
                title="Next"
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
});


export default AmountDetails