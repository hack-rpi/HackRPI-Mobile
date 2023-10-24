import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import SwipeButton from "rn-swipe-button";
import checkIcon from "../assets/check.png";
import slideIcon from "../assets/chevron-right.png";

const QueEntry = ({ name, roomNumber, problemType }) => {
  const [inQue, setQue] = useState(false);
  const [stateName, setName] = useState("");
  const [stateRoomNumber, setRoomNumber] = useState("");
  const [stateProblemType, setProblemType] = useState("");

  const toggleQue = () => {
    setQue(!inQue);
  };

  const handleNameChange = (name) => {
    setName(name);
  };

  const handleRoomNumberChange = (roomNumber) => {
    setRoomNumber(roomNumber);
  };

  const handleProblemTypeChange = (problemType) => {
    setProblemType(problemType);
  };

  const submitForm = () => {
    // You can perform actions with the entered data here.
    // For example, send the data to a server or perform local processing.
    toggleQue();
    // add error checking for vals
    console.log("Name:", stateName);
    console.log("Room Number:", stateRoomNumber);
    console.log("Problem Type:", stateProblemType);

    // jump to other page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleNameChange}
        value={stateName}
      />
      <Text style={styles.text}>Room Number:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleRoomNumberChange}
        value={stateRoomNumber}
      />
      <Text style={styles.text}>Type of Problem:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleProblemTypeChange}
        value={stateProblemType}
      />

      <SwipeButton
        title={inQue ? "Currently in Queue" : "Join Queue"}
        onSwipeSuccess={submitForm}
        railBackgroundColor="#191919"
        railBorderColor="#FFFFFF"
        thumbIconBackgroundColor="rgba(145, 3, 7,1)"
        railFillBackgroundColor="rgba(145, 3, 7, 0.5)"
        railFillBorderColor="rgba(145, 3, 7, 0.5)"
        thumbIconBorderColor="#FFFFFF"
        titleColor="#FFFFFF"
        disableResetOnTap={true}
        containerStyles={styles.buttonContainer}
        railStyles={styles.rail}
        thumbIconStyles={styles.thumbIcon}
        thumbIconImageSource={inQue ? checkIcon : slideIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    height: 60,
    width: 300,
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  text: {
    color: "#ffffff",
    fontSize: 15,
    padding: 5,
  },
  buttonContainer: {
    backgroundColor: "#910307",
    borderWidth: 2,
    borderRadius: 100,
  },
  rail: {
    borderRadius: 100,
    borderWidth: 3,
  },

  thumbIcon: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    height: 20,
    width: 20,
  },
});

export default QueEntry;
