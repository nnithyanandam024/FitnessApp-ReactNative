import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppLayout from './src/AppLayout/AppLayout';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppLayout />
    </SafeAreaProvider>
  );
};

export default App;
