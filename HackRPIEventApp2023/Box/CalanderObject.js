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


const CalanderObject = ({
  workshop_Title,
  Time,
  Location,
  Presenter,
  Description,
  isRed,
  dateAndTime,
}) => {
  const [isActive, setIsActive] = useState(false); // Define isActive state
  const [expoPushToken, setExpoPushToken] = useState('');
  const notificationListener = useRef();
  const responseListener = useRef();

  const [notificationId, setNotificationId] = useState(null); // record the scheduled notification id

  // Function to toggle the isActive state
  const handleClick =async() => {
    setIsActive(!isActive);

  };

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    // parsing the dateAndTime String
    const notiTime = dateAndTime;
    const [dateString, timeString] = notiTime.split(' ');
    const [year, month, day] = dateString.split('-');
    const [hours, minutes] = timeString.split(':');

    const eventTime = new Date(year, month - 1, day, hours, minutes); // create a Date object for event
    const triggerTime = new Date(eventTime.getTime() - 5 * 60 * 1000); // subtract 5 minutes from event time

    const currentTime = new Date(); // get current time


    const notiPush = !isActive; // notiPush represents the status of notification need to push or not.
    if (notiPush) {
      const scheduleNotification = async () => {
        try {
          console.log('Current Time: ', currentTime, 'Trigger Time: ', triggerTime);
          const delay = triggerTime.getTime() - currentTime.getTime(); // calculate delay in milliseconds
          console.log('Workshop Title: ', workshop_Title, 'Date and Time: ', dateAndTime, 'Delay: ', delay);


          if (delay > 0) {  // when the workshop is in the future
            const notificationId = await Notifications.scheduleNotificationAsync({
              content: {
                title: 'Workshop Reminder', // notification title can be changed here!
                body: 'Your workshop' + workshop_Title + 'is starting in 5 minutes', // notification body can be changed here!
              },
              trigger: {
                seconds: Math.floor(delay / 1000),  // The difference between the event time and the current time in seconds
              },
            });
            setNotificationId(notificationId);
            console.log(`Notification scheduled with ID: ${notificationId}`);
          } else {
            console.log(isActive);  // console log the error when not in the future, because the passed workshop will not display in the page.
            console.log('The workshop has passed. Notification not scheduled.');
          }
        } catch (error){  // one possibility to cause this error would be the push notification environment is not properly set up.
          console.error('Failed to schedule notification:', error);
          // Handle the error, e.g., show an error message to the user
          alert('Failed to schedule notification. Please try again.');
        }
      };

      scheduleNotification();
    }else{  // if the "bell-off" icon is active, cancel the scheduled notification
      if (notificationId) {
        console.log('Cancelling notification with ID: ', notificationId);
        Notifications.cancelScheduledNotificationAsync(notificationId);
        setNotificationId(null);
        console.log('Notification cancelled');
      }
    }

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [isActive, dateAndTime, workshop_Title]);

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