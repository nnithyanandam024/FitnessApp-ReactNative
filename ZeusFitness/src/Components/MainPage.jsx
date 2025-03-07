import React from 'react';
import { useState } from 'react';
import { FlatList, ScrollView, StatusBar, View,RefreshControl } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Navbar from './Navbar';
import Comp3 from './Comp3';
import Comp4 from './Comp4';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];


const MainPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
 
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);
  return (
    <SafeAreaProvider>
       <StatusBar
          animated={true}
          backgroundColor= {isDarkMode ? "black" : "grey"}
        />
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <FlatList
  data={[{ key: 'comp1' }, { key: 'comp3' }, { key: 'comp4' }, { key: 'comp2' }]}
  keyExtractor={(item) => item.key}
  renderItem={({ item }) => {
    switch (item.key) {
      case 'comp1': return <Comp1 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
      case 'comp3': return <Comp3 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
      case 'comp4': return <Comp4 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
      case 'comp2': return <Comp2 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
      default: return null;
    }
  }}
  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
/>
    </SafeAreaProvider>
    
  );
};



export default MainPage;
