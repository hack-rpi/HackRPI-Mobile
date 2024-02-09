import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const verifyCredentials = (enteredUsername, enteredPassword, enteredVerificationCode) => {
    // Replace these credentials and verification code with your actual values
    const validUsername = 'admin';
    const validPassword = 'password';
    const validVerificationCode = '1234'; // Example verification code

    return enteredUsername === validUsername && enteredPassword === validPassword && enteredVerificationCode === validVerificationCode;
  };

  const handleLogin = () => {
    if (verifyCredentials(username, password, verificationCode)) {
      setLoggedIn(true);
      Alert.alert('Logged in successfully!');
    } else {
      Alert.alert('Invalid username, password, or verification code');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loggedIn ? (
        <Text>Welcome, {username}!</Text>
      ) : (
        <View>
          <Text style={{ fontSize: 20 }}>Login</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
            placeholder="Verification Code"
            value={verificationCode}
            onChangeText={(text) => setVerificationCode(text)}
          />
          <TouchableOpacity
            style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
            onPress={handleLogin}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Login;