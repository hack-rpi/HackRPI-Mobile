import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CircleProgress from "../Components/CircleProgress";
import calculateTimeDifference from "../HackerQue/Time_Dif";
import { useState, useEffect } from "react";

function QueCard() {
  const Start_Time = "2023-11-10T10:00:00Z";
  // ^^^ the time above is hardcode, replace it with  the time student enter the queue
  const Position = 80;
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
        <Text style={styles.textHeader}>Issue: HTML</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.subBox1}>
          <CircleProgress
            percentage={(Position / Total) * 100}
            circleWidth={150}/>
        </View>

        <View style={styles.subBox2}>
          <View style={styles.tiq_box}>
            <Text style={[styles.tiq_text]}>Time in Queue</Text>
          </View>
          <Text style={[styles.time]}>01:20:38</Text>  
          {/*The time is hardcode, replace the line above with this line if the start time is known :
          --->  <Text style={[styles.textHeader, { textAlign: 'center', lineHeight: 24 }]}>{Time_In_Queue}</Text> */}
          </View>
      </View>


      <View style={styles.row}>
        <View style={styles.subBox3}>
          <Text style={styles.textBody}>Position: {Position} </Text>
        </View>
        <View style={styles.subBox4}>
          <View style={styles.pause_box}>
            <Text style={[styles.pause_text]}>Pause</Text>
          </View>
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
  subBox1: {
    width: 130,
    height: 100,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  subBox2: {
    width: 200,
    height: 130,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
  },
  subBox3: {
    width: 170,
    height: 100,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  subBox4: {
    width: 150,
    height: 100,
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
    height: 100,
    borderRadius: 100,
    margin: 10,
    backgroundColor: "#FFFFFF",
  },
  textHeader: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  textBody: {
    color: "#ffffff",
    fontSize: 15,
  },
  tiq_box:{
    width: 150,
    height: 32,
    backgroundColor: "white",
    justifyContent: "center", // To vertically center the text
    alignItems: "center", // To horizontally center the text
    borderRadius: 8,
    borderWidth: 3,
    
  },
  tiq_text:{
    color:"#910307",
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 600,
    lineHeight: 24,
  },
  time:{
    color: "#ffffff",
    textAlign: 'center',
    marginTop: 10,
    fontSize: 25,
    letterSpacing: 1,
    lineHeight: 24,
    marginTop: 20,
    fontWeight: 400,
  },
  pause_box:{
    width: 100,
    height: 32,
    backgroundColor: "#910307",
    justifyContent: "center", // To vertically center the text
    alignItems: "center", // To horizontally center the text
    borderRadius: 8,
    borderWidth: 3,
    
  },

  pause_text:{
    color:"white",
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 600,
    lineHeight: 24,
  },



});

export default QueCard;
