import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Calander from "./Box/Calander";
import Food from "./information/Food";
import HackerQue from "./HackerQue/QueEntry.js";
import { globalStyles } from "./styles";
import Login from "./Login/Login";

const Tab = createBottomTabNavigator();

function InfoScreen() {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Food />
      <Button title="Login" onPress={goToLogin} />
      <StatusBar style="auto" />
    </View>
  );
}

function HomeScreen({ navigation }) {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Calander />
      <Button title="Login" onPress={goToLogin} />
      <StatusBar style="auto" />
    </View>
  );
}

function QueueScreen() {
  const goToLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <HackerQue />
      <Button title="Login" onPress={goToLogin} />
      <StatusBar style="auto" />
    </View>
  );
}

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
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
            else if (route.name === "Login") {
              iconName = "log-in";
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
        <Tab.Screen name="Queue" component={QueueScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
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
