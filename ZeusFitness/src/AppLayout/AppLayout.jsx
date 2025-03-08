import React from 'react';
import {useState} from 'react';
import {
  FlatList,
  StatusBar,
  RefreshControl,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Comp1 from '../Components/Progress/Progress';
import Comp2 from '../Components/Suggestions/Suggestions';
import Navbar from '../Components/Navbar/Navbar';
import Comp3 from '../Components/WorkoutRoutines/WorkoutRoutines';
import Comp4 from '../Components/WorkoutPlans/WorkoutPlans';

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
        backgroundColor={isDarkMode ? 'black' : 'grey'}
      />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <FlatList
        data={[{key: 'comp1'}, {key: 'comp3'}, {key: 'comp4'}, {key: 'comp2'}]}
        keyExtractor={item => item.key}
        renderItem={({item}) => {
          switch (item.key) {
            case 'comp1':
              return (
                <Comp1 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              );
            case 'comp3':
              return (
                <Comp3 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              );
            case 'comp4':
              return (
                <Comp4 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              );
            case 'comp2':
              return (
                <Comp2 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              );
            default:
              return null;
          }
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaProvider>
  );
};

export default MainPage;
