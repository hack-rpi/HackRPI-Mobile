import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import EventObject from "./EventObject"; // Import the EventObject component

//reusable component that ties an event object to it's notification bell
const CalanderObject = ({
  workshop_Title,
  Time,
  Location,
  Presenter,
  Description,
  isRed,
}) => {
  const [isActive, setIsActive] = useState(false); // Define isActive state

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <View style={styles.container}>
      <EventObject
        workshop_title={workshop_Title}
        time={Time}
        location={Location}
        presenter={Presenter}
        description={Description}
        isRed={isRed} //this line is use for hardcode
        //isRed={checkCondition()} -> This line will be use instead if we implement checkCondition() function
      />
      <View
        style={styles.notifBox}
        backgroundColor={isRed ? "black" : isActive ? "black" : "white"}
        borderColor={isRed ? "red" : "white"}>
        <Feather
          name={isActive ? "bell-off" : "bell"}
          size={30}
          color={isRed ? "red" : isActive ? "white" : "black"}
          onPress={handleClick}
          zIndex={2}
          // Add onPress to handle click
        />
      </View>
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
    height: 150,
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

export default CalanderObject;