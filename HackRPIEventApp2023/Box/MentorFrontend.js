import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import HackerInfo from "./HackerInfo.js";

// calander object that holds all events and handles which are visable, which are active, and which are upcoming.
const MentorFrontend = () => {
  return (
    <SafeAreaView style={styles.CalanderStyle}>
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={true}
        //pagingEnabled={true} // Enable paging
        //snapToInterval={150} // Set the interval to the height of a single rectangle
      >
        <HackerInfo
          Hacker_Name = "Thomas 1"
          Table = "Table #1"
          Description = "Java is a silly language and I need help asap"
        />
        <HackerInfo
          Hacker_Name = "Thomas 2"
          Table = "Table #2"
          Description = "Java is a silly language and I need help asap"
        />
        <HackerInfo
          Hacker_Name = "Thomas 3"
          Table = "Table #3"
          Description = "Java is a silly language and I need help asap"
        />
        <HackerInfo
          Hacker_Name = "Thomas 4"
          Table = "Table #4"
          Description = "Java is a silly language and I need help asap"
        />
        <HackerInfo
          Hacker_Name = "Thomas 5"
          Table = "Table #5"
          Description = "Java is a silly language and I need help asap"
        />
        <HackerInfo
          Hacker_Name = "Thomas 6"
          Table = "Table #6"
          Description = "Java is a silly language and I need help asap"
        />
        <HackerInfo
          Hacker_Name = "Thomas 7"
          Table = "Table #7"
          Description = "Java is a silly language and I need help asap"
        />

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
