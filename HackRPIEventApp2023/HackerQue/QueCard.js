import React from "react";
import { View, Text, StyleSheet } from "react-native";

function QueCard() {
  return (
    <View style={styles.box}>
      {/* Inner View for heading */}
      <View style={styles.heading}>
        <Text style={styles.textHeader}>Issue: HTML</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.subBox}>
          <View style={styles.circleTemp}></View>
          <Text style={styles.textBody}> Que </Text>
        </View>
        <View style={styles.subBox}>
          <Text style={styles.textHeader}> TIQ </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.subBox}>
          <Text style={styles.textBody}> wojfwoaiejf:</Text>
        </View>
        <View style={styles.subBox}>
          <Text style={styles.textBody}> Position:</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 300,
    height: 350,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: "#191919",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
  },
  subBox: {
    width: 150,
    height: 200,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
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
  circleTemp: {
    width: 130,
    height: 130,
    borderRadius: 100,
    margin: 20,
    backgroundColor: "#FFFFFF",
  },
  textHeader: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  textBody: {
    color: "#ffffff",
    fontSize: 20,
  },
});

export default QueCard;
