const express = require('express');
const apn = require('apn');
const admin = require('firebase-admin');
const config = require('./config'); // Import the config module

const app = express();
app.use(express.json());

// Initialize APN with configurations from the config module
const apnProvider = new apn.Provider(config.apn);

// Initialize Firebase Admin SDK
const serviceAccount = require(config.firebase.serviceAccountPath);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

function getFormattedDate() {
  const now = new Date();
  return now.toISOString();
}

app.post('/send-notification', async (req, res) => {
  const { deviceTokens, fcmTokens, message, title } = req.body;
  
  const dateTime = getFormattedDate();
  const tasks = [];


});
