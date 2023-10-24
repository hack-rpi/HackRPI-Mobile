import React, { useEffect }  from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import Calander from "./Box/Calander";

import messaging from '@react-native-firebase/messaging';

const Tab = createBottomTabNavigator();

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

export default function App() {
  useEffect(() => {
    // Request permissions and get FCM token
    const requestUserPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        const fcmToken = await messaging().getToken();
        console.log('FCM Token:', fcmToken);
        // Send this token to your server to associate with the user
      }
    };

    requestUserPermission();

 // Handle incoming notifications when the app is in foreground
  const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
    console.log('Foreground Notification:', remoteMessage);
    // Handle the notification here (e.g., show an alert, update state)
  });

  // Handle notification tap when the app is in background or quit
  const unsubscribeOnNotificationOpenedApp = messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('Notification Tapped:', remoteMessage);
    // Handle the notification tap here (e.g., navigate to a specific screen)
  });

  // Clean up event listeners when component unmounts
  return () => {
  unsubscribeOnMessage();
  unsubscribeOnNotificationOpenedApp();
  };
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
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