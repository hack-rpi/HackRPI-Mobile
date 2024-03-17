import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native"; // Import TouchableOpacity for touchable container
import { Feather } from "@expo/vector-icons";
import EventObject from "./EventObject";

const CalanderObject = ({
  workshop_Title,
  Time,
  Location,
  Presenter,
  Description,
  isRed,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <EventObject
        workshop_title={workshop_Title}
        time={Time}
        location={Location}
        presenter={Presenter}
        description={Description}
        isRed={isRed}
      />
      <View
        style={[
          styles.notifBox,
          {
            backgroundColor: isRed ? "black" : isActive ? "black" : "white",
            borderColor: isRed ? "red" : "white",
          },
        ]}
      >
        <Feather
          name={isActive ? "bell-off" : "bell"}
          size={30}
          color={isRed ? "red" : isActive ? "white" : "black"}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
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
  },
});

export default CalanderObject;
