import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{}from 'firebase/firestore';
import{} from ' firebase/app'
import{} from 'firebase/auth'
import{} from 'firebase/analytics'
import LoginButton from "./components/login"
import { NavigationContainer } from "@react-navigation/native";
import LogoutButton from "./components/signout"
import {gapi} from 'gapi-script'


function loginScreen(){
  // a nav page for login
  return(
    <view style = {styles.container}> 
      <LoginButton/>
    </view>
  );
}

//nav page for logout
function logoutScreen(){
  return(
    <view style = {styles.container}>
      <LogoutButto/>
    </view>
  );
}


export default function App() {
  return (
    <div className='App'>
      <LoginButton/>
      <LogoutButton/>
    </div>
  );
}

function App(){
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientID: clientID,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);

  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
