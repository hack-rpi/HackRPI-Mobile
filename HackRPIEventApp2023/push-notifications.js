import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    // Foreground push notification listener
    const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
      // Handle foreground push notifications here
      const { notification, data } = remoteMessage;
      console.log('Foreground Notification:');
      console.log('Notification Title:', notification?.title);
      console.log('Notification Body:', notification?.body);
      console.log('Additional Data:', data);
    });

    // App terminated/background push notification listener
    const unsubscribeOnNotificationOpenedApp = messaging().onNotificationOpenedApp(remoteMessage => {
      // Handle background/terminated push notifications here
      console.log('Background/terminated Notification:');
      console.log('Notification Opened App:', remoteMessage);
    });

    // App terminated/background push notification listener (iOS)
    const unsubscribeOnNotificationOpened = messaging().setBackgroundMessageHandler(async remoteMessage => {
      // Handle background/terminated push notifications here (iOS specific)
      console.log('iOS Background/terminated Notification:');
      console.log('Notification Opened:', remoteMessage);
    });

    // Cleanup when unmounting component
    return () => {
      unsubscribeOnMessage();
      unsubscribeOnNotificationOpenedApp();
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Push Notification Handling Example</Text>
    </View>
  );
};

export default App;

