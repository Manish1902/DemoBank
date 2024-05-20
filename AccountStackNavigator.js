import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountDetails from './src/screens/AccountDetails';
import AmountDetails from './src/screens/AmountDetails';
import FinalConformation from './src/screens/FinalConformation';
import Decleration from './src/screens/Declerations';

const Stack = createStackNavigator();

const AccountStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Accounts">
      <Stack.Screen name="Accounts" component={AccountDetails} options={{ headerShown: false }}/>
      <Stack.Screen name="Amount" component={AmountDetails} options={{ headerShown: false }} />
      <Stack.Screen name="Conformation" component={FinalConformation} options={{ headerShown: false }} />
      <Stack.Screen name="Decleration" component={Decleration} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;
