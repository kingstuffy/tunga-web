import React, { Component } from "react";
import PropTypes from "prop-types";
import "./LoginForm.scss";
import Icon from "../../../shared/core/Icon";
import { Form, Title, Button, Input, Group, Label, IconGroup, Cta } from "../../../shared/Form/Form";


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        alert(JSON.stringify(this.state));
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

export default LoginForm;
