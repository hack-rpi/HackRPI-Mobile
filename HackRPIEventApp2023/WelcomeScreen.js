import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen() {
  const navigation = useNavigation();

  const handleHackerPress = () => {
    navigation.replace('Main');
  };

  const handleMentorPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Button title="Hacker" onPress={handleHackerPress} />
      <Button title="Mentor" onPress={handleMentorPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
