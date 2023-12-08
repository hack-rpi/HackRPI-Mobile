import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet  } from 'react-native';

const ProfileCustomization = () => {
  const [preferredName, setPreferredName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [major, setMajor] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');

  const handleSave = () => {
    // Implement functionality to save profile changes
    // You can send this data to a server or store it locally
    console.log('Profile changes saved');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Customization</Text>

      {/* Preferred Name */}
      <TextInput
        style={styles.input}
        placeholder="Preferred Name"
        placeholderTextColor="#666" // Placeholder text color
        value={preferredName}
        onChangeText={setPreferredName}
      />

      {/* School Name */}
      <TextInput
        style={styles.input}
        placeholder="School Name"
        placeholderTextColor="#666"
        value={schoolName}
        onChangeText={setSchoolName}
      />

      {/* Major */}
      <TextInput
        style={styles.input}
        placeholder="Major"
        placeholderTextColor="#666"
        value={major}
        onChangeText={setMajor}
      />

      {/* Years of Experience */}
      <TextInput
        style={styles.input}
        placeholder="Years of Experience"
        placeholderTextColor="#666"
        value={yearsOfExperience}
        onChangeText={setYearsOfExperience}
        keyboardType="numeric"
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Changed to black to match the theme
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Changed to white to match the theme
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff', // Border color changed to white
    borderRadius: 20, // Rounded corners to match the theme
    padding: 10,
    marginBottom: 10,
    width: '100%',
    color: '#fff', // Text color changed to white
    backgroundColor: '#333', // Darker background for the input
  },
  button: {
    backgroundColor: '#f00', // Red background for the button
    borderRadius: 20, // Rounded corners for the button
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff', // White text color for the button
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileCustomization;
