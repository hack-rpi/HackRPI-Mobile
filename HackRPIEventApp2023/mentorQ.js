import { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';
import { StatusBar } from 'expo-status-bar';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { FieldValue, getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { sendEmailVerificationCode } from "./emailService";

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


// Sends the set of documents that are inside the 'requests' collection.
// Basically returns the entire queue.
const sendRequestsData = async () => {
    try {
      const requestsCollection = collection(db, 'requests');
      const querySnapshot = await getDocs(requestsCollection);
      let index = 0;
      const docIDs = [];
      const visibleQueue = [];
  
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        docIDs[index] = doc.id;
        index += 1;
  
        // Only include requests that are not paused
        if (!data.paused) {
          visibleQueue.push(data);
        }
      });
  
      return visibleQueue;
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
}

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


// helps the student
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


// deletes the student from the queue
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
      type: helpType,
      paused: false,
    };
    // Makes UID unique and time-based for sorting in the database.
    const uID = Date.now();
    try {
      const ans = await db.collection('requests').doc(uId).set(data);
    } catch (error) {
      console.error('Error adding to queue:', error);
    }
  }