/*import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import Calander from "./Box/Calander";

const Tab = createBottomTabNavigator();

function InfoScreen() {
  return (
    <View style={styles.container}>
   <Calander/>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
    <Feather name="user" size={24} color="white" />
      <Text style={styles.text}>No one home gotcha! haha</Text>
    </View>
  );
}

function QueueScreen() {
  return (
    <View style={styles.container}>
      <Feather name="user" size={24} color="white" />
      <Text style={styles.text}>Put something useful lol</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            //adding icons
            let iconName;
            if (route.name === 'Info') {
              iconName = 'info';
            } else if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Queue') {
              iconName = 'user';
            }
            return <Feather name={iconName} size={size} color={focused ? 'red' : 'white'} />;
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: '#910307',
          tabBarInactiveTintColor: 'white',
        })}
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
  text: {
    color: 'white',
  },
});
*/
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import Calander from "./Box/Calander";

// Create a material top tab navigator
const Tab = createMaterialTopTabNavigator();

// Screen component for the 'Info' tab
function InfoScreen() {
  return (
    <View style={styles.container}>
      {/* Render the 'Calander' component for displaying event information */}
      <Calander />
    </View>
  );
}

// Screen component for the 'Home' tab
function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Render a Feather icon and a text message */}
      <Feather name="user" size={24} color="white" />
      <Text style={styles.text}>No one home gotcha! haha</Text>
    </View>
  );
}

// Screen component for the 'Queue' tab
function QueueScreen() {
  return (
    <View style={styles.container}>
      {/* Render a Feather icon and a text message */}
      <Feather name="user" size={24} color="white" />
      <Text style={styles.text}>Put something useful lol</Text>
    </View>
  );
}

// Main component representing the entire app
export default function App() {
  return (
    <NavigationContainer>
      {/* Create a top tab navigator with custom styling */}
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: 'rgba(0, 0, 0, 0.5)', borderTopWidth: 0 },
          activeTintColor: '#910307',
          inactiveTintColor: 'white',
        }}
        swipeEnabled
      >
        {/* Define the 'Info' tab */}
        <Tab.Screen name="Info" component={InfoScreen} />
        {/* Define the 'Home' tab */}
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* Define the 'Queue' tab */}
        <Tab.Screen name="Queue" component={QueueScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Stylesheet for styling the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
