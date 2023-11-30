import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const SettingsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Accessibility Settings"
        onPress={() => navigation.navigate('AccessibilitySettings')}
      />
      <Button
        title="Profile Customization"
        onPress={() => navigation.navigate('ProfileCustomization')}
      />
      <Button
        title="Language Settings"
        onPress={() => navigation.navigate('LanguageSettings')}
      />
      <Button
        title="Report a Bug "
        onPress={() => navigation.navigate('Report')}
      />
      <Button
        title="Notification Settings"
        onPress={() => navigation.navigate('NotificationSettings')}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
});

export default SettingsPage;