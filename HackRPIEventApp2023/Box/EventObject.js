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
        <Text style={styles.workshop_title}>{workshop_title}</Text>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.location}>{"Location: " +location}</Text>
          <Text style={styles.presenter}>{"Presenter: " +presenter}</Text>
          {expanded && <Text style={styles.description}>{"\t" + description}</Text>}
        </View>
        <View style={[styles.iconContainer, expanded &&{top: 15}]}>
          <AntDesign name={expanded ? "up" : "down"} size={24} color="black"/>
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
    left: 130,
    top: 5,
  },
  expanded: {
    height: 300, // Adjust the height as needed
  },
  redBackground: {
    backgroundColor: "red",
  },

  workshop_title: {
    left:10,
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    left:10,
    fontSize: 14,
  },
  location: {
    left:10,
    fontSize: 14,
  },
  presenter: {
    left:10,
    fontSize: 14,
  },
  description: {
    left:10,
    fontSize: 14,
    marginTop: 10,
    marginRight: 10,
  },
});

export default EventObject;
