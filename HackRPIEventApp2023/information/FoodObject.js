import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
//import { Feather } from "@expo/vector-icons";
import InnerObject from "./InnerObject"; // Import the InnerObject component

//reusable component that ties an event object to it's notification bell
const FoodObject = ({
  workshop_Title,
  Time,
  Location,
  Description,
}) => {
  return (
    <View style={styles.container}>
      <InnerObject
        workshop_title={workshop_Title}
        time={Time}
        location={Location}
        description={Description}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Arrange children horizontally
    alignItems: "center", // Center children vertically
    backgroundColor: "transparent", // Replace with your desired background color
    padding: 10,
    borderRadius: 10,
    marginBottom: 0,
  },
});

export default FoodObject;
