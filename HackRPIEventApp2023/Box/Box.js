import React from 'react';
import {SafeAreaView, ScrollView,StyleSheet } from 'react-native';
import RectangleInfo from './RectangleInfo';

const Box = () => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.ScrollView}  
      //showsVerticalScrollIndicator={true}
      //pagingEnabled={true} // Enable paging
      //snapToInterval={150} // Set the interval to the height of a single rectangle
      >
     
      <RectangleInfo workshop_title="Workshop_title" time="Time Unknon" 
      location="Location Unknon" description="This is not important at all." />
      <RectangleInfo workshop_title="Workshop_title" time="Time Unknon" 
      location="Location Unknon" description="This is not important at all." />
      <RectangleInfo workshop_title="Workshop_title" time="Time Unknon" 
      location="Location Unknon" description="This is not important at all." />
      <RectangleInfo workshop_title="Workshop_title" time="Time Unknon" 
      location="Location Unknon" description="This is not important at all." />
      <RectangleInfo workshop_title="Workshop_title" time="Time Unknon" 
      location="Location Unknon" description="This is not important at all." />
      <RectangleInfo workshop_title="Workshop_title" time="Time Unknon" 
      location="Location Unknon" description="This is not important at all." />
      
    </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //paddingTop: 0,
    //paddingBottom: 200,
    marginTop: 40,
    marginBottom: 40,
    
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    padding: 16,
  },
});

export default Box;