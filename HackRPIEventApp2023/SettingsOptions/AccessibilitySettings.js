import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AccessibilityOptions = () => {
  const [colorBlindMode, setColorBlindMode] = useState(false);

  const toggleColorBlindMode = () => {
    setColorBlindMode(!colorBlindMode);
    // Implement functionality to apply color blind mode
    // For example, you might apply a different color scheme
    // or modify colors in your app based on the colorBlindMode state
  };

  return (
    <View style={styles.container}>
      <Text>Accessibility Options</Text>
      <TouchableOpacity onPress={toggleColorBlindMode}>
        <Text style={styles.option}>
          Color Blind Mode: {colorBlindMode ? 'On' : 'Off'}
        </Text>
      </TouchableOpacity>
      {/* Other suboptions and functionality here */}
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
