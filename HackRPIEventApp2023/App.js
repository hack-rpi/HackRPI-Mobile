import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MentorFrontend from './Box/MentorFrontend';
import AnotherPage from './Box/AnotherPage'; // Import the new page

const Stack = createStackNavigator();

export default function App() {
  return (
  
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={MentorFrontend} options={{ headerShown: false }} />
          <Stack.Screen name="AnotherPage" component={AnotherPage} />
        </Stack.Navigator>
      </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
