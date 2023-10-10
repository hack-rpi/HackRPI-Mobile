import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#191919', //the name of this must be background color!!
      mainRed: '#910307' ,
      secondaryGray: '#9E9E9E' , //reguar back and white are cnstant anyway
      alignItems: 'center',
      marginBottom: 49,
    },
    
    floatingBox: {
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
       <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.floatingBox]} ><Text>Input text here about Event 1</Text></View>
        <View style={[styles.floatingBox]} ><Text>Input text here about Event 2</Text></View>
        <View style={[styles.floatingBox]} ><Text>Input text here about Event 3</Text></View>
        <View style={[styles.floatingBox]} ><Text>Input text here about Event 4</Text></View>
        <View style={[styles.floatingBox]} ><Text>Input text here about Event 5</Text></View>
      </ScrollView>
    </View>
  );
}


