import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{}from 'firebase/firestore';
import{} from ' firebase/app'
import{} from 'firebase/auth'
import{} from 'firebase/analytics'
import LoginButton from "./components/login"
import LogoutButton from "./components/signout"
export default function App() {
  return (
    <View style={styles.container}>
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
