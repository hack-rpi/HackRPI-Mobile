import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
      />
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
});
