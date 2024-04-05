import React from "react";
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function InfoButton ({circleColor, text, icon, func}) {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttonContents} onPress={func}>
          <View style={styles.iconContainer} backgroundColor={circleColor} >
            <FontAwesomeIcon icon={icon} style={styles.textStyle} size={25} />
          </View>
          <Text style={styles.textStyle} adjustsFontSizeToFit={true} flex={1}>{text}</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 15,
    width: 266,
    height: 55,
    backgroundColor: "#1E262D",
  },
  buttonContents: {
    margin: 5,// change later?
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    
  },
  textStyle: {
    fontFamily: "sans-serif",
    color: '#fff',
    fontSize: 35,
  },

  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginRight: 15,
  }
});

//change font later