import React from "react";
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

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
    borderRadius: width * 0.03,
    width: width * 0.75,
    height: height * 0.075,
    backgroundColor: "#1E262D",
  },
  buttonContents: {
    margin: width * 0.01,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    
  },
  textStyle: {
    fontFamily: "sans-serif",
    color: '#fff',
    fontSize: width * 0.1,
  },

  iconContainer: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.12,
    alignItems: "center",
    justifyContent: "center",
    margin: width * 0.02,
    marginRight: width * 0.05,
  }
});

//change font later