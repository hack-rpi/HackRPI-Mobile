import React from "react";
import { View, Text, StyleSheet } from "react-native";
//might need to remove circle progress
import CircleProgress from "../Components/CircleProgress";
import calculateTimeDifference from "../HackerQue/Time_Dif";
import { useState, useEffect } from "react";

function QueCard() {
  const Start_Time = "2023-11-10T10:00:00Z";
  const Position = 20;
  const Total = 100;
  const [Time_In_Queue, setTimeInQueueHours] = useState(
    calculateTimeDifference(Start_Time)
  );

  useEffect(() => {
    // Update the time difference every second
    const intervalId = setInterval(() => {
      setTimeInQueueHours(calculateTimeDifference(Start_Time));
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.box}>
      {/* Inner View for heading */}
      <View style={styles.heading}>
        <Text style={styles.textHeader}>trying</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.subBox}>
          <CircleProgress
            percentage={(Position / Total) * 100}
            circleWidth={130}
          />
        </View>
        <View style={styles.subBox}>
          <Text style={styles.textHeader}> TIQ: {Time_In_Queue}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.subBox}>
          <Text style={styles.textBody}> </Text>
        </View>
        <View style={styles.subBox}>
          <Text style={styles.textBody}> Position: {Position}</Text>
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
