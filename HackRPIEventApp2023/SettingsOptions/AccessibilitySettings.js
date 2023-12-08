import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AccessibilityOptions = () => {
  const [colorBlindMode, setColorBlindMode] = useState(false);
  const [fontSize, setFontSize] = useState(16); // Initial font size

  const toggleColorBlindMode = () => {
    setColorBlindMode(!colorBlindMode);
    // Additional functionality to apply color blind mode
  };

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    if (fontSize > 2) {
      setFontSize(fontSize - 2);
    }
  };

  return (
    <View style={styles.container}>
      {/* Toggle Color Blind Mode */}
      <TouchableOpacity style={[styles.button, colorBlindMode ? styles.buttonActive : null]} onPress={toggleColorBlindMode}>
        <Text style={[styles.buttonText, colorBlindMode ? styles.buttonTextActive : null]}>
          Color Blind Mode: {colorBlindMode ? 'On' : 'Off'}
        </Text>
      </TouchableOpacity>
      
      {/* Increase Font Size */}
      <TouchableOpacity style={styles.button} onPress={increaseFontSize}>
        <Text style={styles.buttonText}>Increase Font Size</Text>
      </TouchableOpacity>
      
      {/* Decrease Font Size */}
      <TouchableOpacity style={styles.button} onPress={decreaseFontSize}>
        <Text style={styles.buttonText}>Decrease Font Size</Text>
      </TouchableOpacity>
      
      {/* Example Text using the adjusted font size */}
      <Text style={{ fontSize: fontSize, marginTop: 20, color: '#333' }}>
        Example Text with Adjusted Font Size
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Background color similar to the image
  },
  button: {
    borderRadius: 20,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff', // White background for the button
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#333', // Text color for buttons
    fontWeight: 'bold', // Bold font weight as seen in the image
  },
  buttonActive: {
    backgroundColor: '#f00', // Red background for the active state
  },
  buttonTextActive: {
    color: '#fff', // White text color for the active state
  },
});

export default AccessibilityOptions;
