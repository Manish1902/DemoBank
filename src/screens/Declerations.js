import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Decleration = ({ navigation }) => {
    return <View>
        <Text>Congratulations</Text>
        <Button
            onPress={() => navigation.navigate("Home")}
            title="Home"
        />
    </View>
}

const styles = StyleSheet.create({

})

export default Decleration