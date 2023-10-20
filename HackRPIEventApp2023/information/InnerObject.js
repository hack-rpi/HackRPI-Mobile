import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// Reusable component that that creates the main content box
const InnerObject = ({
  food_title,
  time,
  location,
  description,
  imageSource,
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
          expanded ? styles.expanded : null
        ]}>
        <View>
          <Text style={styles.food_title}>{"  " + food_title}</Text>
          <Text style={styles.time}>{"  " +time}</Text>
          <Text style={styles.location}>{"  " +location}</Text>
          <Image source={imageSource} style={styles.image} />
          {expanded && <Text style={styles.description}>{"  " + description}</Text>}
          
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
    width: 250,
    height: 200,
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
    height: 200, // Adjust the height as needed
  },
  redBackground: {
    backgroundColor: "red",
  },

  food_title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    fontSize: 14,
  },
  location: {
    fontSize: 14,
  },
  description: {
    marginTop: 10,
  },
  image: {
    width: 100, // Adjust as needed
    height: 50, // Adjust as needed
    alignSelf: "center", // Center the image within the view
  },
});

export default InnerObject;
