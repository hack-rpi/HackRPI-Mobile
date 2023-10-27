import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";


// Reusable component that that creates the main content box
const InnerObject = ({
  food_title,
  store,
  time,
  location,
  description,
  imageSource,
}) => {

  return (
    
      <View
        style={[
          styles.rectangle,
         
        ]}>
        <View style={styles.textContainer}>
          <Text style={styles.food_title}>{food_title}</Text>
          <Text style={styles.store}>{store}</Text>
          <Text style={styles.description}>{description}</Text>
          {/* <Text style={styles.time}>{time}</Text> */}
          {/* <Text style={styles.location}>{location}</Text> */}
          <View style={styles.iconContainer}>
        </View>
        </View>

        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
        </View>

        
      </View>
   
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
    marginBottom: 10,
    backgroundColor: "white",
    flexDirection: 'row',
  },
  iconContainer: {
    left: 100,
    top: 10,
  },
  expanded: {
    height: 150, // Adjust the height as needed
  },

  textContainer: {
    top: 10,
    flex: 1,
    left: 12, 
    
    
  },

  food_title: {
    fontSize: 19,
    fontWeight: "bold",
  },
  store:{
    marginTop: 14,
    fontSize: 15,
  },
  time: {
    marginTop: 14,
    fontSize: 14,
  },
  location: {
    fontSize: 14,
  },
  description: {
    //marginTop: 10,

  },
  image: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    alignSelf: "center", // Center the image within the view
    borderRadius: 20,
    marginTop: 12,
  },
  imageContainer: {
    marginLeft: 10, // Add some space between text and image
    marginRight: 20,
  },
});

export default InnerObject;
