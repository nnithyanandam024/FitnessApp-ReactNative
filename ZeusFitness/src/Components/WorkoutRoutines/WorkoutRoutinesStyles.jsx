import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
      shadowOffset: {width: 0, height: 2},
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
  });

export default styles;  