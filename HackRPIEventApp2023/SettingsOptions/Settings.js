import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SettingsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <View style={styles.buttonContainer}>
        <Button
          title="Accessibility Settings"
          color = "white"
          onPress={() => navigation.navigate('AccessibilitySettings')}
        />
        <Feather name="arrow-right" size={24} color="white" style={styles.icon} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Profile Customization"
          color = "white"
          onPress={() => navigation.navigate('ProfileCustomization')}
        />
        <Feather name="arrow-right" size={24} color="white" style={styles.icon} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Language Settings"
          color = "white"
          onPress={() => navigation.navigate('LanguageSettings')}
        />
        <Feather name="arrow-right" size={24} color="white" style={styles.icon} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Report a Bug "
          color = "white"
          onPress={() => navigation.navigate('Report')}
        />
        <Feather name="arrow-right" size={24} color="white" style={styles.icon} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Notification Settings"
          color = "white"
          onPress={() => navigation.navigate('NotificationSettings')}
        />
        <Feather name="arrow-right" size={24} color="white" style={styles.icon} />
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginLeft: 10,
  },
});

export default SettingsPage;