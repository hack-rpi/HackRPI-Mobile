import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import EventObject from "./EventObject"; // Import the EventObject component
import { useNavigation } from '@react-navigation/native';

//reusable component that ties an event object to it's notification bell
const HackerInfo = ({
  Hacker_Name,
  Table,
  BriefDescription,
  Description,
  isRed
}) => {
  const [isActive, setIsActive] = useState(false); // Define isActive state

  const navigation = useNavigation();

  const handleCheckmarkClick = () => {
    // Navigate to AnotherPage component
    navigation.navigate('AnotherPage');
  }

  const handleClick = () => {
    setIsActive(!isActive);
  };

  // const checkCondition = () => {
  //   // Implement later, if the event is currently happening, return true.
  //   return true;
  // };

  return (
    <View style={styles.container}>
      <EventObject
        Hacker_Name={Hacker_Name}
        Table={Table}
        BriefDescription={BriefDescription}
        Description={Description}
        isRed={isRed}
      />
      <View
        style={styles.notifBox}
        backgroundColor={isRed ? "black" : isActive ? "black" : "white"}
        borderColor={isRed ? "red" : "white"}>
        <Feather
          name="check"
          size = {30}
          color={"red"}
          onPress={handleCheckmarkClick}
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

export default HackerInfo;
