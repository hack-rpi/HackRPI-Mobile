import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FieldValue, getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import { StyleSheet, Text, View, TextInput , TouchableOpacity} from 'react-native';

// Import the functions you need from the SDKs you need
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
const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  const [email, setEmail] = useState(''); // Use state to manage email input
  const [password, setPassword] = useState(''); // Use state to manage password input

  const printRequestsData = async () => {
    try {
      const requestsCollection = collection(db, 'requests');
      const querySnapshot = await getDocs(requestsCollection);
      return querySnapshot;
      // querySnapshot.forEach((doc) => {
      //   const data = doc.data();
      //   const tableNum = data.tablenum;
      //   const type = data.type;
      //   const name = data.name;

      //   console.log(`Table Number: ${tableNum}, Type: ${type}`);
      // });
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };
  const queueOut = async () => {
    try{
      const docRef = db.collection('request').doc(docKey);
      const ans = await docRef.set({
        helped: true
      })
    }catch(error){
      console.error('Error claiming queue:', error);
    }
  };

  const popQueue = async()=>{
    try{
      const ans = await db.collection('requests').doc(docKey).delete();
    }catch(error){
      console.error('Error deleting student from queue:', error);
    }
  };

  const addQueue = async() => {
    const data = {
      Name: student,
      helped: false,
      tablenum: tblN,
      type: helpType
    };
    try{
      const ans = await db.collection('requests').doc().set(data);
    }catch(error){
      console.error('Error adding to queue:', error);
    }
  }


  const registerWithEmailAndPassword = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      setEmail(''); // Clear email input
      setPassword(''); // Clear password input
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const loginWithEmailAndPassword = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Account detected');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  printRequestsData();

  return (
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
        onChangeText={(text) => setPassword(text)} // Update password state
        value={password} // Set the value to the password state
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
});

export default App;