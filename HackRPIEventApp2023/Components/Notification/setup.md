# Instruction for deploying push notification of EXPO on the local environment. 

### using expo-notifications library

>Warning: expo-notifications library are not able to run on an Android Emulator and an IOS simulator.  

# Push notification environment configuration
## Install EAS CLI
```
npm install -g eas-cli
```
## Log in to your Expo account
```
eas login
```

## Install libraries
```
npx expo install expo-notifications expo-device expo-constants
```


## Run on platform
For run on Android (need to change the google-services.json file in order to connect to your google account, as well as 
generating your own private key for the FCM server)
> View the link on [Add Android FCM V1 credentials](https://docs.expo.dev/push-notifications/fcm-credentials)

For run on iOS (need an Apple developer account before running)
> eas build

# Test using the push notifications tool
```
expo start
```
## FYI: comments in the "useEffect(() => {}" function in "CalanderObject.js" provide a comprehensive understanding on how the push notification works, as well as customizing notification text and style for further development. 

## Testing instruction:
1. Change the time of any workshop in Box -> WorkShops.json you like to sometime in the future. 
2. Remember that the notification will be pushed five minutes before the workshop time, so if you would like to test a notification one minute later, you would have to add six minutes to the current time as the workshop time.
3. The push notification will be turned on by default (i.e. when first loaded the workshop page). Unless the notification is turned off manually (bell-off icon), user will receive a notification on every workshop. 