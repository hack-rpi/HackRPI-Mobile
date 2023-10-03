import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
    },
    
  });
  
  return (
    <View style={[styles.container]}>
      <View style={{flex: 0.25, backgroundColor: '#9E9E9E', flexDirection: 'row'}} ><Text>Hi</Text></View>
      <View style={{flex: 0.25, backgroundColor: styles.container.mainRed}} ></View>
      <View style={{flex: 0.25, backgroundColor: styles.secondaryGray}} ></View>
    </View>
  );
}


