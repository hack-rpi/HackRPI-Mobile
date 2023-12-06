// Import necessary libraries and components
import { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';
import { StatusBar } from 'expo-status-bar';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { FieldValue, getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";

// Google API client ID
const clientId = "117425105410-7f2ebr1hvv8k8dd5sm94flr8rrue992j.apps.googleusercontent.com";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqGfFX7gXRGBtidctQjIJ4NC0FA6YxeOQ",
  authDomain: "mentor-queue-c01a3.firebaseapp.com",
  projectId: "mentor-queue-c01a3",
  storageBucket: "mentor-queue-c01a3.appspot.com",
  messagingSenderId: "117425105410",
  appId: "1:117425105410:web:60fa2b3e348b489b37551b",
  measurementId: "G-NJ5ZBXKBX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Main App component
function App() {
  // Initialize Google API client
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      });
    };

    gapi.load('client:auth2', start);
  });

  // State variables for email, password, and verification code
  const [email, setEmail] = useState(''); // Use state to manage email input
  const [password, setPassword] = useState(''); // Use state to manage password input
  const [checker, setChecker] = useState(''); // Use state to manage verification code input

  // Sends the set of documents that are inside the 'requests' collection.
  // Basically returns the entire queue.
  const sendRequestsData = async () => {
    try {
      const requestsCollection = collection(db, 'requests');
      const querySnapshot = await getDocs(requestsCollection);
      let index = 0;
      const docIDs = [];
      querySnapshot.forEach((doc) => {
        docIDs[index] = doc.id;
        index += 1;
      });
      return querySnapshot;
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };
// This function checks whether a student is in the queue based on the document key.
  // It returns whether the student has been helped or not.
  const inQueue = async (docKey) => {
    try {
      // Grabs the document
      const docRef = db.collection('requests').doc(docKey);
      // Gets the data from the doc
      const doc = await docRef.get();
      // Ensures that the document is retrieved properly
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        // Logs the data for error checking, then returns the helped status
        console.log('Document data:', doc.data());
        return doc.data().helped;
      }
    } catch (error) {
      console.error('Error retrieving document:', error);
    }
  };

  // A function to fetch the data of a document, i.e., the student in the queue.
  // It takes in a document key.
  const fetchDoc = async (docKey) => {
    try {
      // Grabs the document
      const ans = await db.collection('requests').doc(docKey);
      console.log(ans.data());
      // Returns the data of that document
      return ans.data();
    } catch (error) {
      console.error('Error retrieving individual doc:', error);
    }
  };
  const queueOut = async (docKey) => {
    try {
      // Create a reference to the student's document using the provided docKey
      const docRef = db.collection('requests').doc(docKey);
  
      // Check if the "helped" field is already true
      const docSnapshot = await docRef.get();
      const data = docSnapshot.data();
  
      if (data && data.helped) {
        alert('This student has already been helped.');
      } else {
        // Set the "helped" field to true
        await docRef.set({
          helped: true
        });
      }
    } catch (error) {
      console.error('Error claiming queue:', error);
    }
  };
  const unHelp = async (docKey) => {
    try {
      // Create a reference to the student's document using the provided docKey
      const docRef = db.collection('requests').doc(docKey);
  
      // Check if the "helped" field is already false
      const docSnapshot = await docRef.get();
      const data = docSnapshot.data();
  
      if (data && !data.helped) {
        alert('This student is already marked as not helped.');
      } else {
        // Set the "helped" field to false
        await docRef.set({
          helped: false
        });
      }
    } catch (error) {
      console.error('Error unmarking queue:', error);
    }
  };
  // Removes a student from the queue based on the document key.
  const popQueue = async (docKey) => {
    try {
      const batch = writeBatch(db);
      const docRef = doc(db, 'requests', docKey);
      batch.delete(docRef);
      await commitBatch(batch);
    } catch (error) {
      console.error('Error in popQueue:', error);
      throw error;
    }
  };

  // Adds someone into the queue.
  // It takes in student name, table number, and help type.
  const addQueue = async (student, tblN, helpType) => {
    const data = {
      Name: student,
      helped: false,
      tablenum: tblN,
      type: helpType
    };
    // Makes UID unique and time-based for sorting in the database.
    const uID = Date.now();
    try {
      const ans = await db.collection('requests').doc(uId).set(data);
    } catch (error) {
      console.error('Error adding to queue:', error);
    }
  }

  // Sends a password reset email to the provided email address.
  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('Password reset email sent!');
      alert('Password reset email sent!');
    } catch (error) {
      console.error('Error sending password reset email:', error);
      alert('Failed to send password reset email. Please check the email address and try again.');
    }
  };

  // Registers a new user with email and password.
  const registerWithEmailAndPassword = async () => {
    try {
      const vericode = ''; // Verification code (TODO: Fill this out)

      // Checks verification code with the provided code
      if (!checker.localeCompare(vericode)) {
        alert("Wrong verification code")
      } else {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        setEmail(''); // Clear email input
        setPassword(''); // Clear password input
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // Logs in the user with the provided email and password.
  const loginWithEmailAndPassword = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Account detected');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  // Gets the total number of students in the queue.
const getTotalStudentsInQueue = async () => {
  try {
    const requestsCollection = collection(db, 'requests');
    const querySnapshot = await getDocs(requestsCollection);
    const totalStudents = querySnapshot.size;
    console.log(`Total Students in Queue: ${totalStudents}`);
    return totalStudents;
  } catch (error) {
    console.error('Error calculating total students in queue:', error);
    return 0;
  }
};

  const getAverageWaitTime = async () => {
    try {
      const requestsCollection = collection(db, 'requests');
      const querySnapshot = await getDocs(requestsCollection);
  
      let totalWaitTime = 0;
      let totalStudents = 0;
  
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const addedTimestamp = data.addedTimestamp; // Timestamp when student was added to the queue
        const helpedTimestamp = data.helpedTimestamp; // Timestamp when student was helped
  
        if (addedTimestamp && helpedTimestamp) {
          // Calculate the time spent in the queue in milliseconds
          const waitTime = helpedTimestamp - addedTimestamp;
  
          // Add the wait time to the total
          totalWaitTime += waitTime;
          totalStudents++;
        }
      });
  
      if (totalStudents === 0) {
        console.log('No data available to calculate average wait time.');
        return;
      }
  
      // Calculate the average wait time in minutes
      const averageWaitTime = totalWaitTime / (totalStudents * 60000); // Convert milliseconds to minutes
      console.log(`Average Wait Time: ${averageWaitTime.toFixed(2)} minutes`);
    } catch (error) {
      console.error('Error calculating average wait time:', error);
    }
  };
// Example optimized loop in a function
const getTotalStudentsHelped = async () => {
  try {
    const requestsCollection = collection(db, 'requests');
    const querySnapshot = await getDocs(requestsCollection);

    let totalHelpedStudents = 0;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      totalHelpedStudents += data.helped ? 1 : 0;
    });

    console.log(`Total Students Helped: ${totalHelpedStudents}`);
    return totalHelpedStudents;
  } catch (error) {
    console.error('Error calculating total students helped:', error);
    return 0;
  }
};

  
  const getQueueStatistics = async () => {
    try {
      const totalStudentsPromise = getTotalStudentsInQueue();
      const averageWaitTimePromise = getAverageWaitTime();
      const totalHelpedStudentsPromise = getTotalStudentsHelped();
  
      const [totalStudents, averageWaitTime, totalHelpedStudents] = await Promise.all([
        totalStudentsPromise,
        averageWaitTimePromise,
        totalHelpedStudentsPromise
      ]);
  
      console.log(`Total Students in Queue: ${totalStudents}`);
      console.log(`Average Wait Time: ${averageWaitTime.toFixed(2)} minutes`);
      console.log(`Total Students Helped: ${totalHelpedStudents}`);
    } catch (error) {
      console.error('Error in getQueueStatistics:', error);
    }
  };
  
  
  // This function calculates the time since the student was last helped
const getTimeSinceLastHelped = async (studentId) => {
  try {
    // Fetch the student's document using the studentId
    const studentDoc = await db.collection('students').doc(studentId).get();

    if (!studentDoc.exists) {
      console.log('No such student found!');
      return;
    }

    const studentData = studentDoc.data();
    const lastHelpedTimestamp = studentData.lastHelpedTimestamp; // Assuming this is the field where the last helped timestamp is stored

    if (!lastHelpedTimestamp) {
      console.log('This student has not been helped before.');
      return;
    }

    // Current timestamp
    const now = new Date().getTime();

    // Calculate the time since the student was last helped in minutes
    const timeSinceLastHelped = (now - lastHelpedTimestamp.toMillis()) / 60000; // Convert from milliseconds to minutes

    console.log(`Time since last helped: ${timeSinceLastHelped.toFixed(2)} minutes`);
    return timeSinceLastHelped.toFixed(2); // Return the time in minutes, rounded to 2 decimal places
  } catch (error) {
    console.error('Error in getTimeSinceLastHelped:', error);
  }
};

const sendVerificationEmail = async (user) => {
  try {
    await sendEmailVerification(user);
    console.log('Verification email sent!');
    alert('A verification email has been sent. Please check your inbox.');
  } catch (error) {
    console.error('Error sending verification email:', error);
    alert('Failed to send verification email. Please try again later.');
  }
};

const db = getFirestore(app); // Initialize Firestore

// Function to balance the queue
const balanceQueue = async () => {
  try {
    // Get all mentors
    const mentorsSnapshot = await db.collection('mentors').get();

    // Create an array to hold mentor availability and expertise
    let mentors = [];
    mentorsSnapshot.forEach(doc => {
      mentors.push({ id: doc.id, ...doc.data() });
    });

    // Sort mentors by their current load (ascending)
    mentors.sort((a, b) => a.currentLoad - b.currentLoad);

    // Get unassigned student requests
    const requestsSnapshot = await db.collection('requests').where('assignedTo', '==', null).get();
    requestsSnapshot.forEach(async (requestDoc) => {
      const requestData = requestDoc.data();

      // Find the most suitable mentor for each request
      for (let mentor of mentors) {
        if (mentor.expertise.includes(requestData.subject)) {
          // Assign this request to the mentor
          await db.collection('requests').doc(requestDoc.id).update({ assignedTo: mentor.id });
          
          // Update mentor's current load
          await db.collection('mentors').doc(mentor.id).update({ currentLoad: mentor.currentLoad + 1 });
          
          // Break the loop once assigned
          break;
        }
      }
    });

  } catch (error) {
    console.error('Error in balancing the queue:', error);
  }
};

// Function to find peak hours
const findPeakHours = async () => {
  try {
    // Define an object to hold the count of requests per hour
    let hourCounts = {};

    // Get all requests
    const requestsSnapshot = await db.collection('requests').get();

    requestsSnapshot.forEach(doc => {
      const requestData = doc.data();
      const requestTimestamp = requestData.timestamp; // assuming 'timestamp' field exists

      // Extract hour from timestamp
      const hour = requestTimestamp.toDate().getHours(); // convert Firestore timestamp to Date and get hour

      // Increment the count for this hour
      hourCounts[hour] = (hourCounts[hour] || 0) + 1;
    });

    // Find the hour(s) with the maximum requests
    let maxRequests = 0;
    let peakHours = [];
    for (const [hour, count] of Object.entries(hourCounts)) {
      if (count > maxRequests) {
        maxRequests = count;
        peakHours = [hour];
      } else if (count === maxRequests) {
        peakHours.push(hour);
      }
    }

    console.log(`Peak Hours: ${peakHours.join(', ')} with ${maxRequests} requests each.`);
    return peakHours; // Returns an array of peak hours
  } catch (error) {
    console.error('Error in finding peak hours:', error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.error('Error signing out:', error);
    alert('Error signing out');
  }
};

  
  

  return (
    // used for testing
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)} // Update email state
        value={email} // Set the value to the email state
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)} // Update password state
        value={password} // Set the value to the password state
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setChecker(text)} // Update password state
        value={checker} // Set the value to the password state
      />
      <TouchableOpacity
        style={styles.registerButton}
        onPress={registerWithEmailAndPassword}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={loginWithEmailAndPassword}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <TouchableOpacity
      style={styles.logoutButton}
      onPress={logout}
    >
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  registerButton: {
    backgroundColor: 'blue', // Change the color as desired
    padding: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: 'green', // Change the color as desired
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: 'red', // Change the color as desired
    padding: 10,
    borderRadius: 5,
    marginTop: 10, // Add some margin at the top
  },
});

export default App;
