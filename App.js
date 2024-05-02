import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AmountDetails from './src/screens/AmountDetails';

// Screens
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Demo Bank App' }} />
        <Stack.Screen name="Amount" component={AmountDetails} options={{ title: 'Amount Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App