import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
//import Calander from "./Box/Calander";
import Food from "./information/Food";
import QueuedStudent from "./HackerQue/QueuedStudent";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import { globalStyles } from "./styles";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Info") {
          iconName = "info";
        } else if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Queue") {
          iconName = "user";
        }
        return <Feather name={iconName} size={size} color={focused ? "red" : "white"} />;
      },
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: globalStyles.primary, borderTopWidth: 0 },
      tabBarActiveTintColor: globalStyles.accent,
      tabBarInactiveTintColor: "white",
    })}>
      <Tab.Screen name="Info" component={InfoScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Queue" component={QueuedStudent} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.primary,
  },
});

function InfoScreen() {
  return (
    <View style={styles.container}>
      <Food />
    </View>
  );
}

