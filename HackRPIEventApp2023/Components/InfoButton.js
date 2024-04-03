import React from "react";
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// the icon should come in from app.js and be passed in as arg i think

export default function InfoButton ({color, text, icon, func}) {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttonContents} onPress={func}>
          <FontAwesomeIcon icon="fa-solid fa-map" style={styles.textStyle} size={30} />
          <Text style={styles.textStyle} >{text}</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 15,
    width: 300,
    height: 80,
    backgroundColor: "#1E262D",
  },
  buttonContents: {
    margin: 5,// change later?
    flex: 1,
    flexDirection: "row",
  },
  textStyle: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 32,
    height: 32,
  },
});