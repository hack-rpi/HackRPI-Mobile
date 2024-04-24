import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const scaleValue = new Animated.Value(1);

  useEffect(() => {
    // Simulate checking for token or user authentication status
    setTimeout(() => {
      setIsCheckingAuth(false);
    }, 2000);
  }, []);

  const navigateToScreen = (screen) => () => {
    Animated.sequence([
      Animated.timing(scaleValue, { toValue: 0.95, duration: 150, useNativeDriver: true }),
      Animated.timing(scaleValue, { toValue: 1, duration: 150, useNativeDriver: true }),
    ]).start(() => {
      navigation.navigate(screen);
    });
  };

  if (isCheckingAuth) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Checking authentication...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to HackRPI!</Text>
      <AnimatedButton title="Login as Mentor" onPress={navigateToScreen('MentorMainApp')} scaleValue={scaleValue} />
      <AnimatedButton title="Continue as Hacker" onPress={navigateToScreen('HackerMainApp')} scaleValue={scaleValue} />
    </View>
  );
};

const AnimatedButton = ({ title, onPress, scaleValue }) => (
  <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  </Animated.View>
);


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
    },
    button: {
      backgroundColor: 'green',
      padding: 15,
      borderRadius: 5,
      marginTop: 10,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
  });

export default LoginPage;
