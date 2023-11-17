import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsPage = () => {
  // State for the switch (example for a dark mode toggle)
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* Example setting: Dark Mode Toggle */}
      <View style={styles.setting}>
        <Text>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(previousState => !previousState)}
        />
      </View>

      {/* Add more settings options here */}
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