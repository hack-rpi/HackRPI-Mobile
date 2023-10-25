import React from "react";
import { View, Text, StyleSheet } from "react-native";

function QueCard() {
  return (
    <View style={styles.box}>
      {/* Inner View for heading */}
      <View style={styles.heading}>
        <Text style={styles.textHeader}>Issue: HTML</Text>
      </View>
      <Text style={styles.textBody}> Position:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 300,
    height: 350,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: "#191919",
  },
  heading: {
    width: 300,
    height: 50,
    backgroundColor: "#910307",
    justifyContent: "center", // To vertically center the text
    alignItems: "center", // To horizontally center the text
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  textHeader: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  textBody: {
    color: "#191919",
    fontSize: 30,
  },
});

export default QueCard;
