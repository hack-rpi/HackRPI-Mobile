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
