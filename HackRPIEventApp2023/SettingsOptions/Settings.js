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
        title="Acessability Settings"
        onPress={() => navigation.navigate('AcessibilitySettings')}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SettingsPage;