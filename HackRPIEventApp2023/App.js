import CountdownTimer from "./Components/CountdownTimer";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Calander from "./Box/Calander";
import { globalStyles } from './styles';

const Tab = createBottomTabNavigator();

function InfoScreen() {
  return (
    <View style={styles.container}>
      <Calander />
    </View>
    //line 16: StatusBar style ^^ can we customize this while still keeping it general?
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <CountdownTimer />
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
            backgroundColor: globalStyles.primary, // should this be transparent?
            borderTopWidth: 0, // Hide top border of the tab bar
          },
          tabBarActiveTintColor: globalStyles.accent,
          tabBarInactiveTintColor: "white",
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
    backgroundColor: globalStyles.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: globalStyles.fontSize,
    fontWeight: globalStyles.fontWeight,
    color: globalStyles.text,
  },
});
