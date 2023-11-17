import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccessibilityOptions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.option}>Language Options:</Text>
      <Text style={styles.language}>English</Text>
      <Text style={styles.language}>Spanish</Text>
      {/* You can add more languages here */}
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  language: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default AccessibilityOptions;
