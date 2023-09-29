import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

const Timer = ({ percentage, circleSize, timeUnit, timeRemaining }) => {
  return (
    <View style={[styles.circle, { width: circleSize, height: circleSize, borderRadius: circleSize / 2 }]}>
      <Text style={styles.timerText}>{timeRemaining}</Text>
    </View>
  );
};




export default function App() {
  const totalSeconds = 6048000; // 1 hour in seconds
  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsRemaining(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(interval); // Clear the interval when countdown reaches 0
          return 0;
        }
      });
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(secondsRemaining / (3600 * 24));
  const hours = Math.floor((secondsRemaining % (3600 * 24)) / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const remainingSeconds = secondsRemaining % 60;

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circleWrapper}>
          <Timer
            percentage={((totalSeconds - secondsRemaining) / totalSeconds) * 100}
            circleSize={200}
            timeUnit="days"
            timeRemaining={days}
          />
        </View>
        <View style={styles.circleWrapper}>
          <Timer
            percentage={((totalSeconds - secondsRemaining) / totalSeconds) * 100}
            circleSize={200}
            timeUnit="hours"
            timeRemaining={hours}
          />
        </View>
        <View style={styles.circleWrapper}>
          <Timer
            percentage={((totalSeconds - secondsRemaining) / totalSeconds) * 100}
            circleSize={200}
            timeUnit="minutes"
            timeRemaining={minutes}
          />
        </View>
        <View style={styles.circleWrapper}>
          <Timer
            percentage={((totalSeconds - secondsRemaining) / totalSeconds) * 100}
            circleSize={200}
            timeUnit="seconds"
            timeRemaining={remainingSeconds}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  circle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  circleWrapper: {
    marginHorizontal: 20, // Adjust this value to increase or decrease the space between circles
  },
});