import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CircleProgress from "../Components/CircleProgress";
import calculateTimeDifference from "../HackerQue/Time_Dif";

function QueCard() {
  const Start_Time = "2023-11-10T10:00:00Z";
  const Position = 20;
  const Total = 100;
  const [Time_In_Queue, setTimeInQueueHours] = useState(
    calculateTimeDifference(Start_Time)
  );
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Update the time difference every second if not paused
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setTimeInQueueHours(calculateTimeDifference(Start_Time));
      }
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleLeaveQueue = () => {
    // Add logic to handle leaving the queue
  };

  return (
    <View style={styles.box}>
      <View style={styles.heading}>
        <Text style={styles.textHeader}>Your Position in Queue</Text>
      </View>
      <View style={styles.row}>
        
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
      {/* Add a button to pause the timer */}
      <TouchableOpacity style={styles.button} onPress={handleLeaveQueue}>
        <Text style={styles.buttonText}>Leave Queue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {backgroundColor: '#74B7EF'}]} onPress={handlePause}>
         <Text style={[styles.buttonText, {color: 'black'}]}>
         {isPaused ? 'Resume' : 'Pause Position'}
         </Text>
      </TouchableOpacity>


      {/* Add a button to leave the queue */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 300,
    height: 400,
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
    justifyContent: "center",
    alignItems: "center",
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
  button: {
    backgroundColor: "#FF0000", // Red color
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF", // White color
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default QueCard;
