import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import "./LoginForm.scss";
import Icon from "../../../shared/core/Icon";
import { Form, Title, Button, Input, Group, Label, IconGroup, Cta } from "../../../shared/Form/Form";
import Error from "../../../../components/core/Error";
import { authenticate } from "../../../../actions/AuthActions";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // componentDidUpdate(prevProps, currentProps) {
    //   if (prevProps !== currentProps) {
    //      console.log()
    //   }
    // }

    onFormSubmit(e) {
        e.preventDefault();
        // alert(JSON.stringify(this.spagetate));
        this.props.authenticate(this.state).then(response => {
            // console.log("response", response);
            if (response) {
                location.assign("/dashboard");
            }
        });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {

        return (
            <div className="LoginForm">
                <div className="LoginForm__card">
                    <Form onSubmit={this.onFormSubmit}>
                        <React.Fragment>
                            { this.props.auth.isAuthenticating.isLoginFail ?
                             <Error
                                    message={
                                        this.props.auth.isAuthenticating.loginError ||
                                        "Sorry, we couldn't log you in. Please try again."
                                    }
                                /> :
                            null }
                            <Title>
                                Welcome back
                            </Title>
                            <Group>
                                <Label>
                                    Email address or username
                                </Label>
                                <IconGroup className="Form__input-icon-group">
                                    <Icon className="Form__input-icon" name='envelope-o' size='card'/>
                                    <Input className="Form__input--has-icon" type="text"
                                           name="username" value={this.state.username} onChange={this.handleChange}
                                           placeholder="Enter email address or username"/>
                                </IconGroup>
                            </Group>
                            <Group>
                                <Label>
                                    Password
                                </Label>
                                <Cta className="float-right">Forgot password?</Cta>
                                <IconGroup>
                                    <Icon className="Form__input-icon" name='lock-alt' size='card'/>
                                    <Input className="Form__input--has-icon" type="password"
                                           name="password" value={this.state.password} onChange={this.handleChange}
                                           placeholder="Enter password"/>
                                </IconGroup>
                            </Group>
                            <div className="text-center">
                                <Button type="submit">
                                    Login
                                </Button>
                            </div>
                        </React.Fragment>
                    </Form>
                </div>
            </div>
        );
    }
}

LoginForm.propTypes = {};

const mapStateToProps = store => ({
    auth: store.app.Auth
});

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (credentials) => authenticate(credentials)(dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

