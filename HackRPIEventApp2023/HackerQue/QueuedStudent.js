import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CircleProgress from "../Components/CircleProgress";
import calculateTimeDifference from "../HackerQue/Time_Dif";

function QueCard() {
  const Start_Time = "2024-11-10T10:00:00Z";
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
    <View style={[styles.textHeader,{alignItems: 'center'}]} >
      <View>
        <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>
      </View>
      <View style={[styles.subBox2,{alignItems: 'center'}]}>
      <View style={[styles.subBox, styles.textBox ,{alignItems: 'center'}]}>
      <Text style={[styles.textBody, { textAlign: 'center',fontSize: 25 }]}>Your queue position: {'\n'}{'\n'}500 </Text>
        </View>
        <Text> {'\n'}</Text>
        <View style={[styles.subBox1, styles.textBox ,{alignItems: 'center'}]}>
      <Text style={[styles.textBody, { textAlign: 'center',color: '#25303C', fontSize: 25  }]}>Time in Queue: {'\n'}{Time_In_Queue}</Text>
        </View>
      </View>
      <View style={[styles.row, {alignItems: 'center'}]}>
        <View>
          <Text style={styles.textBody}> </Text>
        </View>
      </View>
      {/* Add a button to pause the timer */}
      <View style={{ alignItems: "center" }}>
      <TouchableOpacity style={[styles.button, {backgroundColor: '#BE1313', width: 330, padding: 14}]} onPress={handleLeaveQueue}>
        <Text style={styles.buttonText}>Leave Queue</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, {backgroundColor: '#74B7EF', width: 330, alignItems: 'center' }]} onPress={handlePause}>
         <Text style={[styles.buttonText, {color: 'black', padding: 5,  width: 140, alignItems: 'center'}]}>
         {isPaused ? 'Resume' : 'Pause Position'}
         </Text>
      </TouchableOpacity>
      </View>



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
    backgroundColor: "#05A55C",
  },
  subBox1: {
    width: 150,
    height: 200,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8A13A",
  },
  heading: {
    width: 300,
    height: 50,
    backgroundColor: "#910307",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1,
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
    fontWeight: "bold",
    fontSize: 30,
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
  textBox: {
    width: 300,
    height: 130,
    borderWidth: 1,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    borderColor: '#fff', // Add your desired color for the border
  },
  
});

export default QueCard;
