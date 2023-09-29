import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Timer from './components/Timer';

const Circle = ({ size, percentage }) => {
  return (
    <View style={[styles.circle, { width: size, height: size }]}>
      <Timer percentage={percentage} circleWidth={size.toString()} />
    </View>
  );
};

export default function App() {
  const [percentage, setPercentage] = useState(35);

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Timer percentage={percentage} circleWidth="200" />
        <Timer percentage={percentage} circleWidth="200" />
        <Timer percentage={percentage} circleWidth="200" />
        <Timer percentage={percentage} circleWidth="200" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items at the start of the container (top of the screen)
    paddingTop: 50, // Add padding to the top of the container to move circles away from the top
  },
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  circle: {
    borderRadius: 50,
    overflow: 'hidden',
  },
});
