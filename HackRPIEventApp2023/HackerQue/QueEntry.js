import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import SwipeButton from "rn-swipe-button";
import customThumbIcon from "../assets/check.svg";

class QueEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      roomNumber: "",
      problemType: "",
    };
  }

  handleNameChange = (name) => {
    this.setState({ name });
  };

  handleRoomNumberChange = (roomNumber) => {
    this.setState({ roomNumber });
  };

  handleProblemTypeChange = (problemType) => {
    this.setState({ problemType });
  };

  submitForm = () => {
    // You can perform actions with the entered data here.
    // For example, send the data to a server or perform local processing.
    console.log("Name:", this.state.name);
    console.log("Room Number:", this.state.roomNumber);
    console.log("Problem Type:", this.state.problemType);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleNameChange}
          value={this.state.name}
        />
        <Text>Room Number:</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleRoomNumberChange}
          value={this.state.roomNumber}
        />
        <Text>Type of Problem:</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleProblemTypeChange}
          value={this.state.problemType}
        />
        <SwipeButton
          title="Join Queue"
          onSwipeSuccess={this.submitForm}
          containerStyles={styles.buttonContainer}
        />
      </View>
    );
  }
}

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
  buttonContainer: {
    backgroundColor: "#3498db", // Background color of the entire button
    railBorderColor: "#ff0000",
    borderRadius: 10,
    padding: 10,
  },
});

// export const colors = {
//     backgroundBlack: '#191919',
//     mainRed: '#910307',
//     mainGray: '#9E9E9E',
//     white: '#FFFFFF',
//     black: '#000000'
//   };
export default QueEntry;
