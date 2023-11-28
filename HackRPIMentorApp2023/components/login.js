import { GoogleLogin } from 'react-google-login';
const clientId = "117425105410-7f2ebr1hvv8k8dd5sm94flr8rrue992j.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        console.log("Login Success! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed! res: ", res)
    }

    return(
        <div id= "signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;