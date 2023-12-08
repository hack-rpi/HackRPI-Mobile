import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LanguageSettings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Language Settings</Text>
      <View style={styles.optionsContainer}>
        {/* Language Options */}
        <Text style={styles.option}>Language Options:</Text>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.language}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.language}>Spanish</Text>
        </TouchableOpacity>
        {/* Add more language buttons here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // black background as seen in the image
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // white color text for the title
    marginBottom: 20,
  },
  optionsContainer: {
    alignSelf: 'stretch', // Stretch container to full width
    alignItems: 'flex-start', // Align items to the start (left)
    padding: 20,
  },
  option: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // white color text for options
    marginBottom: 10,
  },
  languageButton: {
    backgroundColor: '#fff', // white background for language buttons
    borderRadius: 20, // rounded corners as seen in the image
    paddingVertical: 10, // vertical padding for the buttons
    paddingHorizontal: 20, // horizontal padding for the buttons
    marginBottom: 10, // margin bottom for spacing between buttons
    width: '100%', // make button stretch in width
    shadowColor: '#000', // shadow for button to make it pop a bit
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  language: {
    fontSize: 16,
    color: '#333', // dark text for the button for better contrast on white
  },
});

export default LanguageSettings;
