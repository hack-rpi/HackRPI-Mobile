import React from 'react';


import { View, Text, StyleSheet, TouchableOpacity, Switch, Button } from 'react-native';

const NotificationOptions = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
    // Implement functionality to manage notifications
    // For example, you might use a notification library like react-native-push-notification
  };

  const silenceNotifications = () => {
    // Code to silence notifications (e.g., using a library like react-native-push-notification)
    console.log('Notifications silenced');
  };

  return (
    <View style={styles.container}>
      <Text>Notification Options</Text>
       {/* Enable/Disable Notifications */}
       <View style={styles.option}>
        <Text>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>
      
      {/* Silence Notifications */}
      <View style={styles.option}>
        <Button
          title={notificationsEnabled ? 'Silence Notifications' : 'Unsilence Notifications'}
          onPress={silenceNotifications}
          disabled={!notificationsEnabled}
        />
      </View>
      
      {/* Other suboptions and functionality here */}

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 10,
  },
});

export default NotificationOptions;
