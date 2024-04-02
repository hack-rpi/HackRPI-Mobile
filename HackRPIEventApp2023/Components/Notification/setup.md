#Instruction for deploying push notification of EXPO on the local environment. 

###Two methods: using EAS build or expo-notifications library.

>Warning: expo-notifications library are not able to run on an Android Emulator and an IOS simulator. 
If you want to run the app on either of these simulators, please deploy the EAS build in your environment.  

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
