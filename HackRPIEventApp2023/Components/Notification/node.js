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
          const bcrypt = require('bcrypt');
          const jwt = require('jsonwebtoken');

          const User = {

            async save(newUser) {

            },
            async findByUsername(username) {
      
            }
          };
          
          app.post('/register', async (req, res) => {
            const { username, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            
            try {

              await User.save({ username, password: hashedPassword });
              res.status(201).json({ success: true, message: 'User registered successfully' });
            } catch (error) {
              res.status(500).json({ success: false, message: 'Error registering new user' });
            }
          });
          
          app.post('/login', async (req, res) => {
            const { username, password } = req.body;
            const user = await User.findByUsername(username);
            
            if (user && await bcrypt.compare(password, user.password)) {

              const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
              res.json({ success: true, token });
            } else {
              res.status(401).json({ success: false, message: 'Authentication failed' });
            }
          });


          const authenticate = (req, res, next) => {

          };
          
          app.post('/submit-feedback', authenticate, (req, res) => {

          });
          
          app.get('/feedback', authenticate, (req, res) => {
 
          });



});
