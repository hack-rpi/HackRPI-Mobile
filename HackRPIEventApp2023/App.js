import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Calander from "./Box/Calander";
import Food from "./information/Food";
import HackerQue from "./HackerQue/QueEntry.js";
// import { colors } from './colors';
import { globalStyles } from "./styles";

const Tab = createBottomTabNavigator();


import { SafeAreaView, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';
/*
Import this new component into the appropriate screen where you want the
PDF to be displayed. You would add a Tab.Screen for the PDF viewer in your
Tab.Navigator if you want it to be accessible from the tab bar, or you might
integrate it into one of your existing screen
 */
const PDFViewer = ({ uri }) => {
    const source = { uri, cache: true };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Pdf
                source={source}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                style={{ flex: 1, width: Dimensions.get('window').width }}
            />
        </SafeAreaView>
    );
}
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
  circleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  circle: {
    borderRadius: 50,
    overflow: "hidden",
  },
});
