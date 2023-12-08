import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Report = () => {
  const [issueDescription, setIssueDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Implement functionality to submit the report
    // You can send the issueDescription to a server or perform actions accordingly
    setIsSubmitted(true);
    // ... additional logic to submit the report
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Report an Issue</Text>

      {!isSubmitted ? (
        <>
          {/* Issue Description Text Input */}
          <TextInput
            style={styles.input}
            multiline
            placeholder="Describe the issue..."
            placeholderTextColor="#666" // Placeholder text color for better visibility
            value={issueDescription}
            onChangeText={setIssueDescription}
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit Report</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.confirmationText}>
          The report has been submitted. We appreciate your patience. Thank you!
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Background color set to black
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Heading text color set to white
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff', // Input border color set to white
    borderRadius: 20, // Border radius set to match the rounded corners
    padding: 10,
    marginBottom: 20,
    width: '100%',
    minHeight: 100,
    color: '#fff', // Input text color set to white
    backgroundColor: '#333', // Input background color set to a dark shade
  },
  buttonText: {
    color: '#fff', // Button text color set to white
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#f00', // Button background color set to red
    borderRadius: 20, // Button border radius set for rounded corners
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%', // Button width set to match input fields
    marginBottom: 10,
  },
  confirmationText: {
    textAlign: 'center',
    color: '#fff', // Confirmation text color set to white
    fontSize: 18,
  },
});

export default Report;
