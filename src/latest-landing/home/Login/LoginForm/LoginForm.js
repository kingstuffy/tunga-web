import React, { Component } from "react";
import PropTypes from "prop-types";
import "./LoginForm.scss";
import Button from "../../../shared/core/Button";
import Icon from "../../../shared/core/Icon";


class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="LoginForm">
                <div className="LoginForm__card">
                    <form className="Form">
                        <div className="Form__title">
                            Welcome back
                        </div>
                        <div className="Form__group">
                            <label className="Form__label">
                                Email address or username
                            </label>
                            <div className="Form__input-icon-group">
                                <Icon className="Form__input-icon" name='envelope' size='card'/>
                                <input className="Form__input Form__input--has-icon" type="text"
                                       placeholder="Enter email address or username"/>
                            </div>
                        </div>
                        <div className="Form__group">
                            <label className="Form__label">
                                Password
                            </label>
                            <a className="float-right Form__cta">Forgot password?</a>
                            <div className="Form__input-icon-group">
                                <Icon className="Form__input-icon" name='envelope' size='card'/>
                                <input className="Form__input Form__input--has-icon" type="password"
                                       placeholder="Enter password"/>
                            </div>
                        </div>
                        <div className="text-center">
                            <Button
                                size="md"
                                className="btn Form__btn btn-primary"
                                variant=""
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

LoginForm.propTypes = {};

export default LoginForm;
