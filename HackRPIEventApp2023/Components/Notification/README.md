To send notification to user's device.
For IOS device we need to get APNs Key:
Step 1: Access Apple Developer Account:
    Go to the Apple Developer website: https://developer.apple.com.
    Sign in to your Apple Developer account using your Apple ID and password.

Step 2: Create an App ID
    Navigate to the "Certificates, Identifiers & Profiles" section.
    Select "App IDs" from the left-hand menu.
    Click the "+" button to create a new App ID.
    Fill in the required information, including a unique Bundle ID for your app. Make sure your      Bundle ID is correct and corresponds to your app.

Step 3: Configure Push Notifications
    In the "Capabilities" section of your App ID, enable "Push Notifications."

Step 4: Create an APNs Key
    In the same "Capabilities" section, under "Push Notifications," you'll find a "Create Key" button. Click on it to create a new APNs Key.
    Give the key a name (e.g., "MyApp APNs Key").
    Select the App ID you created earlier in the "Key" configuration.
    Click "Continue."
    Review the information and click "Register" to create the key.

Step 5: Download Your APNs Key
    After registering the key, you'll be presented with a confirmation page. Click the "Download" button to save the key to your computer.

Puch notifaction method should be in beckend. 
Need to download express, apn, body-parser from npm.
example code of creating connection:
const express = require('express');
const apn = require('apn');
const admin = require('firebase-admin');

const app = express();
app.use(express.json());

// Configure APNs for iOS
const apnProvider = new apn.Provider({
  token: {
    key: 'path/to/your/APNsKey.p8',
    keyId: 'yourKeyID',
    teamId: 'yourTeamID',
  },
  production: false, // Set to true for production environment
});

// Configure FCM for Android
const serviceAccount = require('path/to/your/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.post('/send-notification', (req, res) => {
  const { deviceToken, fcmToken, message } = req.body;

  if (deviceToken) {
    // Send APNs notification for iOS devices
    const apnNotification = new apn.Notification();
    apnNotification.alert = message;
    apnProvider.send(apnNotification, deviceToken).then(result => {
      console.log('APNs Notification:', result);
    }).catch(error => {
      console.error('APNs Error:', error);
    });
  }

  if (fcmToken) {
    // Send FCM notification for Android devices
    const fcmPayload = {
      notification: {
        title: 'Notification Title',
        body: message,
      },
    };
    admin.messaging().sendToDevice(fcmToken, fcmPayload)
      .then(response => {
        console.log('FCM Notification:', response);
      })
      .catch(error => {
        console.error('FCM Error:', error);
      });
  }

  res.json({ success: true });
});



-------------------------------------------------------------------------

For Android System (Using Google Firebase)

**May include some cost ->
https://firebase.google.com/pricing



Step 1: Create a blank react-native app

Step 2 : Creating a Firebase Project or use a existing one:
    https://console.firebase.google.com/u/0/

    Click on the project and enter the project’s dashboard. Look for ​Cloud Messaging​ tab and click on android.

    During the process, it will ask for app’s ​package name​ and provide ​google-services.json. You will find your package name from AndroidManifest.xml file. And you will need to download google-services.json. Copy google-services.json file into the Project.

Step 3 : Setup for react-native-firebase v 5.6.0
    -> Now install by:
        npm install react-native-firebase@5.6.0
    -> Similarly, install:
        npm install @react-native-community/async-storage


    -> On ​build.gradle​ file add this line:

        buildscript {    
        //...     
        dependencies {       
        //...        
        classpath 'com.google.gms:google-services:4.3.3’ // (Add this line) 
        //...     
          } 
        } 

    -> On your​ app/build.gradle​ add the following lines dependencies

        //... 
        dependencies {     
        //...     
        implementation "com.google.android.gms:play-services-base:16.1.0"     
        implementation "com.google.firebase:firebase-core:16.0.9"     
        implementation "com.google.firebase:firebase-messaging:18.0.0"     
        implementation "com.google.firebase:firebase-analytics:15.0.0"     
        implementation "com.google.firebase:firebase-config:17.0.0"     
        implementation 'me.leolin:ShortcutBadger:1.1.21@aar'      
        //... 
        } 
        //... 
        apply plugin: 'com.google.gms.google-services' 

    ->  import some packages in your android/app/src/main/java/com/rnpush/MainApplication.java:

        //... 
        import com.facebook.react.ReactInstanceManager; 
        import com.facebook.react.ReactNativeHost; 
        import com.facebook.react.ReactPackage; 
        import com.facebook.soloader.SoLoader; 
        import java.lang.reflect.InvocationTargetException; 
        import java.util.List; 
        
        //Firebase Dependencies (Add these lines)
        import io.invertase.firebase.messaging.RNFirebaseMessagingPackage; 
        import io.invertase.firebase.links.RNFirebaseLinksPackage; 
        import io.invertase.firebase.config.RNFirebaseRemoteConfigPackage; 
        import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage; 
        //... 
        
        protected List<ReactPackage> getPackages() {  
        @SuppressWarnings("UnnecessaryLocalVariable")   
        List<ReactPackage> packages = new PackageList(this).getPackages();     
        //… 
        // Add these lines 
        packages.add(new RNFirebaseMessagingPackage()); 
        packages.add(new RNFirebaseLinksPackage()); 
        packages.add(new RNFirebaseRemoteConfigPackage()); 
        packages.add(new RNFirebaseNotificationsPackage());
        return packages; 
        } 

    -> add the following lines to your ​AndroidManifest.xml:
        <uses-permission android:name="android.permission.INTERNET" /> 
        <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" /> 
        <uses-permission android:name="android.permission.VIBRATE" /> 

        ... 
        <activity         
        android:name=".MainActivity"         
        android:label="@string/app_name"         
        android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"         
        android:launchMode="singleTop"         
        android:windowSoftInputMode="adjustResize"> 

        <intent-filter>             
        <action android:name="android.intent.action.MAIN" />             
        <category android:name="android.intent.category.LAUNCHER" />         
        </intent-filter>       
        </activity>       
        <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />         

        <!-- Foreground Notification-->       
        <service android:name="io.invertase.firebase.messaging.RNFirebaseMessagingService">       
        <intent-filter>       
        <action android:name="com.google.firebase.MESSAGING_EVENT" />       
        </intent-filter>       
        </service> 
        
        <service android:name="io.invertase.firebase.messaging.RNFirebaseInstanceIdService">       
        <intent-filter>       
        <action android:name="com.google.firebase.INSTANCE_ID_EVENT" />       
        </intent-filter>       
        </service>  
        
        <receiver android:name="io.invertase.firebase.notifications.RNFirebaseNotificationReceiver" /> 
        
        <receiver android:enabled="true" android:exported="true" android:name="io.invertase.firebase.notifications.RNFirebaseNotificationRebootReceiver">       
        <intent-filter>       
        <action android:name="android.intent.action.BOOT_COMPLETED" />       
        <action android:name="android.intent.action.QUICKBOOT_POWERON" />       
        <action android:name="com.htc.intent.action.QUICKBOOT_POWERON" />       
        <category android:name="android.intent.category.DEFAULT" />       
        </intent-filter>       
        </receiver> 
    
After the setup, we will need JavaScript Code to actually build the function. After the code is successfully implement, we can test our code by run the react native app on device:
              -> react-native run-android



