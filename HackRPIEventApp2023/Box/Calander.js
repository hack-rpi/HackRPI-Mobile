import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CalanderObject from "./CalanderObject";

// calander object that holds all events and handles which are visable, which are active, and which are upcoming.
const Calander = () => {
  return (
    <SafeAreaView style={styles.CalanderStyle}>
      <ScrollView
        style={styles.ScrollView}
        //showsVerticalScrollIndicator={true}
        //pagingEnabled={true} // Enable paging
        //snapToInterval={150} // Set the interval to the height of a single rectangle
      >
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
    //paddingTop: 0,
    //paddingBottom: 200,
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    padding: 16,
  },
});

export default Calander;
