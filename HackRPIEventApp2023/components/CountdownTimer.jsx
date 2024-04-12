import React, { useState, useEffect } from "react";
import { StatusBar, Dimensions } from "react-native";
import { StyleSheet, View, Text } from "react-native";
// import CircleProgress from "./CircleProgress";//

const Timer = ({circleSize, timeUnit, timeRemaining }) => {
  //Got rid of percentage from input, but code still exists in other file if we want it
  let backgroundColor;
  if (timeUnit === "Days") {
    backgroundColor = "#EE352E";
  } else if (timeUnit === "Hours") {
    backgroundColor = "#F8A13A";
  } else if (timeUnit === "Minutes") {
    backgroundColor = "#05A65C";
  } else if (timeUnit === "Seconds") {
    backgroundColor = "#0158A9";
  }

  //Setting colors based on which circle, to subway colors matching website

  return (
    <View
      style={[
        styles.circle,
        { width: circleSize, height: circleSize, borderRadius: circleSize / 2, backgroundColor },
      ]}
    >
      {/* <CircleProgress percentage={50} circleWidth={circleSize} /> */}
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{timeRemaining}</Text>
        <Text
          style={[
            styles.unitText,
            { fontSize: timeUnit.length > 6 ? 10 : 14 },
          ]}
        >
        </Text>
      </View>
    </View>
  );
};


const CircleLetter = ({ circleSize,text }) => {
  let backgroundColor;
  if (text === "D") {
    backgroundColor = "#EE352E";
  } else if (text === "H") {
    backgroundColor = "#F8A13A";
  } else if (text === "M") {
    backgroundColor = "#05A65C";
  } else if (text === "S") {
    backgroundColor = "#0158A9";
  }
  return (
    <View
      style={[
        styles.circle,
        { width: circleSize, height: circleSize, borderRadius: circleSize / 2, backgroundColor },
      ]}
    >
      {/* <CircleProgress percentage={50} circleWidth={circleSize} /> */}
      <View style={styles.timerContainer}>
        <Text style={styles.circleText}>{text}</Text>
      </View>
    </View>
  );
};

export default function CountdownTimer() {
  // Calculate the target date (November 4) in EDT
  const targetDate = new Date("2024-11-02T12:00:00");
  const currentDate = new Date();
  const totalSeconds = Math.max(Math.floor((targetDate - currentDate) / 20), 0);
  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);

  // Get screen dimensions
  const { width } = Dimensions.get("window");
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsRemaining((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(interval); // Clear the interval when countdown reaches 0
          return 0;
        }
      });
    }, 20);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(secondsRemaining / 50 / (3600 * 24));
  const hours = Math.floor(((secondsRemaining / 50) % (3600 * 24)) / 3600);
  const minutes = Math.floor(((secondsRemaining / 50) % 3600) / 60);
  const remainingSeconds = (secondsRemaining / 50) % 60;

  // Format the countdown timer values according to the system timezone
  const formattedDays = new Intl.NumberFormat([], {
    minimumIntegerDigits: 1,
  }).format(days);
  const formattedHours = new Intl.NumberFormat([], {
    minimumIntegerDigits: 1,
  }).format(hours);
  const formattedMinutes = new Intl.NumberFormat([], {
    minimumIntegerDigits: 1,
  }).format(minutes);
  const formattedSeconds = new Intl.NumberFormat([], {
    maximumIntegerDigits: 2,
  }).format(Math.round(remainingSeconds));

  // Calculate the circle size based on screen width
  const circleSize = width * 0.2; // Adjust the multiplier as needed

  return (
    <>
      <View style={styles.textContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>HackRPI XI</Text>
        </View>
      </View>

      {/* Add space between header and circles */}
      <View style={{ marginTop: 20 }}></View>
      <View style={styles.totalContainer}>
      <View style={styles.circleContainer}>
        <View style={styles.circleWrapper}>
          <Timer
            percentage={(days / 30) * 100}
            circleSize={circleSize}
            timeUnit="Days"
            timeRemaining={formattedDays}
          />
        </View>
        <View style={styles.circleWrapper}>
          <Timer
            percentage={(hours / 24) * 100}
            circleSize={circleSize}
            timeUnit="Hours"
            timeRemaining={formattedHours}
          />
        </View>
        <View style={styles.circleWrapper}>
          <Timer
            percentage={(minutes / 60) * 100}
            circleSize={circleSize}
            timeUnit="Minutes"
            timeRemaining={formattedMinutes}
          />
        </View>
        <View style={styles.circleWrapper}>
          <Timer
            percentage={(remainingSeconds / 60) * 100}
            circleSize={circleSize}
            timeUnit="Seconds"
            timeRemaining={formattedSeconds}
          />
        </View>
      </View>
      <StatusBar style="auto" />
      

      {/* Add space between header and circles */}
      <View style={{ marginTop: 10 }}></View>

      <View style={styles.circleContainer}>
        <View style={styles.circleWrapper}>
          <CircleLetter
            circleSize={circleSize}
            text="D"
          />
        </View>
        <View style={styles.circleWrapper}>
        <CircleLetter
            circleSize={circleSize}
            text="H"
          />
        </View>
        <View style={styles.circleWrapper}>
        <CircleLetter
            circleSize={circleSize}
            text="M"
          />
        </View>
        <View style={styles.circleWrapper}>
          <CircleLetter
            circleSize={circleSize}
            text="S"
          />
        </View>
        </View>

      <StatusBar style="auto" />
    


{/* Actual circles with numbers below, not just labels */}
    </View>
  </>
  );
}


//
//justify content for 1 of circles uses space-around, but the other uses smth else this is related to issue
//

///
const styles = StyleSheet.create({
  circleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  textContainer: {
    height: 50,
    alignItems: "center",
    paddingTop: 10,
  },
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    // paddingTop: 20,
    paddingHorizontal: 20,
  },
  totalContainer:{
    display:"flex",
    width:"100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  circleContainer: {
    display:"flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width:"95%",
    gap: 5,
  },
  circle: {
    width: "100%",
    height: "100%",
    borderRadius: 100 / 2,
    backgroundColor: "#27303B",
    alignItems: "center",
    justifyContent: "center",
  },
  timerText: {
    fontSize: 30,
    paddingTop: 15,//bad way to do this... welcome to better solution because idk what im doing
    fontWeight: "bold",
    color: "white",
  },
  unitText: {
    marginTop: 2,
    color: "white",
  },
  timerContainer: {
    position: "absolute",
    alignItems: "stretch",
  },
  circleWrapper: {
    marginHorizontal: 20, // Adjust this value to increase or decrease the space between circles
    // marginTop: 10, // Adjust the marginTop to control the space between circles and header
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 18, // Adjust the font size as needed
    color: "white",
  },
});
