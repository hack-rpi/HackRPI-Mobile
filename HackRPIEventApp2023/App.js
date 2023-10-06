import React, { useState, useEffect } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { Bar as ProgressBar } from 'react-native-progress';

import clockStyles from 'clockStyles.css';

const Timer = ({ percentage, circleSize, timeUnit, timeRemaining }) => {
  return (
    <View style={clockStyles.timerContainer}>
      <View style={[clockStyles.circle, { width: circleSize, height: circleSize, borderRadius: circleSize / 2 }]}>
        <Text style={clockStyles.timerText}>{timeRemaining}</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <ProgressBar
          progress={timeRemaining / 60} // Set progress based on percentage
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

const Circle = ({ size, percentage }) => {
  return (
    <View style={[clockStyles.circle, { width: size, height: size }]}>
      <Timer percentage={percentage} circleWidth={size.toString()} />
    </View>
  );
};

export default function App() {
  // Calculate the target date (November 4) in EDT
  const targetDate = new Date('2023-11-04T12:00:00');
  const currentDate = new Date();
  const totalSeconds = Math.max(Math.floor((targetDate - currentDate) / 1000), 0);

  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);

  // Get screen dimensions
  const { width } = Dimensions.get('window');

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
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(secondsRemaining / (3600 * 24));
  const hours = Math.floor((secondsRemaining % (3600 * 24)) / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const remainingSeconds = secondsRemaining % 60;

  // Format the countdown timer values according to the system timezone
  const formattedDays = new Intl.NumberFormat([], { minimumIntegerDigits: 1 }).format(days);
  const formattedHours = new Intl.NumberFormat([], { minimumIntegerDigits: 1 }).format(hours);
  const formattedMinutes = new Intl.NumberFormat([], { minimumIntegerDigits: 1 }).format(minutes);
  const formattedSeconds = new Intl.NumberFormat([], { minimumIntegerDigits: 1 }).format(remainingSeconds);

  // Calculate the circle size based on screen width
  const circleSize = width * 0.2; // Adjust the multiplier as needed

  return (
    <View style={clockStylesstyles.container}>
      <View style={clockStyles.header}>
        <Text style={clockStyles.title}>HackRPI X</Text>
        <Text style={clockStyles.subtitle}>November 4-5</Text>
      </View>

      {/* Add space between header and circles */}
      <View style={{ marginTop: 20 }}></View>

      <View style={clockStyles.circleContainer}>
        <View style={clockStyles.circleWrapper}>
          <Timer
            percentage={((totalSeconds - secondsRemaining) / totalSeconds) * 100}
            circleSize={circleSize}
            timeUnit="days"
            timeRemaining={formattedDays}
          />
        </View>
        <View style={clockStyles.circleWrapper}>
          <Timer
            percentage={((totalSeconds - secondsRemaining) / totalSeconds) * 100}
            circleSize={circleSize}
            timeUnit="hours"
            timeRemaining={formattedHours}
          />
        </View>
        <View style={clockStyles.circleWrapper}>
          <Timer
            percentage={((totalSeconds - secondsRemaining) / totalSeconds) * 100}
            circleSize={circleSize}
            timeUnit="minutes"
            timeRemaining={formattedMinutes}
          />
        </View>
        <View style={clockStyles.circleWrapper}>
          <Timer
            percentage={((totalSeconds - secondsRemaining) / totalSeconds) * 100}
            circleSize={circleSize}
            timeUnit="seconds"
            timeRemaining={formattedSeconds}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}