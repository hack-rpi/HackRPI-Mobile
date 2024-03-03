import React, { useEffect } from 'react';
import PushNotification from 'react-native-push-notification';


////////////
// unfinished, temporary can't run
////////////

const App = () => {
  useEffect(() => {
    PushNotification.configure({
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log("NOTIFICATION:", notification);
        // process the notification
      },
      // Android only: GCM or FCM Sender ID
      senderID: "YOUR GCM (OR FCM) SENDER ID",
      // IOS only: (optional) default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,
      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotification.requestPermissions() later
       */
      requestPermissions: true,
    });
  }, []);

  return null; // Your app component
};

export default App;
