import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "125929146509-1auuabrn35ar8r81fi9p7en383imdtkb.apps.googleusercontent.com",
    iosClientId: "125929146509-gu6ir4226bapt7hb7hp1kj3aqot56478.apps.googleusercontent.com",
  });
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