import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// Reusable component that creates the main content box for an event
const EventObject = ({
  workshopTitle,
  time,
  location,
  description,
  hasRedBackground,
}) => {
  // State to manage the expanded/collapsed state of the event box
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the expansion state on TouchableOpacity press
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={toggleExpansion}>
      <View
        style={[
          styles.rectangle,
          expanded && styles.expanded,
          hasRedBackground && styles.redBackground,
        ]}
      >
        {/* Content of the event box */}
        <View>
          <Text style={styles.workshopTitle}>{"  " + workshopTitle}</Text>
          <Text style={styles.time}>{"  " + time}</Text>
          <Text style={styles.location}>{"  " + location}</Text>
          {expanded && (
            <Text style={styles.description}>{"  " + description}</Text>
          )}
        </View>

        {/* Icon container for the expand/collapse icon */}
        <View style={styles.iconContainer}>
          <AntDesign
            name={expanded ? "up" : "down"}
            size={24}
            color="black"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  rectangle: {
    width: 250,
    height: 100,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "left",
    marginBottom: 0,
    backgroundColor: "white",
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  expanded: {
    height: 120,
  },
  redBackground: {
    backgroundColor: "red",
  },
  workshopTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  time: {
    fontSize: 14,
    textAlign: "left",
  },
  location: {
    fontSize: 14,
    textAlign: "left",
  },
  description: {
    marginTop: 10,
    textAlign: "left",
  },
});

export default EventObject;
