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

    // APNs notifications
    if (deviceTokens && deviceTokens.length) {
        const apnNotification = new apn.Notification({
          alert: message,
          badge: 1,
          sound: 'default',
          title: title || 'New Notification',
          payload: { dateTime },
        });
    
        tasks.push(...deviceTokens.map(token => 
          apnProvider.send(apnNotification, token).then(handleApnResult)
        ));
      }

          // FCM notifications
          if (fcmTokens && fcmTokens.length) {
            const fcmPayload = {
              notification: { title: title || 'New Notification', body: message },
              data: { dateTime },
            };
        
            tasks.push(...fcmTokens.map(token => 
              admin.messaging().sendToDevice(token, fcmPayload).then(handleFcmResult)
            ));
          }
        
          try {
            const results = await Promise.all(tasks);
            const allSuccessful = results.every(result => result);
            res.json({ success: allSuccessful });
          } catch (error) {
            console.error('Notification sending error:', error);
            res.status(500).json({ success: false, message: 'An error occurred while sending notifications.' });
          }
        });
        
        const PORT = config.server.port;
        app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);

        // Assume express, app and other initializations from your provided code above...

          // A simple in-memory store for feedback
          const feedbackStore = [];

          // Middleware for basic input validation
          const validateFeedbackInput = (req, res, next) => {
            const { userId, feedback } = req.body;
            if (!userId || typeof userId !== 'string' || !feedback || typeof feedback !== 'string') {
              return res.status(400).json({ success: false, message: 'Invalid input. Please provide userId and feedback.' });
            }
            next();
          };

          app.post('/submit-feedback', validateFeedbackInput, (req, res) => {
            const { userId, feedback } = req.body;
            const feedbackEntry = {
              id: feedbackStore.length + 1,
              userId,
              feedback,
              submittedAt: new Date().toISOString(),
            };

            feedbackStore.push(feedbackEntry);
            res.status(201).json({ success: true, message: 'Feedback submitted successfully.', feedbackId: feedbackEntry.id });
          });

          app.get('/feedback', (req, res) => {
            res.json(feedbackStore);
          });





});
