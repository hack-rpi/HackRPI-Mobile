import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calander from './Calander/Calander';
import Box from './Box/Box';
import Container  from './Box/Container';

export default function App() {
  return (
    <View style={styles.container}>
      <Box/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
