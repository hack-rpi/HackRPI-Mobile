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
    backgroundColor: '#191919',
    padding: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    marginRight: 10,
  },
});

export default Settings;
