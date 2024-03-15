import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import SwipeButton from "rn-swipe-button";
import checkIcon from "../assets/xRed.png";
import slideIcon from "../assets/chevron-right.png";
import QueCard from "./QueCard";

const QueEntry = ({ name, roomNumber, problemType }) => {
  const [stateName, setName] = useState("");
  const [stateRoomNumber, setRoomNumber] = useState("");
  const [stateProblemType, setProblemType] = useState("");
      // value checking
    } else {
      // exit que code
      console.log("exiting que");
      // reset vals
      setName("");
      setRoomNumber("");
      setProblemType("");
    }
    toggleQue();
    // jump to other page
  };

  return (
    <View style={styles.container}>
      {inQue ? (
        <View>
          <QueCard></QueCard>
        </View>
      ) : (
        <View style={styles.form}>
          <Text style={styles.text}>Name:</Text>
          <TextInput
            style={styles.shortInput} // Changed style to shortInput for the name input
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
            style={styles.largeInput} // Changed style to largeInput for the problem input
            onChangeText={handleProblemTypeChange}
            value={stateProblemType}
            multiline={true} // Allow multiline input for the problem type
          />
        </View> // jipfsdajipafsdjipdfsa
      )}
      
      <SwipeButton
        title={inQue ? "Currently in Queue" : "Join Queue"}
        onSwipeSuccess={submitForm}
        railBackgroundColor="#88B63A"
        railBorderColor={inQue ? "#910307" : "#FFFFFF"}
        thumbIconBackgroundColor={inQue ? "#FFFFFF" : "rgba(145, 3, 7,1)"}
        railFillBackgroundColor="rgba(145, 3, 7, 0.5)"
        railFillBorderColor="rgba(145, 3, 7, 0.5)"
        thumbIconBorderColor={inQue ? "#910307" : "#FFFFFF"}
        titleColor={inQue ? "#910307" : "#FFFFFF"}
        resetAfterSuccessAnimDelay={350}
        shouldResetAfterSuccess={true}
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
    marginTop: 100, // Move the container further up on the screen
  },
  input: {
    height: 60,
    width: 300,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: "black",
  },
  shortInput: {
    height: 60,
    width: 200, // Make the name input less long horizontally
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: "black",
  },
  largeInput: {
    height: 120, // Make the problem input bigger vertically
    width: 300,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: "black",
  },
  text: {
    color: "#ffffff",
    fontSize: 15,
    padding: 5,
  },
  buttonContainer: {
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
  form: {
    backgroundColor: "#1E262D",
    borderRadius: 12,
    padding: 20,
  },
});

export default QueEntry;
