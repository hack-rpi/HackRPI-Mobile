import React from "react";
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// the icon should come in from app.js and be passed in as arg i think

export default function InfoButton ({circleColor, text, icon, func}) {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttonContents} onPress={func}>
          <View style={styles.iconContainer} backgroundColor={circleColor} >
            <FontAwesomeIcon icon={icon} style={styles.textStyle} size={40} />
          </View>
          <Text style={styles.textStyle} >{text}</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 15,
    width: 300,
    height: 90,
    backgroundColor: "#1E262D",
  },
  buttonContents: {
    margin: 5,// change later?
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    
  },
  textStyle: {
    color: '#fff',
    fontSize: 40,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginRight: 15,
  }
});