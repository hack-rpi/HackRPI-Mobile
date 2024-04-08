// ParentComponent.js
import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator from React Navigation
import Login from './Login';

const Stack = createStackNavigator();

const ParentComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 20, justifyContent: 'center', alignItems: 'center' }}>
      <LoginButton navigation={navigation} />
    </View>
  );
};

export default ParentComponent;
