import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Comp2 = ({isDarkMode,setIsDarkMode}) => {
    const upFeedback = () => {
        Alert.alert('Feedback', 'Thank you for your feedback!');
    };

    const downFeedback = () => {
        Alert.alert('Feedback', 'Thank you for your feedback!We will try to improve our services');
    };

    return (
        <SafeAreaView style={{backgroundColor:isDarkMode ? "black" : "white"}}>
            <View style={[styles.infocontainer4, {backgroundColor: isDarkMode ? 'grey' : 'white'}]}>
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text style={{ fontSize: 17, color:isDarkMode?"white":"black", fontWeight: 'bold' }}>
                        Workout Routine Importance
                    </Text>
                    <Text style={{ fontSize: 13, color: isDarkMode ? 'white' : 'grey', marginTop: 10 }}>
                        Use features to efficiently perform various workouts!
                    </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                    <Image 
                        source={{ uri: 'https://img.icons8.com/?size=100&id=U5qMxkcqVzNs&format=png&color=000000' }} 
                        style={{ width: 75, height: 75, marginLeft: 10 }} 
                    />
                </View>
            </View>
            
            <View style={[styles.infocontainer5, {backgroundColor: isDarkMode ? 'grey' : 'white'}]}>
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text style={{ fontSize: 17, color: isDarkMode?"white":"green", fontWeight: 'bold', width: 320 }}>
                        Find out about key habits for maintaining good health and wellbeing.
                    </Text> 
                    <Text>________________________________________________</Text>
                    <Text style={{ fontSize: 15, color: isDarkMode?"white":"grey", marginTop: 10 }}>
                        Is this useful?
                    </Text>
                </View>
                
                <View style={{ position: 'absolute', right: 10, bottom: 25, display: 'flex', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={upFeedback}>
                        <Image 
                            source={{ uri: 'https://img.icons8.com/?size=100&id=2744&format=png&color=008000' }} 
                            style={{ width: 25, height: 25, marginRight: 10 ,tintColor: 'green'}} 
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={downFeedback}>
                        <Image 
                            source={{ uri: 'https://img.icons8.com/?size=100&id=2913&format=png&color=FF0000' }} 
                            style={{ width: 25, height: 25 }} 
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = {
    infocontainer4: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
    infocontainer5: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
};

export default Comp2;
