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

    // send FCM to Android
    tasks.push(
      admin.messaging().sendToDevice(fcmToken, fcmPayload).then(handleFcmResult)
    );
  }

  // Wait for all the tasks to complete
  Promise.all(tasks).then(results => {
    const allSuccessful = results.every(result => result);
    if (allSuccessful) {
      res.json({ success: true });
    } else {
      res.status(500).json({ success: false, message: 'Some notifications failed to send.' });
    }
  }).catch(error => {
    console.error('Notification sending error:', error);
    res.status(500).json({ success: false, message: 'An error occurred while sending notifications.' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

