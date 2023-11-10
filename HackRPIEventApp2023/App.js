import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from "expo-status-bar";
import Calander from "./Box/Calander";
import { globalStyles } from './styles';

const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Calander />

      <StatusBar style="auto" />
    </View>
    //line 16: StatusBar style ^^ can we customize this while still keeping it general?
  );
}

function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text>Explore Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function HolderScreen() {
  return (
    <View style={styles.container}>
      <Text>Holder Screen</Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          swipeEnabled : true,
          tabBarStyle: {
            backgroundColor: globalStyles.primary, // should this be transparent?
            borderTopWidth: 0, // Hide top border of the tab bar
          },
          tabBarActiveTintColor: globalStyles.accent,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Holder" component={HolderScreen} options={{ headerShown: false }}s/>
      </Tab.Navigator>
    </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: globalStyles.fontSize,
    fontWeight: globalStyles.fontWeight,
    color: globalStyles.text,
  },
});

