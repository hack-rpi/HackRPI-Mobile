import { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';

export default function App() {
  const [percentage, setPercentage] = useState(35);
  // Any constants are from tutorial; will be changed to dynamic later
  return (
    <View style={styles.container}>
      <Timer percenatage={percentage} circleWidth="200" />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
