import React from 'react';
import { View, StyleSheet } from 'react-native';

const UnravelingCircle = ({ size, borderWidth }) => {
  const circleStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: borderWidth,
  };

  return <View style={[styles.circle, circleStyle]} />;
};

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UnravelingCircle; 