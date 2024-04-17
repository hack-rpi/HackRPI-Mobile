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
## FYI: comments in the "useEffect(() => {}" function in "CalanderObject.js" provide a comprehensive understanding on how the push notification works, as well as customizing notification text and style for further . 
