#Instruction for deploying push notification of EXPO on the local environment. 

###Two methods: using EAS build or expo-notifications library.

>Warning: expo-notifications library are not able to run on an Android Emulator and an IOS simulator. 
If you want to run the app on either of these simulators, please deploy the EAS build in your environment.  
> But if you are stick with the expo-notifications build, you can skip the part of EAS build and start with 
"Push notification environment configuration"

#EAS build: 
Intro: EAS CLI is the command-line app that you will use to interact with EAS services from your terminal. To install it, run the command:

##Install library
```
npm install -g eas-cli
```
##Log in to your Expo account
```
eas login
```
##Configure the project
```
eas build:configure
```
##Run a build
```
eas build --platform all
```
### - Or we can build on different platforms separately
for build on Android
```
eas build --platform android
```
for build on iOS 
```
eas build --platform ios
```
### Building on plaforms may took a while, so if you want to see the progress, you can open the dashboard by
```
eas build:list
```

#Push notification environment configuration
##Install libraries
```
npx expo install expo-notifications expo-device expo-constants
```
##Run the code in testPushNoti.js


##Run on platform
For run on Android (need to change the google-services.json file in order to connect to your google account)
> View the link on [Add Android FCM V1 credentials](https://docs.expo.dev/push-notifications/fcm-credentials)

For run on iOS (need an Apple developer account before running)
> eas build

# Test using the push notifications tool
```
npx expo start
```