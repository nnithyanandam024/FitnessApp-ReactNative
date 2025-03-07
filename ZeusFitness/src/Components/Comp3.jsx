import React, { useState } from 'react';
import { View, Text, FlatList, Modal, Pressable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Comp3 = ({isDarkMode,setIsDarkMode}) => {
  const [Modalvisible, setModalvisible] = useState(false);

  const press = () => {
    setModalvisible(true);
  };

  return (
    <SafeAreaView style={ { backgroundColor: isDarkMode ? "black" : "white" }}>
      <View style={[styles.infocontainer6, {backgroundColor: isDarkMode ? 'grey' : 'white'}]}>
      <Text style={{ fontSize: 25, color: isDarkMode?"white":"black", fontWeight: 'bold' }}>
        Workout Routines
      </Text>

      <Modal animationType="fade" transparent={true} visible={Modalvisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Start Workout</Text>
            <Text style={{ marginBottom: 10 }}>Are you ready to begin your Workout</Text>
            <View style={{ flexDirection: 'row',justifyContent:'space-between'}}>
             <Pressable style={styles.modalButtonCancel} onPress={() => setModalvisible(false)}>
                            <Text style={{ color: 'black', textAlign: 'center',fontWeight:'800' }}>Cancel</Text>
                          </Pressable>
           <Pressable style={styles.modalButton} onPress={() => setModalvisible(false)}>
                          <Text style={{ color: 'white', textAlign: 'center',fontWeight:'800' }}>Begin</Text>
                        </Pressable>
                        </View>        
          </View>
        </View>
      </Modal>

      <FlatList
        keyExtractor={(item) => item.key}
        horizontal={true}
        data={[
          {
            key: 'Morning Run',
            color: '#ff8c00',
            work: 'Cardio',
            time: '30 min',
            calories: '320 cal',
          },
          {
            key: 'Upper Body Workout',
            color: '#4e6fb5',
            work: 'Strength',
            time: '40 min',
            calories: '400 cal',
          },
          {
            key: 'Lower Body Workout',
            color: '#2c8358',
            work: 'Strength',
            time: '40 min',
            calories: '200 cal',
          },
          {
            key: 'Yoga Session',
            color: '#f54e8c',
            work: 'Flexibility',
            time: '20 min',
            calories: '50 cal',
          },
          {
            key: 'Cycling',
            color: '#ed3417',
            work: 'Cardio',
            time: '30 min',
            calories: '400 cal',
          },
          {
            key: 'Agility Training',
            color: '#d1d1d1',
            work: 'Endurance',
            time: '25 min',
            calories: '340 cal',
          },
        ]}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={press}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 230,
                height: 180,
                borderRadius: 10,
                margin: 10,
                elevation: 0,
                backgroundColor: item.color,
                borderWidth: 0
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: isDarkMode ? "white" : "black",
                    fontWeight: 'bold',
                    marginTop: 10,
                    marginLeft: 20,
                  }}
                >
                  {item.key}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: isDarkMode ? "white" : "black",
                    marginLeft: 20,
                  }}
                >
                  {item.work}
                </Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', marginTop: 80 }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: isDarkMode ? "white" : "black",
                    marginLeft: 20,
                    fontWeight: 'bold',
                  }}
                >
                  {item.time}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: isDarkMode ? "white" : "black",
                    marginLeft: 90,
                    fontWeight: 'bold',
                  }}
                >
                  {item.calories}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  infocontainer6: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  modalOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 20,
    width: 300,
    alignItems: 'center',
  },
  modalTitle: {
    color: 'black',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButtonCancel: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 10,
    width: 100,
    alignItems: 'center',
},
modalButton: {
backgroundColor: '#4fb54e',
padding: 10,
borderRadius: 5,
marginTop: 10,
marginLeft: 10,
width: 100,
alignItems: 'center',
},
};

export default Comp3;
