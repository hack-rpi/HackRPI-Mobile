import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Text } from "react-native";

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Placeholder for authentication logic
    console.log("Login attempted with username: " + username + " and password: " + password);
    // Navigate to the main app upon successful login
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mentor Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default LoginScreen;
