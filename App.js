import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DataStore from './src/context/dataStore';
import StackScreens from './Screens';

const App = () => {
  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <DataStore>
      <NavigationContainer>
        <StackScreens />
      </NavigationContainer>
    </DataStore>
  );
}

export default App;
