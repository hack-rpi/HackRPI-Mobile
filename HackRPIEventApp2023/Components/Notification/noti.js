const express = require('express');
const apn = require('apn');
const admin = require('firebase-admin');

const app = express();
app.use(express.json());

// apn for ios
const apnProvider = new apn.Provider({
  token: {
    key: '',
    keyId: '', // which need apple devloper member(key)
    teamId: '',
  },
  production: false, 
});
// const apnProvider = new apn.Provider(apnOptions);

// FCM for Android
const serviceAccount = require('');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.post('/send-notification', (req, res) => {
  const { deviceToken, fcmToken, message } = req.body;  // Function to handle APNs result
  function handleApnResult(result) {
    console.log('APNs notification:', result);
    return result.failed.length === 0;
  }

  // Function to handle FCM result
  function handleFcmResult(response) {
    console.log('FCM notification:', response);
    return response.successCount > 0;
  }

  let tasks = [];

  if (deviceToken) {
    // send apn nnotification to ios

    const apnNotification = new apn.Notification();
    apnNotification.alert = message;
    apnNotification.badge = 1;
    apnNotification.sound = 'default';
    apnNotification.title = title || 'New Notification';

    // send APNs notification to iOS
    tasks.push(
      apnProvider.send(apnNotification, deviceToken).then(handleApnResult)
    );  }


if (fcmToken) {
    // send FCM to android
    const fcmPayload = {
      notification: {
        title: 'title', // change late
        body: message,
      },
    };
    admin.messaging().sendToDevice(fcmToken, fcmPayload)
      .then(response => {
        console.log('FCM notification:', response);
      })
      .catch(error => {
        console.error('FCM error:', error);
      });
  }

  res.json({ success: true });
});
