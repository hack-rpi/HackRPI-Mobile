import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Calander from "./Box/Calander";
import Food from "./information/Food";
// import { colors } from './colors';
import { globalStyles } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import InfoButton from "./Components/InfoButton";
//import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import InfoButtonFinal from "./Components/InfoButtonFinal";

const Tab = createBottomTabNavigator();

function InfoScreen() {
  return (
    <View>
      <InfoButton circleColor="#EF3B41" text="MAP" icon = {faMap} func = {expandSection}/>
      <InfoButton circleColor="#F8A13A" text="FOOD" icon = {faUtensils} func = {expandSection}/>
      <InfoButtonFinal circleColor="#F8A13A" text="Food" icon = {faUtensils} func = {expandSection}/>
    </View>
  );
}

// max testing
function expandSection() {
  console.log("cool beans");
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
        })}>
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
  info: { // max testing
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "flex-start",
    justifyContent: "left",
    
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 20,
    marginLeft: 30,
  },
  subtitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 50,
  },
});
