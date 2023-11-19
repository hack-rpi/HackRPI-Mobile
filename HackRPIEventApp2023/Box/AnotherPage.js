import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { initializeApp } from "firebase/app";
import { doc, getFirestore, getDoc, setDoc, deleteDoc } from "firebase/firestore";

// firebase

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
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
        await setDoc(docRef, {
          helped: false
        });
      }
    } catch (error) {
      console.error('Error unmarking queue:', error);
    }
}

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
      await setDoc(docRef, {
         helped: true
      });
      // popQueue
      await deleteDoc(docRef);
    }
  } catch (error) {
    console.error('Error claiming queue:', error);
  }
};

const AnotherPage = ({ route }) => {
  const { hackerData } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.labelStyle}>Name: </Text>
          <Text style={styles.descriptionStyle}>{hackerData.Hacker_Name}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.labelStyle}>Table: </Text>
          <Text style={styles.descriptionStyle}>{hackerData.Table}</Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        {hackerData ? (
          <View>
            {hackerData.BriefDescription ? (
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.descriptionLabel}>Brief Description: </Text>
                <Text style={styles.description}>{hackerData.BriefDescription}</Text>
              </View>
            ) : null}
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.descriptionLabel}>Description: </Text>
              <Text style={styles.description}>{hackerData.Description}</Text>
            </View>
          </View>
        ) : (
          <Text style={styles.centeredText}>Nothing to display</Text>
        )}
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => queueOut(hackerData.Id)}
            style={[styles.buttonStyle, { backgroundColor: 'green' }]}
          >
            <Text style={styles.buttonText}>Check off</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => unHelp(hackerData.Id)}
            style={[styles.buttonStyle, { backgroundColor: '#910307', marginLeft: 10 }]}
          >
            <Text style={styles.buttonText}>Unhelp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919',
  },
  topSection: {
    flex: 0,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  descriptionStyle: {
    fontSize: 18,
    color: 'white',
  },
  centeredText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  buttonStyle: {
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  descriptionLabel: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  description: {
    fontSize: 25,
    color: 'white',
  },
});

export default AnotherPage;
