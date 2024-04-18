const express = require('express');
const apn = require('apn');
const admin = require('firebase-admin');
const morgan = require('morgan'); // For logging request details

const app = express();
app.use(express.json());
app.use(morgan('tiny')); // Log requests to the console

// Load configuration for APNs and FCM from environment variables or configuration file
const apnOptions = {
  token: {
    key: process.env.APN_KEY,
    keyId: process.env.APN_KEY_ID,
    teamId: process.env.APN_TEAM_ID,
  },
  production: process.env.APN_ENV === 'production',
};

const apnProvider = new apn.Provider(apnOptions);

// Initialize Firebase Admin SDK
const serviceAccount = require(process.env.FCM_SERVICE_ACCOUNT_PATH);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Helper function to get formatted date and time
function getFormattedDate() {
  const now = new Date();
  return now.toISOString();
}

// Validate the request body to ensure required fields are present
function validateRequestBody(req, res, next) {
  const { deviceTokens, fcmTokens, message } = req.body;
  if (!message) {
    return res.status(400).json({ success: false, message: 'Message is required.' });
  }
  if (!deviceTokens && !fcmTokens) {
    return res.status(400).json({ success: false, message: 'At least one device token or FCM token is required.' });
  }
  next();
}

app.post('/send-notification', validateRequestBody, (req, res) => {
  const { deviceTokens, fcmTokens, message, title = 'New Notification' } = req.body;
  const dateTime = getFormattedDate();

  let tasks = [];

  if (deviceTokens) {
    // send APNs notification to multiple iOS devices
    const apnNotification = new apn.Notification({
      alert: message,
      badge: 1,
      sound: 'default',
      title: title,
    });

    tasks.push(
      apnProvider.send(apnNotification, deviceTokens).then(result => {
        console.log('APNs notification result:', result);
        return result.failed.length === 0;
      })
    );
  }

  if (fcmTokens) {
    // send FCM notification to multiple Android devices
    const fcmPayload = {
      notification: {
        title: title,
        body: message,
      },
      data: {
        dateTime: dateTime,
      },
    };

    tasks.push(
      admin.messaging().sendToDevice(fcmTokens, fcmPayload).then(response => {
        console.log('FCM notification response:', response);
        return response.successCount === fcmTokens.length;
      })
    );
  }

  Promise.all(tasks).then(results => {
    const allSuccessful = results.every(result => result);
    if (allSuccessful) {
      res.json({ success: true, message: 'Notifications sent successfully.' });
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
