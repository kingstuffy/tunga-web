import React, { Component } from "react";

import LoginForm from "./LoginForm/LoginForm";

import AuthPage from "../../shared/AuthPage/AuthForm";
import "../../shared/AuthPage/AuthPage.scss";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    isAuthenticated() {
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <AuthPage form={LoginForm} isAuthenticated={this.isAuthenticated}/>
        );
    }
}

Login.propTypes = {};

export default Login;
