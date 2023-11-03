// THIS IS A TEMPORARY FILE!!!!
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FieldValue, getFirestore, addDoc, collection, getDoc } from "firebase/firestore";
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

  // sends the set of documents that are inside of requests. Basically returns the entire queue.
  const sendRequestsData = async () => {
    try {
      const requestsCollection = collection(db, 'requests');
      const querySnapshot = await getDocs(requestsCollection);
      let index = 0;
      const docIDs = [];
      querySnapshot.forEach((doc) => {
        docIDs[index] = doc.id
        index += 1;
      });
      return querySnapshot;
      // the below is how you iterate through and grab each docment
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
  
  // this takes in a dockey and returns whether the student has been helped or not
  async function inQueue(docKey) {
    const docRef = doc(db, 'requests', docKey);
    try{
      // gets the data from the doc
      const doc = await getDoc(docRef);
      // ensures that the document is retrieved properly
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        // logs the data to error cehck then returns the helped status
        console.log('Document data:', doc.data());
        return doc.data().helped;
      }
    }catch(error){
      console.error('error retrieving document:', error);
    }
  };

  // a fetchdoc function to return the data of a document, aka the student in queue takes in a dockey
  async function fetchDoc(docKey) {
    const ans = doc(db, 'requests', docKey)
    try{   
      console.log(ans.data());
      // returns the data of that document
      return ans.data();
    }catch(error){
      console.error('error retrieving individual doc:', error);
    }
  };

  async function queueOut(docKey) {
    const docRef = doc(db, 'requests', docKey)
    try {
      // Check if the "helped" field is already true
      const docSnapshot = await getDoc(docRef);
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
  

  async function unHelp(docKey) {
    const docRef = doc(db,'requests', docKey);
    try {
      // Check if the "helped" field is already false
      const docSnapshot = await getDoc(docRef);
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
  

  // takes in the document key and pops it from the database
  const popQueue = async(docKey)=>{
    try{
      const ans = await db.collection('requests').doc(docKey).delete();
    }catch(error){
      console.error('Error deleting student from queue:', error);
    }
  };

  // adds someone into the queue  takes in student name, tabke number, and help type
  const addQueue = async(student, tblN,helpType) => {
    const data = {
      Name: student,
      helped: false,
      tablenum: tblN,
      type: helpType
    };
    // has to make UID unique and time based because sorting in the database.
    const uID = Date.now();
    try{
      const ans = await db.collection('requests').doc(uId).set(data);
    }catch(error){
      console.error('Error adding to queue:', error);
    }
  }


  // takes in email, password, and verification code named checker
  const registerWithEmailAndPassword = async () => {
    try {


      /* !!!!! MAKE SURE VERICODE IS FILLED OUT !!! */
      const vericode = '';


      // checks vericode with the checker code
      if(!checker.localeCompare(vericode)){
        alert("wrong verificationcode")
      }
      else{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        setEmail(''); // Clear email input
        setPassword(''); // Clear password input
      }
      // error catching
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // logs in the user after the account has bee ncreated
  const loginWithEmailAndPassword = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Account detected');
    } catch (err) {
      console.error(err);
      alert(err.message);
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
