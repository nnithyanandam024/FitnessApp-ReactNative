import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    infocontainer7: {
      flex: 1,
      padding: 20,
      borderRadius: 10,
      margin: 10,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
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
      marginTop: 10,
      fontSize: 20,
      fontWeight: '600',
      backgroundColor: '#4fb50e',
      padding: 5,
      paddingLeft: 20,
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
  
  export default styles;