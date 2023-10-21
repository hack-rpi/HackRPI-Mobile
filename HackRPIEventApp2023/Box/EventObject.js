import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { AntDesign } from "@expo/vector-icons";

// Reusable component that that creates the main content box
const EventObject = ({
  workshop_title,
  time,
  location,
  presenter,
  description,
  isRed,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={toggleExpansion}>
      <View
        style={[
          styles.rectangle,
          expanded ? styles.expanded : null,
          isRed ? styles.redBackground : null,
          expanded && { height: description.length/2 + 170 },
        ]}>
        <View>
          <Text style={styles.workshop_title}>{"  " + workshop_title}</Text>
          <Text style={styles.time}>{"  " +time}</Text>
          <Text style={styles.location}>{"  Location: " +location}</Text>
          <Text style={styles.presenter}>{"  Presenter: " +presenter}</Text>
          {expanded && <Text style={styles.description}>{"  description: " + 
          description}</Text>}
        </View>
        <View style={styles.iconContainer}>
          <AntDesign name={expanded ? "up" : "down"} size={24} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    width: 300,
    height: 150,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
    padding: 10,
    left: 10,
    justifyContent: "center",
    alignItems: "left",

    marginBottom: 0,
    backgroundColor: "white",
  },
  iconContainer: {
    left: 100,
    top: 10,
  },
  expanded: {
    height: 300, // Adjust the height as needed
  },
  redBackground: {
    backgroundColor: "red",
  },

  workshop_title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    fontSize: 14,
  },
  location: {
    fontSize: 14,
  },
  presenter: {
    fontSize: 14,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default EventObject;
