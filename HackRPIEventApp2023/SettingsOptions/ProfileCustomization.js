import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet  } from 'react-native';

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
      <Text>Profile Customization</Text>

      {/* Preferred Name */}
      <TextInput
        style={styles.input}
        placeholder="Preferred Name"
        value={preferredName}
        onChangeText={setPreferredName}
      />

      {/* School Name */}
      <TextInput
        style={styles.input}
        placeholder="School Name"
        value={schoolName}
        onChangeText={setSchoolName}
      />

      {/* Major */}
      <TextInput
        style={styles.input}
        placeholder="Major"
        value={major}
        onChangeText={setMajor}
      />

      {/* Years of Experience */}
      <TextInput
        style={styles.input}
        placeholder="Years of Experience in Hacking"
        value={yearsOfExperience}
        onChangeText={setYearsOfExperience}
        keyboardType="numeric"
      />

      {/* Save Button */}
      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default ProfileCustomization;