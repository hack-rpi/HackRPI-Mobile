import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
<<<<<<< Updated upstream
import { StyleSheet, Button, View, Text, TextInput } from 'react-native';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
=======
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FieldValue, getFirestore, addDoc, collection, getDocs, documentId } from "firebase/firestore";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

>>>>>>> Stashed changes
const firebaseConfig = {
  apiKey: "AIzaSyAqGfFX7gXRGBtidctQjIJ4NC0FA6YxeOQ",
  authDomain: "mentor-queue-c01a3.firebaseapp.com",
  projectId: "mentor-queue-c01a3",
  storageBucket: "mentor-queue-c01a3.appspot.com",
  messagingSenderId: "117425105410",
  appId: "1:117425105410:web:60fa2b3e348b489b37551b",
  measurementId: "G-NJ5ZBXKBX3"
};

<<<<<<< Updated upstream

// Initialize Firebase
=======
>>>>>>> Stashed changes
const app = initializeApp(firebaseConfig);

<<<<<<< Updated upstream

export default function App() {
  const [formData, setFormData] = useState({
    tableNumber: '1',
    myCheckbox: false,
    helpType: 'Python',
  });

  const handleSubmit = () => {
    // Handle form submission here, e.g., send data to your API
    console.log(formData);
  };
=======
export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const printRequestsData = async () => {
    try {
      const requestsCollection = collection(db, 'requests');
      const querySnapshot = await getDocs(requestsCollection);

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const tableNum = data.tablenum;
        const type = data.type;

        console.log(`Table Number: ${tableNum}, Type: ${type}`);
      });
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

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

  const deleteDocument = async (documentId) => {
    try {
      const docRef = doc(db, 'requests', documentId);
      await deleteDoc(docRef);
      console.log('Document deleted successfully');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

>>>>>>> Stashed changes

  return (
    <View style={styles.container}>
      <Text>Number input:</Text>
      <TextInput
<<<<<<< Updated upstream
        style={styles.textBox}
        keyboardType="numeric" // Set the keyboardType to 'numeric' for a number input
        value={formData.tableNumber}
        onChangeText={(text) => setFormData({ ...formData, tableNumber: text })}
      />

      <View style={styles.checkboxContainer}>
        <Text>Checkbox:</Text>
        <View style={styles.checkbox}>
          <Button
            title={formData.myCheckbox ? 'Checked' : 'Unchecked'}
            onPress={() => setFormData({ ...formData, myCheckbox: !formData.myCheckbox })}
          />
        </View>
      </View>

      <Text>Help type:</Text>
      <View style={styles.radioContainer}>
        <Text>Python</Text>
        <Button
          title={formData.helpType === 'Python' ? 'Selected' : 'Select'}
          onPress={() => setFormData({ ...formData, helpType: 'Python' })}
        />
      </View>
      <View style={styles.radioContainer}>
        <Text>C++</Text>
        <Button
          title={formData.helpType === 'C++' ? 'Selected' : 'Select'}
          onPress={() => setFormData({ ...formData, helpType: 'C++' })}
        />
      </View>
      <View style={styles.radioContainer}>
        <Text>Java</Text>
        <Button
          title={formData.helpType === 'Java' ? 'Selected' : 'Select'}
          onPress={() => setFormData({ ...formData, helpType: 'Java' })}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Reset form" onPress={() => setFormData({ tableNumber: '', myCheckbox: false, helpType: 'Python' })} />
        <Button title="Submit form" onPress={handleSubmit} />
      </View>
=======
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
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
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteDocument(documentId)}
      >
        <Text style={styles.buttonText}>Delete Document</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
>>>>>>> Stashed changes
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
<<<<<<< Updated upstream
  textBox: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 20,
    height: 20,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
});
=======
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  registerButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
>>>>>>> Stashed changes
