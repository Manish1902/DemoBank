import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Checkbox from '../components/CheckBox';
import TermsAndConditions from '../components/T&C';


const HomeScreen = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleCheckboxToggle = () => {
        setSelection(!isSelected);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to My bank App!</Text>
            <Text>Type of fund transfer</Text>
            <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={[
                    { label: 'From Account', value: 'From Account' },
                    { label: 'To Account', value: 'To Account' },
                ]}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox isSelected={isSelected} onPress={handleCheckboxToggle} />
                <TermsAndConditions modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </View>
            <Button
                onPress={() => navigation.navigate("Amount")}
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
    }, text: {
        fontSize: 20,
    }, button: {
        marginTop: 20,
    }
});

export default HomeScreen;