import React, { useState } from "react";
import { View, StyleSheet, Image} from "react-native";
import InnerObject from "./InnerObject"; // Import the InnerObject component

//reusable component that ties an event object to it's notification bell
const FoodObject = ({
  food_Title,
  Time,
  Location,
  Description,
  imageSource,
}) => {
  return (
    <View style={styles.container}>
      <InnerObject
        food_title={food_Title}
        time={Time}
        location={Location}
        description={Description}
        imageSource={imageSource}
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
