import { GoogleLogout } from 'react-google-login';
const clientId = "117425105410-7f2ebr1hvv8k8dd5sm94flr8rrue992j.apps.googleusercontent.com";

function Logout() {

    const onSuccess = () => {
        console.log("Logout successful!");
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLougoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;