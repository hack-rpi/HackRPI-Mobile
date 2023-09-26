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
      ]}> //T D: add cmpnets!
      <View style={{flex: 1, styles.backgroundBlack}} /> //fix this!!
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, backgroundColor: 'green'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundBlack: '#191919', //the team can c these and use them
    mainRed: '#910307' ,
    secondaryGray: '#9E9E9E' , //reguar back and white are cnstant anyway
    alignItems: 'center',
    justifyContent: 'center',
  },
});
