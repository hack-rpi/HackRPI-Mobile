import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const NotificationOptions = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled(previousState => !previousState);
    // Implement functionality to manage notifications
  };

  const silenceNotifications = () => {
    // Code to silence notifications
    console.log('Notifications silenced');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Options</Text>

      {/* Enable/Disable Notifications */}
      <View style={styles.option}>
        <Text style={styles.optionText}>Enable Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#f00" }} // Red color for enabled track
          thumbColor={notificationsEnabled ? "#f00" : "#f4f3f4"} // Red color for thumb when enabled
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>
      
      {/* Silence Notifications Button */}
      <TouchableOpacity 
        style={[styles.button, !notificationsEnabled && styles.buttonDisabled]}
        onPress={silenceNotifications}
        disabled={!notificationsEnabled}
      >
        <Text style={styles.buttonText}>
          {notificationsEnabled ? 'Silence Notifications' : 'Unsilence Notifications'}
        </Text>
      </TouchableOpacity>
      
      {/* Additional options can be added here */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Dark background color
  },
  title: {
    fontSize: 24,
    color: '#fff', // White text color
    marginBottom: 24,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#222', // Darker background for the option
    borderRadius: 20, // Rounded corners for the options
  },
  optionText: {
    fontSize: 18,
    color: '#fff', // White text color
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', // White text color
    textAlign: 'center',
  },
  button: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#f00', // Red background color for the button
    borderRadius: 20, // Rounded corners for the button
  },
  buttonDisabled: {
    backgroundColor: '#555', // Grayed out background for disabled state
  },
});

export default NotificationOptions;
