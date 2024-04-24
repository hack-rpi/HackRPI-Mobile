import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to HackRPI!</Text>
      {/* Other UI elements */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MentorMainApp')}>
        <Text style={styles.buttonText}>Login as Mentor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HackerMainApp')}>
        <Text style={styles.buttonText}>Continue as Hacker</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
