import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Calander from "./Box/Calander";
import { globalStyles } from "./styles";
import InfoButtonWrapper from "./Components/InfoButtonWrapper";
import { faQuestion, faDollarSign, faBook, faMap, faUtensils } from "@fortawesome/free-solid-svg-icons";
import FoodPage from "./information/FoodPage";

const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get('window');

function InfoScreen() {
  // Define expandSection function within InfoScreen component
  const expandSection = () => {
    console.log("cool beans");
  };

  return (
    <View style={styles.info}>
      <View flex={20} style={styles.titleBlock}>
        <Text style={styles.title}>Info</Text>
      </View>
      <View flex={5} flexDirection={"row"}>
        <View flex={1} style={styles.borderline}></View>
        <View flex={4}></View>
      </View>
      <View flexDirection="row" flex={75}>
        <View style={styles.buttonGrid} flex={1}>
          <InfoButtonWrapper circleColor="#EF3B41" text="Food" icon={faUtensils} onPress={() => expandSection()} />
          <InfoButtonWrapper circleColor="#F8A13A" text="Maps" icon={faMap} onPress={() => expandSection()} />
          <InfoButtonWrapper circleColor="#05A55C" text="FAQ" icon={faQuestion} onPress={() => expandSection()} />
          <InfoButtonWrapper circleColor="#0158A9" text="Sponsors" icon={faDollarSign} onPress={() => expandSection()} />
          <InfoButtonWrapper circleColor="#B43D96" text="Hacker Handbook" icon={faBook} onPress={() => expandSection()} />
        </View>
      </View>
    </View>
  );
}

function Food() {
  return (
    <View style={styles.container}>
      <FoodPage />
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
        <Tab.Screen name="Food" component={Food} />
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
    gap: 0,
  },
  titleBlock: {
    width: "100%",
  },
  title: {
    fontSize: width * .15,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: height * .05,
    marginLeft: width * 0.1,
  },
  subtitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 50,
  },
  row: {
    flexDirection: "row",
  },
  line: {
    backgroundColor: "#74B7EF",
    alignItems: "center",
    justifyContent: "center",
    height: "120%",
  },
  stop: {
    width: width * 0.07,
    height: width * 0.07,
    borderRadius: width * 0.07,
    backgroundColor: "#74B7EF",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    width: width * 0.04,
    height: width * 0.04,
    borderRadius: width * 0.04,
    backgroundColor: "#25303C",
  },
  bordertest: {
    borderColor: "#fcfdfb",
    borderWidth: 2,
  },
  borderline: {
    borderTopWidth: width * 0.025,
    borderColor: "#74B7EF",
    transform: [{ rotate: '45deg' }, { translateY: width * 0.052 }, { translateX: -width * 0.053 }],
  }
});
