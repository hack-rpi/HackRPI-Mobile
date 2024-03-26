import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from "react-native";
import checkIcon from "../assets/xRed.png";
import slideIcon from "../assets/chevron-right.png";
import QueCard from "./QueCard";

const QueEntry = ({ name, roomNumber, problemType }) => {
  const [inQue, setQue] = useState(false);
  const [stateName, setName] = useState("");
  const [stateRoomNumber, setRoomNumber] = useState("");
  const [stateProblemType, setProblemType] = useState("");

  const toggleQue = () => {
    if (!inQue) {
    }
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

    // add error checking for vals
    if (!inQue) {
      // enter que code
      console.log("Name:", stateName);
      console.log("Table #:", stateRoomNumber);
      console.log("Problem Type:", stateProblemType);
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
      <View style={{flex: 1}}>
        {inQue ? (
          <View>
            <QueCard></QueCard>
          </View>
        ) : (
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Text style={styles.text}>Name:</Text>
                <TextInput
                  style={styles.shortInput} 
                  onChangeText={handleNameChange}
                  value={stateName}
                />
              </View>
              <View style={[styles.inputWrapper, styles.tableInputWrapper]}>
                <Text style={styles.text}>Table #</Text>
                <TextInput
                  style={styles.tinyInput}
                  onChangeText={handleRoomNumberChange}
                  value={stateRoomNumber}
                />
              </View>
            </View>
            <Text style={styles.text}>Type of Problem:</Text>
            <TextInput
              style={styles.largeInput}
              onChangeText={handleProblemTypeChange}
              value={stateProblemType}
              multiline={true}
            />
          </View> 
        )}
      </View>
      <View style={{flex: 1, justifyContent: 'flex-start', marginTop:250}}>
      <TouchableOpacity style={styles.button} onPress={submitForm}>
        <Text style={styles.interfaceText}>{inQue ? "Exit Queue" : "Join Queue"}</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  interfaceText: {
    fontSize: 20,
    color: '#25303C',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  inputWrapper: {
    flex: 1,
    marginRight: 10,
  },
  tableInputWrapper: {
    flex: 2,
    marginLeft: 110,
  },
  container: {
    margin: 20,
    marginTop: 90, 
    marginBottom: 30,
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
    width: 170,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: "black",
  },
  tinyInput: {
    height: 60,
    width: 120, 
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
    marginBottom: 10,
    marginLeft: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: "black",
  },
  largeInput: {
    height: 180, 
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
  button: {
    borderRadius: 10,
    backgroundColor: '#88B63A',
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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