import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
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
        // tabBarOption={{
        //   style: {
        //     //borderTopWidth: 0, // Remove the top border (gray line) of the tab bar
        //     backgroundColor: '#191919', // Set the background color of the tab bar to black
        //   },
        // }}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'Transparent', // Set the background color of the navigation container to black
            //tabBarActiveTintColor: 'red', // Set the active tab icon color to red
          
          },
          tabBarInactiveTintColor: '#910307',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Holder" component={HolderScreen} />
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

//colors of the app
//the gray line

//910307

