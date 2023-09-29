import React from 'react';
import { View, ScrollView,StyleSheet } from 'react-native';
import RectangleInfo from './RectangleInfo';

const Box = () => {
  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.container}  
      //showsVerticalScrollIndicator={true}
      pagingEnabled={true} // Enable paging
      snapToInterval={150} // Set the interval to the height of a single rectangle
      >
     
      <RectangleInfo title="Rectangle 1" description="This is the first rectangle." />
      
      <RectangleInfo title="Rectangle 2" description="This is the second rectangle." />
      <RectangleInfo title="Rectangle 3" description="This is the second rectangle." />
      <RectangleInfo title="Rectangle 4" description="This is the second rectangle." />
      <RectangleInfo title="Rectangle 5" description="This is the second rectangle." />
      <RectangleInfo title="Rectangle 6" description="This is the second rectangle." />
      <RectangleInfo title="Rectangle 7" description="This is the second rectangle." />
      
    </ScrollView>
  </View>
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