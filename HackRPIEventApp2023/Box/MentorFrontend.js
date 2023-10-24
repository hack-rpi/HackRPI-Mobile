
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import HackerInfo from "./HackerInfo.js";

// calander object that holds all events and handles which are visable, which are active, and which are upcoming.
const MentorFrontend = () => {

  // Define a state variable to store the data entered by the user
  const [hackerData, setHackerData] = useState([]);

  const addHackerInfo = (hackerName, table, description) => {
    setHackerData([...hackerData, { hackerName, table, description }]);
  };

  const hackerInfoData = [
    {
      Hacker_Name: "Thomas 1",
      Table: "Table #1",
      Description: "Java is a silly language and I need help asap",
      isRed: false,
    },
    {
      Hacker_Name: "Thomas 2",
      Table: "Table #2",
      Description: "Java is a silly language and I need help asap",
      isRed: false,
    },

    {
      Hacker_Name: "Thomas 3",
      Table: "Table #2",
      Description: "Java is a silly language and I need help asap",
      isRed: false,
      Shown: true
    },
    // Add more objects as needed
  ];

  return (
    <SafeAreaView style={styles.CalanderStyle}>
      <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={true}>
        {hackerInfoData.map((data, index) => (
          <HackerInfo key={index} {...data} />
  
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  CalanderStyle: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    padding: 16,
  },
});

export default MentorFrontend;
