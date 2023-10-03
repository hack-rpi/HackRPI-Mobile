import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}> //To Do: add cmpnets!
      <View style={{flex: 1, backgroundColor: styles.backgroundBlack}} /> //fix this!!
      <View style={{flex: 2, backgroundColor: styles.mainRed}} />
      <View style={{flex: 3, backgroundColor: styles.secondaryGray}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
