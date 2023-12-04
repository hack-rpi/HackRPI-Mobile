import React, { useState }from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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
            value={issueDescription}
            onChangeText={setIssueDescription}
          />

          {/* Submit Button */}
          <Button title="Submit Report" onPress={handleSubmit} />
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
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    minHeight: 100,
  },
  confirmationText: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Report;