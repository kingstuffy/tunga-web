import React, { Component } from "react";

import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";

import AuthPage from "../../shared/AuthPage/AuthForm";
import "../../shared/AuthPage/AuthPage.scss";

class ForgotPassword extends Component {
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
            <AuthPage form={ForgotPasswordForm} isAuthenticated={this.isAuthenticated}/>
        );
    }
}

ForgotPassword.propTypes = {};

export default ForgotPassword;
