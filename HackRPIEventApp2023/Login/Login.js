import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const generateRandomCode = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCode(code);
  };

  const handleLogin = () => {
    if (username && password && verificationCode === generatedCode) {
      setLoggedIn(true);
      Alert.alert('Logged in successfully!');
    } else {
      Alert.alert('Please enter valid credentials and verification code');
    }
  };

  const handleReloadVerificationCode = () => {
    generateRandomCode();
    setVerificationCode('');
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {setLoggedIn(false);
          setUsername('');
          setPassword('');
          setVerificationCode('');
          generateRandomCode()}
        },
      ],
      { cancelable: false }
    );
  };

  // Initial generation of the verification code
  useState(() => {
    generateRandomCode();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loggedIn ? (
        <View>
          <Text style={{color: 'white'}}>Welcome, mentor!</Text>
          <TouchableOpacity
            style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginLeft: 10 }}
            onPress={handleLogout}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={{ fontSize: 20 , color: 'white'}}>Login</Text>
          <Text style={{ fontSize: 5 }}> </Text>
          <Text style={{ fontSize: 15, color: 'white' }}> Username</Text>
          <TextInput
            style={{ height: 40, 
            borderColor: 'white', 
            borderWidth: 1, 
            marginBottom: 10, 
            paddingHorizontal: 10, 
            color: 'white', 
            placeholderTextColor: 'white'}}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Text style={{ fontSize: 15, color: 'white' }}> Password </Text>
          <TextInput
            style={{ height: 40, 
            borderColor: 'white', 
            borderWidth: 1, marginBottom: 10, 
            paddingHorizontal: 10,
            color: 'white',}}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Text style={{ fontSize: 15, color: 'white' }}> Verification Code </Text>
          <TextInput
            style={{ height: 40, 
            borderColor: 'white', borderWidth: 1, 
            marginBottom: 10, 
            paddingHorizontal: 10,
            color: 'white',}}
            placeholder="Verification Code"
            value={verificationCode}
            onChangeText={(text) => setVerificationCode(text)}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ width: 200, height: 50, marginBottom: 10 }}
              source={{ uri: `https://via.placeholder.com/200x50?text=${generatedCode}` }} // Placeholder URL with generated code
            />
            <TouchableOpacity
              style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginLeft: 10 }}
              onPress={handleReloadVerificationCode}
            >
              <Text style={{ color: 'white', textAlign: 'center' }}>Reload Verification Code</Text>
            </TouchableOpacity>
          </View>
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
