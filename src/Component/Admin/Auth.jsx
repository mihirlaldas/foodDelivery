import React from "react";
import { GoogleLogin } from "react-google-login";
const responseGoogle = response => {
    console.log(response);
};
export default function Auth() {
    return (
        <div>
            <GoogleLogin
                clientId="797271683218-4fm4o6t0bkvj8sudj1kaj4uv4e5npa1i.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
            />
        </div>
    );
}
