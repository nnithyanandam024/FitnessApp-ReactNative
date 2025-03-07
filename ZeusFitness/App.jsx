import React from 'react';
import { Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Comp1 from './src/Components/Comp1';
import Comp2 from './src/Components/Comp2';
import MainPage from './src/Components/MainPage';

const App = () => {
  return (
    <SafeAreaProvider>
         <MainPage />
    </SafeAreaProvider>  
  );
};



export default App;
