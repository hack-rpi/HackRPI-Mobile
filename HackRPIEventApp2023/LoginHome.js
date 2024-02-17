import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [enteredCode, setEnteredCode] = useState('');

  const generateVerificationCode = () => {
    // Generate a random 6-digit verification code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setVerificationCode(code);
    // Here you would send the verification code to the user, for example via email or SMS
    Alert.alert('Verification code generated: ' + code);
  };

  const handleLogin = () => {
    if (username && password && enteredCode === verificationCode) {
      setLoggedIn(true);
      Alert.alert('Logged in successfully!');
    } else {
      Alert.alert('Please enter username, password, and correct verification code');
    }
  };

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
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
          <TouchableOpacity
            style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginBottom: 10 }}
            onPress={generateVerificationCode}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Generate Verification Code</Text>
          </TouchableOpacity>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
            placeholder="Verification Code"
            value={enteredCode}
            onChangeText={(text) => setEnteredCode(text)}
          />
          <TouchableOpacity
            style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
            onPress={handleLogin}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
          </TouchableOpacity>
          {/* Google login button */}
          <GoogleLogin
            clientId="125929146509-1auuabrn35ar8r81fi9p7en383imdtkb.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
          />
        </View>
      )}
    </View>
  );
};

export default Login;