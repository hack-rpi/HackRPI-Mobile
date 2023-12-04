import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{}from 'firebase/firestore';
import{} from ' firebase/app'
import{} from 'firebase/auth'
import{} from 'firebase/analytics'
import LoginButton from "./components/login"
import LogoutButton from "./components/signout"
import {gapi} from 'gapi-script'
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
