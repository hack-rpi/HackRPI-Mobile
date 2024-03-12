import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
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
    <View style={styles.container}>
      <EventObject
        workshop_title={workshop_Title}
        time={Time}
        location={Location}
        presenter={Presenter}
        description={Description}
        isRed={isRed}
      />
      <TouchableOpacity onPress={handleClick} style={styles.notifBox}>
        <Feather
          name={isActive ? "bell-off" : "bell"}
          size={30}
          color={isActive ? "red" : isRed ? "red" : "black"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  notifBox: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderRadius: 30,
    padding: 10,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});

export default CalanderObject;
