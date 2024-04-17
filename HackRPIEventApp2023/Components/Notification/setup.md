#Instruction for deploying push notification of EXPO on the local environment.

###Two methods: using EAS build or expo-notifications library.

> Warning: expo-notifications library are not able to run on an Android Emulator and an IOS simulator.
> If you want to run the app on either of these simulators, please deploy the EAS build in your environment.  
> If you are stick with the expo-notifications build, you can skip the part of EAS build and start with
> "Push notification environment configuration" (which is what I have successfully tested on my physical devices).

#EAS build (optional) (can jump to Push notification environment configuration if you want to use expo-notifications library):
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

##Run on platform
For run on Android (need to change the google-services.json file in order to connect to your google account, as well as
generating your own private key for the FCM server)

> View the link on [Add Android FCM V1 credentials](https://docs.expo.dev/push-notifications/fcm-credentials)

For run on iOS (need an Apple developer account before running)

> eas build

# Test using the push notifications tool

```
expo start
```

# Remember to read all comments in "const handleClick =async() => {}" of "CalanderObject.js" to understand the how to test the push notification tool and you will be good!

android install and develop

## Preparation

Before starting, ensure you have Node.js installed on your computer. If not, download and install it from [Node.js official website](https://nodejs.org/).

### Method 1: Using EAS Build

EAS (Expo Application Services) CLI is a command-line tool to interact with the Expo services. This method is preferable if you are using simulators for iOS or Android.

#### Step 1: Install EAS CLI

Run the following command to install EAS CLI globally:

```bash
npm install -g eas-cli
```

#### Step 2: Log in to Your Expo Account

```bash
eas login
```

Follow the prompts to enter your Expo credentials. If you don't have an Expo account, you'll need to create one at [Expo's official site](https://expo.dev/signup).

#### Step 3: Configure the Project

Initialize the build configuration:

```bash
eas build:configure
```

#### Step 4: Build the Project

You can build for both platforms simultaneously or separately:

```bash
eas build --platform all
```

Or, to build for a specific platform:

- For Android:

  ```bash
  eas build --platform android
  ```

- For iOS:

  ```bash
  eas build --platform ios
  ```

To monitor the build process, use:

```bash
eas build:list
```

### Method 2: Using expo-notifications Library

This method is suited for physical devices. Ensure your device is connected to your development machine.

#### Step 1: Install Required Libraries

```bash
npx expo install expo-notifications expo-device expo-constants
```

#### Step 2: Setup for Android

Modify the `google-services.json` file to connect to your Google account and set up your FCM server credentials:

- Follow the instructions [here to add Android FCM V1 credentials](https://docs.expo.dev/push-notifications/fcm-credentials).

#### Step 3: Setup for iOS

You need an active Apple Developer account to proceed:

```bash
eas build
```

### Testing Push Notifications

Start your Expo project:

```bash
expo start
```

Follow the testing instructions detailed in the comments within the `handleClick` function in `CalendarObject.js`.

### Additional Setup: Android Studio

If you need to install and configure Android Studio for development, follow these steps:

1. **Download and Install:**

   - Go to the [Android Studio download page](https://developer.android.com/studio) and download the installer for your operating system.
   - Run the installer and follow the on-screen instructions to install Android Studio.

2. **Configure Android Studio:**

   - Open Android Studio.
   - Go through the 'Android Studio Setup Wizard'. This includes downloading Android SDK components that are required for development.

3. **Create a Virtual Device:**
   - In Android Studio, open the AVD Manager by navigating to `Tools > AVD Manager`.
   - Click on "Create Virtual Device", select your preferred device definition, and then select a system image (e.g., a recent Android OS version).
   - Follow the prompts to create the virtual device.

By completing these setups, you can start developing and testing applications using Expo's notification capabilities on your local machine.
