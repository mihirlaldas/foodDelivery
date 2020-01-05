import React, { Component } from "react";

export class Auth extends Component {
    onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log("Name: " + profile.getName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
    render() {
        return (
            <div>
                <div className="g-signin2" data-onsuccess={this.onSignIn}></div>
            </div>
        );
    }
}

export default Auth;
