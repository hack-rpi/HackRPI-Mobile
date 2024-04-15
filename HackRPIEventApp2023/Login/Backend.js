import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
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

const CheckUser = async (username, password) => {
  console.log("Username:", username);
  console.log("Password:", password);

  const usersCollection = collection(db, "users");
  const userSnapshot = await getDocs(usersCollection);
  console.log("User snapshot:", userSnapshot.docs.map(doc => doc.data()));

  const matchFound = userSnapshot.docs.some(doc => {
    const userData = doc.data();
    console.log("Checking user:", userData);
    const isMatch = userData.username === username && userData.password === password;
    console.log("Match found:", isMatch);
    return isMatch;
  });

  console.log("Match found:", matchFound);
  return matchFound;
}


export { CheckUser, auth };