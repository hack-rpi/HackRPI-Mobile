import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import EventObject from "./EventObject"; // Import the EventObject component
import { useEffect, useRef} from 'react';
import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// Can use this function below or use Expo's Push Notification Tool from: https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token.data;
}


//reusable component that ties an event object to it's notification bell
const CalanderObject = ({
  workshop_Title,
  Time,
  Location,
  Presenter,
  Description,
  isRed,
    notiTime
}) => {
  const [isActive, setIsActive] = useState(false); // Define isActive state
  const [expoPushToken, setExpoPushToken] = useState('');
  const notificationListener = useRef();
  const responseListener = useRef();

  const handleClick =async() => {
    setIsActive(!isActive);
    console.log("token" + expoPushToken);
    const currentTime = new Date().getTime();
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Workshop Reminder',
        body: 'Your workshop  is starting now!',
      },
      trigger: {
        seconds: 10, // Delay the notification by 10 second
      },
    });
  };

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View style={styles.container}>
      <EventObject
        workshop_title={workshop_Title}
        time={Time}
        location={Location}
        presenter={Presenter}
        description={Description}
        isRed={isRed} //this line is use for hardcode
        //isRed={checkCondition()} -> This line will be use instead if we implement checkCondition() function
      />
      <View
        style={styles.notifBox}
        backgroundColor={isRed ? "black" : isActive ? "black" : "white"}
        borderColor={isRed ? "red" : "white"}>
        <Feather
          name={isActive ? "bell-off" : "bell"}
          size={30}
          color={isRed ? "red" : isActive ? "white" : "black"}
          onPress={handleClick}
          zIndex={2}
          // Add onPress to handle click
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Arrange children horizontally
    alignItems: "center", // Center children vertically
    backgroundColor: "transparent", // Replace with your desired background color
    padding: 10,
    borderRadius: 10,
    marginBottom: 0,
  },
  notifBox: {
    width: 60,
    height: 150,
    borderWidth: 3,
    borderRadius: 20,
    padding: 10,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    zIndex: 1,
  },
});

export default CalanderObject;