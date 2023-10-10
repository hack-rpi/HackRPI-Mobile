import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { colors } from './colors';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: colors.backgroundBlack,
      alignItems: 'center',
    },
    
    floatingBox: {
      //flex: 1,
      //flexDirection: 'column'
      //^^ no bc then the floatingBox requires text inside of it and changes to fit the text width

      width: '80%',
      height: '15%',
      justifyContent: 'center',
      backgroundColor: colors.mainGray, //the name of this must be background color!!
      alignItems: 'center',
      margin: 15,
      borderRadius: 10
    },

    notifBox: {
      //flex: 1,
      //flexDirection: 'column'
      //^^ no bc then the floatingBox requires text inside of it and changes to fit the text width

      width: '80%',
      height: '15%',
      justifyContent: 'center',
      backgroundColor: '#9E9E9E', //the name of this must be background color!!
      alignItems: 'center',
      margin: 15,
      borderRadius: 10
    },

    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
    },

  });
  
  return (
    <View style={[styles.container]}>
    //CONTENT GOES HERE
    //calendar ppl, do ur thing
    </View>
  );
}


