import { GoogleLogin} from 'react-google-login'

const clientId = "     407760520560-119spl9r94p9k2dsvct2qf8fj5448fp6.apps.googleusercontent.com ";

function Logout(){
    const onSuccess = () => {
        console.log("logout success")
    }

    return(
        <div id= 'signInButton'>
            <GoogleLogin
                clientId = {clientId}
                buttonText = "login"
                onSuccess = {onSuccess}
            />
        </div>
    )
}