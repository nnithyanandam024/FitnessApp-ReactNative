import React, {useState} from 'react';
import {
  View,
  Text,
  SectionList,
  Modal,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './WorkoutPlansStyles';

const Comp4 = ({isDarkMode, setIsDarkMode}) => {
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const press = workoutName => {
    setSelectedWorkout(workoutName);
    setModalVisible(true);
  };

  const DATA = [
    {
      title: `Today's Plan`,
      data: ['Morning Run', 'Core Workout', 'Evening Stretch'],
      type: ['Cardio', 'Strength', 'Flexibility'],
      start: 'Start',
    },
    {
      title: 'Recommended',
      data: ['HIT Session', 'Upper Body', 'Yoga Flow'],
      type: ['Cardio', 'Strength', 'Flexibility'],
      start: 'Start',
    },
    {
      title: 'Popular',
      data: ['Full Body Workout', '30-Day Challenge', 'Recovery Day'],
      type: ['Strength', 'Agility', 'Relaxation'],
      start: 'Start',
    },
  ];

  return (
    <SafeAreaView style={{backgroundColor: isDarkMode ? 'black' : 'white'}}>
      <View
        style={[
          styles.infocontainer7,
          {backgroundColor: isDarkMode ? 'grey' : 'white'},
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 25,
              color: isDarkMode ? 'white' : 'black',
              fontWeight: 'bold',
            }}>
            Workout Plans
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Alert.alert('Your workout plan has been added successfully!')
            }>
            <Text style={styles.buttonText}>Add +</Text>
          </TouchableOpacity>
        </View>

        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index, section}) => (
            <View
              style={[
                styles.item,
                {backgroundColor: isDarkMode ? 'grey' : 'white'},
              ]}>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={[
                    styles.itemText,
                    {color: isDarkMode ? 'white' : 'black'},
                  ]}>
                  {item}
                </Text>
                <Text
                  style={[
                    styles.typeText,
                    {color: isDarkMode ? 'white' : 'black'},
                  ]}>
                  {section.type[index]}
                </Text>
              </View>
              <TouchableOpacity onPress={() => press(item)}>
                <Text style={styles.startText}>{section.start}</Text>
              </TouchableOpacity>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
          contentContainerStyle={{paddingBottom: 0}}
        />

        {/* Modal */}
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Start Workout</Text>
              <Text style={{marginBottom: 10}}>
                Are you ready to begin your{' '}
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  {selectedWorkout}
                </Text>
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Pressable
                  style={styles.modalButtonCancel}
                  onPress={() => setModalVisible(false)}>
                  <Text
                    style={{
                      color: 'black',
                      textAlign: 'center',
                      fontWeight: '800',
                    }}>
                    Cancel
                  </Text>
                </Pressable>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => setModalVisible(false)}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontWeight: '800',
                    }}>
                    Begin
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};


export default Comp4;
