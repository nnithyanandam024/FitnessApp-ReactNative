import React, { useState } from 'react';
import { View, Text, SectionList, Modal, Pressable, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Comp4 = ({ isDarkMode, setIsDarkMode }) => {
    const [selectedWorkout, setSelectedWorkout] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    
    const press = (workoutName) => {
      setSelectedWorkout(workoutName);
      setModalVisible(true);
    };
    

  const DATA = [
    {
      title: `Today's Plan`,
      data: ['Morning Run', 'Core Workout', 'Evening Stretch'],
      type: ['Cardio', 'Strength', 'Flexibility'],
      start: 'Start'
    },
    {
      title: 'Recommended',
      data: ['HIT Session', 'Upper Body', 'Yoga Flow'],
      type: ['Cardio', 'Strength', 'Flexibility'],
       start: 'Start'
    },
    {
      title: 'Popular',
      data: ['Full Body Workout', '30-Day Challenge', 'Recovery Day'],
       type: ['Strength', 'Agility', 'Relaxation'],
       start: 'Start'
    },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: isDarkMode ? 'black' : 'white'}}>
      <View style={[styles.infocontainer7, { backgroundColor: isDarkMode ? 'grey' : 'white' }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Text style={{ fontSize: 25, color: isDarkMode ? 'white' : 'black', fontWeight: 'bold' }}>
            Workout Plans
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Your workout plan has been added successfully!')}>
            <Text style={styles.buttonText}>Add +</Text>
          </TouchableOpacity>
        </View>

      
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item,index,section }) => (
           
              <View style={[styles.item , {backgroundColor: isDarkMode ? 'grey':'white'}]}>
                <View style={{ flexDirection: 'column' }}>
                <Text style={[styles.itemText , {color: isDarkMode ? 'white':'black'}]}>{item}</Text>
                <Text style={[styles.typeText ,{color: isDarkMode ? 'white':'black'}]}>{section.type[index]}</Text> 
                </View>
                <TouchableOpacity onPress={() => press(item)}>
  <Text style={styles.startText}>{section.start}</Text>
</TouchableOpacity>
              </View>
           
          )}
          renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text> }
          contentContainerStyle={{ paddingBottom: 0 }}
          
        />

        {/* Modal */}
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Start Workout</Text>
              <Text style={{ marginBottom: 10 }}>Are you ready to begin your <Text style={{color:'black',fontWeight:'bold'}}>{selectedWorkout}</Text></Text>
              <View style={{ flexDirection: 'row',justifyContent:'space-between'}}>
              <Pressable style={styles.modalButtonCancel} onPress={() => setModalVisible(false)}>
                <Text style={{ color: 'black', textAlign: 'center',fontWeight:'800' }}>Cancel</Text>
              </Pressable>
              <Pressable style={styles.modalButton} onPress={() => setModalVisible(false)}>
                <Text style={{ color: 'white', textAlign: 'center',fontWeight:'800' }}>Begin</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  infocontainer7: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    margin: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    
  },
  button: {
    backgroundColor: '#4fb54e',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 0,
    borderRadius: 5,
    elevation: 1,
  },
  itemText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 700,
  },

  typeText: {
    fontSize: 14,
    color: 'gray',
    
  },
  
 startText: {
        fontSize: 16,
        color: '#4fb54e',
        fontWeight: 'bold',
        marginTop: 10,
    },
  header: {
    marginTop:10,
    fontSize: 20,
    fontWeight:'600',
    backgroundColor: '#4fb50e',
    padding: 5,
    paddingLeft:20,
    color: 'white',
    borderRadius: 15,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 30,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
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
});

export default Comp4;
