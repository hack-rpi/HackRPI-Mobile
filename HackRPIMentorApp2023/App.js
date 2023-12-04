import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{}from 'firebase/firestore';
import{} from ' firebase/app'
import{} from 'firebase/auth'
import{} from 'firebase/analytics'
import LoginButton from "./components/login"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogoutButton from "./components/signout"
import {gapi} from 'gapi-script'
import {globalStyles} from "./styles";
import { Feather } from "@expo/vector-icons";

const tab = createBottomTabNavigator();

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
    <NavigationContainer>
<Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            //adding icons
            let iconName;
            if (route.name === "login") {
              iconName = "login";
            } else if (route.name === "logout") {
              iconName = "logout";
            }
            return (
              <Feather
                name={iconName}
                size={size}
                color={focused ? "red" : "white"}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            backgroundColor: globalStyles.primary, 
            borderTopWidth: 0, // Hide top border of the tab bar
          },
          tabBarActiveTintColor: globalStyles.accent,
          tabBarInactiveTintColor: "white",
        })}>
        <Tab.Screen name="login" component={loginScreen} />
        <Tab.Screen name="logout" component={logoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
