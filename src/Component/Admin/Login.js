import React, { Component } from "react";
import { auth } from "../../redux/action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.props.auth);
        this.props.auth(this.state.username, this.state.password);
    };

    render() {
        if (this.props.isLoggedIn) return <Redirect push to="/dashboard" />;
        return (
            <div>
                <h1 className="bg-primary text-white p-2">Login Page</h1>
                <form
                    onSubmit={this.handleSubmit}
                    className="form-group border bg-light m-2 w-50 m-auto p-2 text-left"
                >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        maxLength="20"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        maxLength="20"
                        className="form-control"
                        onChange={this.handleChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary p-2 m-2 btn-block"
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        auth: (username, password) => dispatch(auth(username, password))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
