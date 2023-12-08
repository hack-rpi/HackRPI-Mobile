import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import AccessibilitySettings from "./AccessibilitySettings";
import LanguageSettings from "./LanguageSettings";
import NotificationSettings from "./NotificationSettings";
import ProfileCustomization from "./ProfileCustomization";
import Report from "./Report";


const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{title}</Text>
    <Feather name="arrow-right" size={24} color="white" />
  </TouchableOpacity>
);

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomButton
        title="Accessibility Settings"
        onPress={() => navigation.navigate('AccessibilitySettings')}
      />
      <CustomButton
        title="Profile Customization"
        onPress={() => navigation.navigate('ProfileCustomization')}
      />
      <CustomButton
        title="Language Settings"
        onPress={() => navigation.navigate('LanguageSettings')}
      />
      <CustomButton
        title="Report a Bug"
        onPress={() => navigation.navigate('Report')}
      />
      <CustomButton
        title="Notification Settings"
        onPress={() => navigation.navigate('NotificationSettings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#000', // Dark background color
    padding: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f00', // Red background for the button
    paddingVertical: 10, // Vertical padding for the button
    paddingHorizontal: 20, // Horizontal padding for the button
    borderRadius: 20, // Rounded corners for the button
    width: '100%', // Full width buttons
    marginBottom: 10, // Margin bottom for spacing
    justifyContent: 'space-between', // Space between the text and the icon
    shadowColor: '#000', // Shadow for the button
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white', // White text color for the button
    fontSize: 16, // Font size for the button text
    fontWeight: 'bold', // Bold font weight for the button text
  },
});

export default Settings;