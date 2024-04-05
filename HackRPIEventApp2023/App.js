import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
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
import { faUtensils, faQuestion, faDollarSign, faBook, faMap } from "@fortawesome/free-solid-svg-icons";
import InfoButtonFinal from "./Components/InfoButtonFinal";

const Tab = createBottomTabNavigator();

// other variation
/*function InfoScreenTEST() {
  return (
    <View style={styles.info}>
      <View style={styles.buttonGrid}>
        <View style={styles.buttonRow}>
          <InfoButtonFinal circleColor="#EF3B41" text="Food" icon = {faUtensils} func = {expandSection}/>
          <InfoButtonFinal circleColor="#F8A13A" text="Map" icon = {faMap} func = {expandSection}/>
        </View>
        <View style={styles.buttonRow}>
          <InfoButtonFinal circleColor="#05A55C" text="FAQ" icon = {faQuestion} func = {expandSection}/>
          <InfoButtonFinal circleColor="#0158A9" text="Sponsors" icon = {faDollarSign} func = {expandSection}/>
        </View>
        <View style={styles.buttonRow}>
          <InfoButtonFinal circleColor="#B43D96" text="Hacker Handbook" icon = {faBook} func = {expandSection}/>
        </View>
      </View>
    </View>
  );
}*/

// change spacing/contents
function InfoScreen() {
  return (
    <View style={styles.info}>
      <View flex={20} style={styles.titleBlock}>
        <Text style={styles.title}>Info</Text>
      </View>
      <View flex={5}></View>
      <View flexDirection="row" flex={75}>
        <View style={styles.imageSpot} flex={20}>
          <Image source={require("./assets/favicon.png")}/>
        </View>
        <View style={styles.buttonGrid} flex={80}>
            <InfoButton circleColor="#EF3B41" text="Food" icon = {faUtensils} func = {expandSection}/>
            <InfoButton circleColor="#EF3B41" text="Food" icon = {faUtensils} func = {expandSection}/>
            <InfoButton circleColor="#EF3B41" text="Food" icon = {faUtensils} func = {expandSection}/>
            <InfoButton circleColor="#EF3B41" text="Food" icon = {faUtensils} func = {expandSection}/>
            <InfoButton circleColor="#EF3B41" text="Food" icon = {faUtensils} func = {expandSection}/>
      </View>
      </View>
    </View>
  );
}

// this will navigate to different screens
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
  info: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  buttonGrid: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 24,
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
  titleBlock: {
    width: "100%",
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

// BORDERS TO DEBUG COMPONENT PLACEMENT
//borderColor: "#fcfdfb",
//borderWidth: 2,
