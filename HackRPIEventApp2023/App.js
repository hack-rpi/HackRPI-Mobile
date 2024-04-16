import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Calander from "./Box/Calander";
import Food from "./information/Food";
import HackerQue from "./HackerQue/QueEntry.js";
import { globalStyles } from "./styles";
import MapInfoPage from "./Map/map.js";

const Tab = createBottomTabNavigator();

function InfoScreen() {
  return (
    <View style={styles.container}>
      {/* <Food/> */}
      <MapInfoPage></MapInfoPage>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Calander />
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

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Info") {
                iconName = "info";
              } else if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Queue") {
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
              backgroundColor: globalStyles.primary,
              borderTopWidth: 0,
            },
            tabBarActiveTintColor: globalStyles.accent,
            tabBarInactiveTintColor: "white",
          })}
        >
          <Tab.Screen
            name="Info"
            component={InfoScreen}
            options={{ headerShown: false }} // Hides the header for this screen
          />
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }} // Hides the header for this screen
          />
          <Tab.Screen
            name="Queue"
            component={QueueScreen}
            options={{ headerShown: false }} // Hides the header for this screen
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.primary,
  },
});
