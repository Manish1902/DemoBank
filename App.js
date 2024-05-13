import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DataStore from './src/context/dataStore';
// Screens
import HomeScreen from './src/screens/HomeScreen';
import AmountDetails from './src/screens/AmountDetails';
import AllSelectedDetails from './src/screens/AllSlelectedDerails';
import Decleration from './src/screens/Declerations';

const Stack = createStackNavigator();

const App = () => {
  return (
    <DataStore>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerBackTitleVisible: false }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Demo Bank App' }} />
          <Stack.Screen name="Amount" component={AmountDetails} options={{ title: 'Amount Details' }} />
          <Stack.Screen name="AllDetails" component={AllSelectedDetails} options={{ title: 'All Selected Details' }} />
          <Stack.Screen name="Decleration" component={Decleration} options={{ title: 'Decleration' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataStore>
  );
}

export default App