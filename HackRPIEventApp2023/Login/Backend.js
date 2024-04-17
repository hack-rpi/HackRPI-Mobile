import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore, collection, getDocs } from "firebase/firestore";

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
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const db = getFirestore(app);

// Check if the user exists in the database
const CheckUser = async (username, password) => {
  // Get a snapshot of the users collection
  const usersCollection = collection(db, "users");
  const userSnapshot = await getDocs(usersCollection);
  const matchFound = userSnapshot.docs.some(doc => {
    const userData = doc.data();
    const isMatch = userData.Uid === username && userData.Pass === password;
    return isMatch;
  });
  return matchFound;
}


export { CheckUser, auth };