import React from 'react';
import {Alert, FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import styles from './ProgressStyles'; 


const Comp1 = ({isDarkMode, setIsDarkMode}) => {
  const handlePress = () => {
    Alert.alert('Analysis', 'Your sleep has improved by 10%');
  };
  return (
    <SafeAreaView style={{backgroundColor: isDarkMode ? 'black' : 'white'}}>
      <View
        style={[
          styles.infocontainer,
          {backgroundColor: isDarkMode ? 'grey' : '#4fb54e'},
        ]}>
        <Text style={[styles.header, {color: isDarkMode ? 'white' : 'black'}]}>
          Today's Progress
        </Text>
        <View style={styles.statsContainer}>
          <View
            style={[
              styles.stat,
              {
                borderRightWidth: 1,
                borderRightColor: isDarkMode ? 'white' : 'black',
              },
            ]}>
            <Text
              style={[styles.value, {color: isDarkMode ? 'white' : 'black'}]}>
              3/5
            </Text>
            <Text
              style={[styles.label, {color: isDarkMode ? 'white' : 'black'}]}>
              Workouts
            </Text>
          </View>
          <View
            style={[
              styles.stat,
              {
                borderRightWidth: 1,
                borderRightColor: isDarkMode ? 'white' : 'black',
              },
            ]}>
            <Text
              style={[styles.value, {color: isDarkMode ? 'white' : 'black'}]}>
              750
            </Text>
            <Text
              style={[styles.label, {color: isDarkMode ? 'white' : 'black'}]}>
              Calories
            </Text>
          </View>
          <View style={styles.stat}>
            <Text
              style={[styles.value, {color: isDarkMode ? 'white' : 'black'}]}>
              62 min
            </Text>
            <Text
              style={[styles.label, {color: isDarkMode ? 'white' : 'black'}]}>
              Active Time
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.infocontainer1,
          {backgroundColor: isDarkMode ? 'grey' : 'white'},
        ]}>
        <Text style={[styles.header, {color: isDarkMode ? 'white' : 'black'}]}>
          Weekly Progress
        </Text>
        <FlatList
          keyExtractor={item => item.id}
          horizontal={true}
          data={[
            {id: '1', day: 'Mon', color: '#4fb54e'},
            {id: '2', day: 'Tue', color: '#4fb54e'},
            {id: '3', day: 'Wed', color: '#4fb54e'},
            {id: '4', day: 'Thu', color: '#e1e1e1'},
            {id: '5', day: 'Fri', color: '#e1e1e1'},
            {id: '6', day: 'Sat', color: '#e1e1e1'},
            {id: '7', day: 'Sun', color: '#e1e1e1'},
          ]}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                margin: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 30,
                  height: 40,
                  borderRadius: 50,
                  backgroundColor: item.color,
                }}></View>
              <Text
                style={{
                  color: isDarkMode ? 'white' : 'black',
                  fontWeight: '300',
                  fontSize: 17,
                  marginTop: 10,
                }}>
                {item.day}
              </Text>
            </View>
          )}
        />
      </View>
      <View
        style={[
          styles.infocontainer2,
          {backgroundColor: isDarkMode ? 'grey' : 'white'},
        ]}>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text style={{fontSize: 50,fontWeight:'bold', color: isDarkMode ? 'white' : 'black'}}>
            95
          </Text>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'grey'}}>
            Sleep Score
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            right: 20,
            position: 'absolute',
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=100&id=59841&format=png',
              }}
              style={{
                width: 25,
                height: 25,
                tintColor: isDarkMode ? 'white' : 'black',
                marginRight: 10,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                color: isDarkMode ? 'white' : 'black',
                fontWeight: '600',
                paddingBottom: 10,
              }}>
              11:31 PM
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=100&id=9&format=png',
              }}
              style={{
                width: 25,
                height: 25,
                marginRight: 10,
                tintColor: isDarkMode ? 'white' : 'black',
              }}
            />

            <Text
              style={{
                fontSize: 20,
                color: isDarkMode ? 'white' : 'black',
                fontWeight: '600',
                paddingBottom: 10,
              }}>
              7:00 AM
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=100&id=g6BvEKlEDj00&format=png',
              }}
              style={{
                width: 25,
                height: 25,
                marginRight: 10,
                tintColor: isDarkMode ? 'white' : 'black',
              }}
            />
            <Text
              style={{
                fontSize: 20,
                color: isDarkMode ? 'white' : 'black',
                fontWeight: '600',
              }}>
              9 h 14 m
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.infocontainer3,
          {backgroundColor: isDarkMode ? 'grey' : 'white'},
        ]}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Image
            source={{
              uri: 'https://www.crunchyroll.com/build/assets/img/home/yuzu@2x.png',
            }}
            style={{width: 128, height: 48, marginLeft: 0}}
          />
          <Text
            style={{
              fontSize: 15,
              marginLeft: 10,
              padding: 10,
              color: isDarkMode ? 'white' : 'black',
            }}>
            See how your sleep has changed.{'\n'}
            <Text
              style={{
                color: isDarkMode ? 'white' : 'black',
                fontWeight: 'bold',
              }}
              onPress={handlePress}>
              View analysis
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Comp1;
