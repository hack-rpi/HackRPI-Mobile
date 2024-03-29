import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Calander from "./Box/Calander";
import Food from "./information/Food";
import HackerQue from "./HackerQue/QueEntry.js";
import { globalStyles } from "./styles";
import Login from "./Login/Login";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
      <HackerQue />
    </View>
  );
}

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Info" component={InfoScreen} />
            <Stack.Screen name="Queue" component={QueueScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>

      {loggedIn && (
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
          <Tab.Screen name="Info" component={InfoScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Queue" component={QueueScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
