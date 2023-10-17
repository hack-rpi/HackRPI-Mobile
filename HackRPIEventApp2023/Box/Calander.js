import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CalanderObject from "./CalanderObject";
import WorkShops from "./WorkShops.json";

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
      {WorkShops.map((event, index) => (
        <CalanderObject
          key={index}
          workshop_Title={event.WorkShop_Title}
          Time={event.WorkShop_Time}
          Location={event.WorkShop_Location}
          Description={event.WorkShop_Description}
        />
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

export default Calander;
