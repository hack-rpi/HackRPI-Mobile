import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, View } from 'react-native';
import{}from 'firebase/firestore';
import{} from ' firebase/app'
import{} from 'firebase/auth'
import{} from 'firebase/analytics'
import LoginButton from "./components/login"
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogoutButton from "./components/signout"
import signUp from "./components/signup"
import {gapi} from 'gapi-script'
import {globalStyles} from "./styles";
import { Feather } from "@expo/vector-icons";

// the following is work in progress
const tab = createBottomTabNavigator();
const navigation = useNavigation();

const loginPress = async() => {
  const result = await WebBrowser.openAutSessionAsync(
    'need a redirect url here for now it will be localhost 3000'
  ); 
  if (result.type === "success"){
    const params = Linking.parse(result.url);
    const {email, name,picture} = params.queryParams;

    const user = {
      email, name, picture,
    };
    navigation.navigate("HomeScreen", {user});
  }
}

const config = {
  issuer: 'need domain name',
  clientId: '407760520560-119spl9r94p9k2dsvct2qf8fj5448fp6.apps.googleusercontent.com',
  redirectURL: 'need url for login too',
  scopes: ['openid', 'profile', 'email', 'offline_access']
}

function signupScreen(){
  return(
    <button>onPress={signUp()}</button>
  )
}

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
          tabBarInactiveTintColor: "white", //matches the names to the components
        })}>
        <Tab.Screen name="login" component={loginScreen} />
        <Tab.Screen name="logout" component={logoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//out dated
// function App(){
//   useEffect(() => { 
//     function start(){
//       gapi.client.init({
//         clientID: clientID,
//         scope: ""
//       })
//     };

//     gapi.load('client:auth2', start);

//   });
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: globalStyles.fontSize,
    fontWeight: globalStyles.fontWeight,
    color: globalStyles.text,
  },
});
