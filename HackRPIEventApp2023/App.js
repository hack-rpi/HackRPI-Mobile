import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from "expo-status-bar";
import Calander from "./Box/Calander";
// import { colors } from './colors';

const Tab = createBottomTabNavigator();

function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text>Explore Screen</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Calander />

      <StatusBar style="auto" />
    </View>
  );
}

function QueueScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Set a semi-transparent black background color
            borderTopWidth: 0, // Hide top border of the tab bar
          },
          tabBarActiveTintColor: '#910307',
        }}
      >
        <Tab.Screen name="Info" component={InfoScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Queue" component={QueueScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

