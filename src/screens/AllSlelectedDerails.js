import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const AllSelectedDetails = ({ navigation }) => {
    return <View>
        <Text>All Details</Text>
        <Button
            onPress={() => navigation.navigate("Decleration")}
            title="Next"
        />
    </View>
}

const styles = StyleSheet.create({

})

export default AllSelectedDetails