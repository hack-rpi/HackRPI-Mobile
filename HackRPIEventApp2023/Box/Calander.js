import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CalanderObject from "./CalanderObject";
import CountdownTimer from "../Components/CountdownTimer";

// calander object that holds all events and handles which are visable, which are active, and which are upcoming.
const Calander = () => {
  return (
    <SafeAreaView style={styles.CalanderStyle}>
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={true}
        //pagingEnabled={true} // Enable paging
        //snapToInterval={150} // Set the interval to the height of a single rectangle
      >
        <CountdownTimer />
        <CalanderObject
          workshop_Title="Workshop_title"
          Time="Time Unknown"
          Location="Location Unknown"
          Description="This is not important at all."
          isRed={true}
        />
        <CalanderObject
          workshop_Title="Workshop_title"
          Time="Time Unknown"
          Location="Location Unknown"
          Description="This is not important at all."
          isRed={false}
        />
        <CalanderObject
          workshop_Title="Workshop_title"
          Time="Time Unknown"
          Location="Location Unknown"
          Description="This is not important at all."
          isRed={false}
        />
        <CalanderObject
          workshop_Title="Workshop_title"
          Time="Time Unknown"
          Location="Location Unknown"
          Description="This is not important at all."
          isRed={false}
        />
        <CalanderObject
          workshop_Title="Workshop_title"
          Time="Time Unknown"
          Location="Location Unknown"
          Description="This is not important at all."
          isRed={false}
        />
        <CalanderObject
          workshop_Title="Workshop_title"
          Time="Time Unknown"
          Location="Location Unknown"
          Description="This is not important at all."
          isRed={false}
        />
        <CalanderObject
          workshop_Title="Workshop_title"
          Time="Time Unknown"
          Location="Location Unknown"
          Description="This is not important at all."
          isRed={false}
        />
        <CalanderObject
          workshop_Title="Workshop_title"
          Time="Time Unknown"
          Location="Location Unknown"
          Description="This is not important at all."
          isRed={false}
        />
        <CalanderObject
          workshop_Title="Workshop_title"
          Time="Time Unknown"
          Location="Location Unknown"
          Description="This is not important at all."
          isRed={false}
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

export default Calander;
