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