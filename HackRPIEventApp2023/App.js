import React, { useState, useEffect } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const Timer = ({ percentage, circleSize, timeUnit, timeRemaining }) => {
  return (
    <View style={styles.timerContainer}>
      <View style={[styles.circle, { width: circleSize, height: circleSize, borderRadius: circleSize / 2 }]}>
        <Text style={styles.timerText}>{timeRemaining}</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <ProgressBar
          progress={timeRemaining  / 60} // Set progress based on percentage
          width={circleSize}
          height={10}
          color={'#00FF00'}
          borderColor={'#FFFFFF'}
          unfilledColor={'#808080'}
          borderRadius={0}
        />
      </View>
    </View>
  );
};


export default function App() {
  const totalSeconds = 6048000; // 1 hour in seconds
  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);

  // Get screen dimensions
  const { width } = Dimensions.get('window');

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

  // Calculate the circle size based on screen width
  const circleSize = width * 0.2; // Adjust the multiplier as needed

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>HackRPI X</Text>
        <Text style={styles.subtitle}>November 4-5</Text>
      </View>

      {/* Add space between header and circles */}
      <View style={{ marginTop: 20 }}></View>

      <View style={styles.circleContainer}>
        <View style={styles.circleWrapper}>
          <Timer
            percentage={((totalSeconds - secondsRemaining) / totalSeconds) * 100}
            circleSize={circleSize}
            timeUnit="days"
            timeRemaining={days}
          />
        </View>
        <View style={styles.circleWrapper}>
          <Timer
            percentage={((totalSeconds - secondsRemaining) / totalSeconds) * 100}
            circleSize={circleSize}
            timeUnit="hours"
            timeRemaining={hours}
          />
        </View>
        <View style={styles.circleWrapper}>
          <Timer
            percentage={((totalSeconds - secondsRemaining) / totalSeconds) * 100}
            circleSize={circleSize}
            timeUnit="minutes"
            timeRemaining={minutes}
          />
        </View>
        <View style={styles.circleWrapper}>
          <Timer
            percentage={((totalSeconds - secondsRemaining) / totalSeconds) * 100}
            circleSize={circleSize}
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
    backgroundColor: '#191919', // Updated background color
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  circle: {
    width: '100%',
    height: '100%',
    borderRadius: 100 / 2,
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
    marginTop: 10, // Adjust the marginTop to control the space between circles and header
  },
  title: {
    fontSize: 36, // Adjust the font size as needed
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 18, // Adjust the font size as needed
    color: 'white',
  },
  timerContainer: {
    alignItems: 'center',
  },
  progressBarContainer: {
    marginTop: 10, // Adjust marginTop as needed to control the space between the circle and progress bar
  },
});

