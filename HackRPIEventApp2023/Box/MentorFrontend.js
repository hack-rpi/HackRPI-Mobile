import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import HackerInfo from "./HackerInfo.js";
import { StatusBar } from 'expo-status-bar';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, getDocs, updateDoc } from "firebase/firestore";
import { AntDesign } from '@expo/vector-icons';

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
const docIDs = [];

const sendRequestsData = async () => {
    try {
      const requestsCollection = collection(db, 'requests');
      const querySnapshot = await getDocs(requestsCollection);
      let index = 0;
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
      // console.log(`Table Number: ${tableNum}, Type: ${type}`);
      // });
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
};


const unHelp = async (docKey) => {
    const requestDocRef = doc(db, 'requests', docKey);
    try {
        await updateDoc(requestDocRef, {
            helped: false,
        });
    } catch(error) {
        console.error('Error in marking document: ', error);
    }
};

/**
  * Debug function to set helped values for everyone in the db to "false"
  * Can delete once finished with debugging
  */ 
const debugUnHelpAll = async () => {
    try {
      const requestsCollection = collection(db, 'requests');
      const querySnapshot = await getDocs(requestsCollection);
      querySnapshot.forEach((doc) => {
        unHelp(doc.id);
      }) 
    } catch(error) {
        console.error('Error: ', error)
    }
}

const MentorFrontend = () => {
  const [hackerData, setHackerData] = useState([]);
  const [refreshCooldown, setRefreshCooldown] = useState(false);

  // Call sendRequestsData to fetch data from the backend and update hackerData
  const populateHackerData = async () => {
    try {
      const requestSnapshot = await sendRequestsData(); // Call the backend function
      const hackerDataArray = [];

      if (requestSnapshot) { 
        requestSnapshot.forEach((doc) => {
            const docData = doc.data();
            // You can use fetchDoc to get additional data for each document if needed
            // const additionalData = await fetchDoc(doc.id); // Call the backend function

            // Create an object to represent the hacker info
            const hackerInfo = {
                Hacker_Name: docData.Name,
                Table: docData.tablenum,
                Description: docData.type,
                isRed: docData.helped,
            };

            hackerDataArray.push(hackerInfo);
        });
      }
      setHackerData(hackerDataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  const handleRefresh = async () => {
    if (!refreshCooldown) {
        populateHackerData();
        setRefreshCooldown(true);

        setTimeout(() => {
            setRefreshCooldown(false);
        }, 30000);
    } else {
        alert('Please wait 30 seconds before refreshing.');
    }
  };

  useEffect(() => {
    populateHackerData();
  }, []); // Run once when the component mounts

  return (
    <View style={styles.pageContainer}>
    <SafeAreaView style={styles.CalanderStyle}>
      <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={true}>
        {hackerData.length === 0 ? (
          <View style={styles.noDataContainer}>
            <Text style={styles.noDataText}>Queue is Empty!</Text>
          </View>
        ) : (
          hackerData.map((data, index) => (
            <HackerInfo key={index} {...data} Id={docIDs[index]} />
          ))
        )}
      </ScrollView>
      <View style={styles.refreshButtonContainer}>
        <TouchableOpacity
            onPress={handleRefresh}
            style={styles.refreshButton}
        >
            <AntDesign name="reload1" size={24} color="white" /> 
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                onPress={debugUnHelpAll}
                style={styles.debugButton}
            >
                <Text style={styles.buttonText}>Debug Unhelp All</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#191919", // Background color for the entire page
  },
  CalanderStyle: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    padding: 16,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 16,
    color: "gray",
  },
  refreshButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  refreshButton: {
    backgroundColor: '#0babd4',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // can delete after
  debugButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default MentorFrontend;
