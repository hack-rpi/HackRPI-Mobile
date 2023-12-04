import { GoogleLogin} from 'react-google-login'

// again temp id
const clientId = "407760520560-119spl9r94p9k2dsvct2qf8fj5448fp6.apps.googleusercontent.com ";

function Login(){
    const onSuccess = (res) => {
        console.log("login success user : ", res)
    }

    // error check
    const onFailure = (res) => {
        console.log("login failed user :  ", res)
    }

    return(
        <div id= 'signInButton'>
            <GoogleLogin
                clientId = {clientId}
                buttonText = "login"
                onSuccess = {onSuccess}
                onFailure = {onFailure}
                cookiePolicy = {'single_host_origin'}
                isSignedIn = {true}
            />
        </div>
    )
}