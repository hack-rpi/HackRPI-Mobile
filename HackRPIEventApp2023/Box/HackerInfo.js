import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import EventObject from "./EventObject";
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

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

const inQueue = async(docKey) => {
    try{
      // grabs the document
      const colRef = await db.collection('requests')
      const docRef = await colRef.doc(docKey)
      // gets the data from the doc
      const doc = await docRef.get();
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

const HackerInfo = ({
  Hacker_Name,
  Table,
  BriefDescription,
  Description,
  isRed,
  Id
}) => {
  const [isActive, setIsActive] = useState(false);
  const navigation = useNavigation();
  const hackerData = {
      Hacker_Name,
      Table,
      BriefDescription,
      Description,
      isRed,
      Id
  };
  const handleCheckmarkClick = async () => {
    // check if person has been helped
    // TODO: inQueue throws an error, helped is undefined
    // const helped = await inQueue(Id);
    
    let helped = false;
    if (!helped) {
        // Pass the hacker information to AnotherPage
        navigation.navigate('AnotherPage', {hackerData: hackerData});
    } else { 
        alert('This person has been helped, please refresh.');
    }
  }

  return (
    <View style={styles.container}>
      <EventObject
        Hacker_Name={Hacker_Name}
        Table={Table}
        BriefDescription={BriefDescription}
        Description={Description}
        isRed={isRed}
      />
      <View
        style={styles.notifBox}
        backgroundColor={isRed ? "black" : isActive ? "black" : "white"}
        borderColor={isRed ? "red" : "white"}>
        <Feather
          name="check"
          size={30}
          color={"red"}
          onPress={handleCheckmarkClick}
          zIndex={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 0,
  },
  notifBox: {
    width: 60,
    height: 100,
    borderWidth: 3,
    borderRadius: 20,
    padding: 10,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    zIndex: 1,
  },
});

export default HackerInfo;
