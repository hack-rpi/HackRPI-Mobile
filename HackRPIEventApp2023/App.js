import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Calander from "./Box/Calander";
import Food from "./information/Food";
import HackerQue from "./HackerQue/QueEntry.js";
import MentorQue from "./MentorQue/MentorQue";
import PopupHackerQueue from "./HackerQue/PopupHackerQueue"; // wasn't working over here but saw it was causing problems, hope doesnt break anything?
// import { colors } from './colors';
import { globalStyles } from "./styles";

const Tab = createBottomTabNavigator();

function InfoScreen() {
  return (
    <View style={styles.container}>
      <Food />
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
        <HackerQue></HackerQue>
    </View>
  );
}

const InfoStack = createStackNavigator();
function InfoStackNavigator() {
  return (
    <InfoStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#25303C',
        height: 110, // Adjust header height
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop:0,
        marginLeft: 10,
      },
      headerShadowVisible: false, 
    }}>
      <InfoStack.Screen name="Info" component={InfoScreen} />
    </InfoStack.Navigator>
  );
}

const HomeStack = createStackNavigator();
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#25303C',
        height: 110, // Adjust header height
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop:0,
        marginLeft: 10,
      },
      headerShadowVisible: false, 
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const QueueStack = createStackNavigator();
function QueueStackNavigator() {
  return (
    <QueueStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#25303C',
        height: 110, // Adjust header height
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop:0,
        marginLeft: 10,
      },
      headerShadowVisible: false, 
    }}>
      <QueueStack.Screen name="Mentor Queue" component={QueueScreen} />
    </QueueStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            //adding icons
            let iconName;
            if (route.name === "InfoScreen") {
              iconName = "info";
            } else if (route.name === "HomeScreen") {
              iconName = "home";
            } else if (route.name === "QueueScreen") {
              iconName = "user";
            }
            return (
              <Feather
                name={iconName}
                size={size}
                color={focused ? "red" : "white"}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            backgroundColor: globalStyles.primary, // should this be transparent?
            borderTopWidth: 0, // Hide top border of the tab bar
          },
          tabBarActiveTintColor: globalStyles.accent,
          tabBarInactiveTintColor: "white",
        })}>
        <Tab.Screen name="InfoScreen" component={InfoStackNavigator} options={{ headerShown: false }} />
        <Tab.Screen name="HomeScreen" component={HomeStackNavigator} options={{ headerShown: false }} />
        <Tab.Screen name="QueueScreen" component={QueueStackNavigator} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.primary,
  },
});

