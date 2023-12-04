import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import Calander from "./Box/Calander";
import Settings from "./SettingsOptions/Settings"
import { createStackNavigator } from '@react-navigation/stack';
import AccessibilitySettingsScreen from "./SettingsOptions/AccessibilitySettings"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function InfoScreen() {
  return (
    <View style={styles.container}>
   <Calander/>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
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

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Feather name="settings" size={24} color="white" />
      <Settings/>
    </View>
  );
}

/**SettingsStackNavigator is a separate function that defines a stack navigator (StackNavigator) 
 * managing screens related to settings (SettingsPage in this case). Within the SettingsScreen component, 
 * the SettingsStackNavigator is included to handle navigation within the Settings tab. */
//NEED TO BE FIXED- Cauisng problems
// function SettingsStackNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Settings"
//         component={SettingsScreen}
//         options={{
//           headerShown: false // If you want to hide the header for this stack
//         }}
//       />
//       {/* Add more screens within this Stack.Navigator if needed */}
//     </Stack.Navigator>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Feather name="settings" size={24} color="black" />
//       <Text><Settings/></Text>
//       {/* Include the SettingsStackNavigator here */}
//       <SettingsStackNavigator />
//     </View>
//   );
// }


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          
          tabBarIcon: ({ focused, color, size }) => {
            //adding icons
            let iconName;
            if (route.name === 'Info') {
              iconName = 'info';
            } else if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Queue') {
              iconName = 'user';
            } else if (route.name == 'Settings'){
              iconName = 'settings';
            }
            return <Feather name={iconName} size={size} color={focused ? 'red' : 'white'} />;
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: '#910307',
          tabBarInactiveTintColor: 'white',
        })}
      >
        <Tab.Screen name="Info" component={InfoScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Queue" component={QueueScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});