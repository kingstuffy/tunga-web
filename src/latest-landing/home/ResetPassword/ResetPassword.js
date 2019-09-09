import React, { Component } from "react";

import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";

import AuthPage from "../../shared/AuthPage/AuthForm";
import "../../shared/AuthPage/AuthPage.scss";
import qs from "qs";

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    isAuthenticated() {
        this.props.history.push('/dashboard');
    }

    render() {
        const query = this.props.match.params;
        return (
            <AuthPage query={query} form={ResetPasswordForm} isAuthenticated={this.isAuthenticated}/>
        );
    }
}

ResetPassword.propTypes = {};

export default ResetPassword;
