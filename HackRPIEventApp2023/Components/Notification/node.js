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

          // Further assuming we have a function to get the role of the user
          const getUserRole = async (userId) => {
            // Placeholder function: In a real application, you would query the database.
            // For example: return await UserRole.findOne({ userId });
          };

          
            const token = req.headers.authorization?.split(' ')[1];

            if (!token) {
              return res.status(401).json({ success: false, message: 'No token provided' });
            }









            try {
              const decoded = jwt.verify(token, 'your_secret_key');
              req.user = decoded; // Add the user's information to the request object
              next();
            } catch (error) {
              res.status(403).json({ success: false, message: 'Failed to authenticate token' });
            }
        

          // Role-based authorization middleware
          const authorize = roles => async (req, res, next) => {
            const userRole = await getUserRole(req.user.userId);
            if (!roles.includes(userRole)) {
              return res.status(403).json({ success: false, message: 'You do not have permission to perform this action' });
            }
            next();
          };

          app.post('/submit-feedback', authenticate, (req, res) => {
            // Assuming we have a function to save feedback to the database
            // Placeholder function: saveFeedback({ userId: req.user.userId, feedback: req.body.feedback })
            res.status(201).json({ success: true, message: 'Feedback submitted successfully' });
          });

          // Admins can see all feedback, regular users can see only theirs
          app.get('/feedback', authenticate, authorize(['admin']), async (req, res) => {
            // Assuming we have a function to get feedback from the database
            // Placeholder function: getAllFeedback() for admins, getUserFeedback(req.user.userId) for regular users
            const role = await getUserRole(req.user.userId);
            const feedback = role === 'admin' ? await getAllFeedback() : await getUserFeedback(req.user.userId);
            res.json(feedback);
          });

          const errorLogger = (err, req, res, next) => {
            console.error(`${new Date().toISOString()} - Error: ${err.message}`);
            next(err); // Pass the error to the next handler, possibly an error response handler
          };
          
          // Apply errorLogger as the last middleware
          app.use(errorLogger);
          app.post('/request-password-reset', async (req, res) => {
            const { email } = req.body;
            try {
              const user = await User.findByEmail(email);
              if (!user) {
                return res.status(404).json({ success: false, message: 'User not found' });
              }
              // Generate a password reset token
              const resetToken = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
              // Send reset token to user's email
              // sendPasswordResetEmail(email, resetToken); // Placeholder for an actual email sending function
              res.json({ success: true, message: 'Password reset email sent' });
            } catch (error) {
              res.status(500).json({ success: false, message: 'Error requesting password reset' });
            }
          });
          
          app.post('/reset-password', async (req, res) => {
            const { resetToken, newPassword } = req.body;
            try {
              const decoded = jwt.verify(resetToken, 'your_secret_key');
              const hashedPassword = await bcrypt.hash(newPassword, 10);
              // Update the user's password in the database
              // updateUserPassword(decoded.userId, hashedPassword); // Placeholder for a password update function
              res.json({ success: true, message: 'Password has been reset successfully' });
            } catch (error) {
              res.status(500).json({ success: false, message: 'Invalid or expired password reset token' });
            }
          });
                    




});
