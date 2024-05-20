import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountDetails from './src/screens/AccountDetails';
import AmountDetails from './src/screens/AmountDetails';
import AllSelectedDetails from './src/screens/AllSlelectedDetails';
import Decleration from './src/screens/Declerations';

const Stack = createStackNavigator();

const AccountStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Accounts">
      <Stack.Screen name="Accounts" component={AccountDetails} options={{ title: 'Account Details' }}/>
      <Stack.Screen name="Amount" component={AmountDetails} options={{ title: 'Amount Details' }} />
      <Stack.Screen name="AllDetails" component={AllSelectedDetails} options={{ title: 'All Selected Details' }} />
      <Stack.Screen name="Decleration" component={Decleration} options={{ title: 'Decleration' }} />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;
