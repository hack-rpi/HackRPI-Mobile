import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AccessibilityOptions = () => {
  const [colorBlindMode, setColorBlindMode] = useState(false);
  const [fontSize, setFontSize] = useState(16); // Initial font size

  const toggleColorBlindMode = () => {
    setColorBlindMode(!colorBlindMode);
    // Implement functionality to apply color blind mode
    // For example, you might apply a different color scheme
    // or modify colors in your app based on the colorBlindMode state
  };

  const increaseFontSize = () => {
    setFontSize(fontSize + 2); // Increase font size by 2 units (you can adjust this value)
  };

  const decreaseFontSize = () => {
    if (fontSize > 2) {
      setFontSize(fontSize - 2); // Decrease font size by 2 units (you can adjust this value)
    }
  };


  return (
    <View style={styles.container}>
      <Text>Accessibility Options</Text>
      {/* Toggle Color Blind Mode */}
      <TouchableOpacity onPress={toggleColorBlindMode}>
        <Text style={styles.option}>
          Color Blind Mode: {colorBlindMode ? 'On' : 'Off'}
        </Text>
      </TouchableOpacity>
      
      {/* Increase Font Size */}
      <TouchableOpacity onPress={increaseFontSize}>
        <Text style={styles.option}>Increase Font Size</Text>
      </TouchableOpacity>
      
      {/* Decrease Font Size */}
      <TouchableOpacity onPress={decreaseFontSize}>
        <Text style={styles.option}>Decrease Font Size</Text>
      </TouchableOpacity>
      
      {/* Other suboptions and functionality here */}
      
      {/* Example Text using the adjusted font size */}
      <Text style={{ fontSize: fontSize, marginTop: 20 }}>
        Example Text with Adjusted Font Size
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  option: {
    fontSize: 16,
    marginTop: 10,
    color: '#333', // You can adjust the color as needed
  },
});

export default AccessibilityOptions;
