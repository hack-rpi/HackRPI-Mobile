import React from 'react';
import { View, StyleSheet } from 'react-native';
import RectangleInfo from './RectangleInfo';

const Box = () => {
  return (
    <View style={styles.container}>
      <RectangleInfo title="Rectangle 1" description="This is the first rectangle." />
      <RectangleInfo title="Rectangle 2" description="This is the second rectangle." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default Box;