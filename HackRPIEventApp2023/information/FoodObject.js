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
      {/* <View
        style={styles.notifBox}
        backgroundColor={"red"}
        borderColor={ "red"}>
      </View> */}
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

export default FoodObject;
