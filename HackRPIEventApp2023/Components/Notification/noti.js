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

// FCM for Android
const serviceAccount = require('');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.post('/send-notification', (req, res) => {
  const { deviceToken, fcmToken, message } = req.body;

  if (deviceToken) {
    // send apn nnotification to ios
    const apnNotification = new apn.Notification();
    apnNotification.alert = message;
    apnProvider.send(apnNotification, deviceToken).then(result => {
      console.log('APNs notification:', result);
    }).catch(error => {
      console.error('APNs error:', error);
    });
  }


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
