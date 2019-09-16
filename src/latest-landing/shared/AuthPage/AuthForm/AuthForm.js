import React, { Component } from "react";
import "./AuthForm.scss";

class AuthForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Form = this.props.form;
        return (
            <div className="AuthForm">
                <div className="AuthForm__card">
                    <Form {...this.props}/>
                </div>
            </div>
        );
    }
}

AuthForm.propTypes = {};
export default AuthForm;

