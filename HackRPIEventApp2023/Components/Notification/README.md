To send notification to user's device.
For IOS device we need to get APNs Key:
Step 1: Access Apple Developer Account:
    Go to the Apple Developer website: https://developer.apple.com.
    Sign in to your Apple Developer account using your Apple ID and password.

Step 2: Create an App ID
    Navigate to the "Certificates, Identifiers & Profiles" section.
    Select "App IDs" from the left-hand menu.
    Click the "+" button to create a new App ID.
    Fill in the required information, including a unique Bundle ID for your app. Make sure your      Bundle ID is correct and corresponds to your app.

Step 3: Configure Push Notifications
    In the "Capabilities" section of your App ID, enable "Push Notifications."

Step 4: Create an APNs Key
    In the same "Capabilities" section, under "Push Notifications," you'll find a "Create Key" button. Click on it to create a new APNs Key.
    Give the key a name (e.g., "MyApp APNs Key").
    Select the App ID you created earlier in the "Key" configuration.
    Click "Continue."
    Review the information and click "Register" to create the key.

Step 5: Download Your APNs Key
    After registering the key, you'll be presented with a confirmation page. Click the "Download" button to save the key to your computer.

Puch notifaction method should be in beckend. 
Need to download express, apn, body-parser from npm.
example code of creating connection:
const express = require('express');
const apn = require('apn');
const admin = require('firebase-admin');

const app = express();
app.use(express.json());

// Configure APNs for iOS
const apnProvider = new apn.Provider({
  token: {
    key: 'path/to/your/APNsKey.p8',
    keyId: 'yourKeyID',
    teamId: 'yourTeamID',
  },
  production: false, // Set to true for production environment
});

// Configure FCM for Android
const serviceAccount = require('path/to/your/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.post('/send-notification', (req, res) => {
  const { deviceToken, fcmToken, message } = req.body;

  if (deviceToken) {
    // Send APNs notification for iOS devices
    const apnNotification = new apn.Notification();
    apnNotification.alert = message;
    apnProvider.send(apnNotification, deviceToken).then(result => {
      console.log('APNs Notification:', result);
    }).catch(error => {
      console.error('APNs Error:', error);
    });
  }

  if (fcmToken) {
    // Send FCM notification for Android devices
    const fcmPayload = {
      notification: {
        title: 'Notification Title',
        body: message,
      },
    };
    admin.messaging().sendToDevice(fcmToken, fcmPayload)
      .then(response => {
        console.log('FCM Notification:', response);
      })
      .catch(error => {
        console.error('FCM Error:', error);
      });
  }

  res.json({ success: true });
});



-------------------------------------------------------------------------

