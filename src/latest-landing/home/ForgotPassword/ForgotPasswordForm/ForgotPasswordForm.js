import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Icon from "../../../shared/core/Icon";
import { Form, Title, Button, Input, Group, Label, IconGroup, Cta } from "../../../shared/Form/Form";
import Error from "../../../../components/core/Error";
import { resetPassword } from "../../../../actions/AuthActions";
import { Redirect } from "react-router";
import Routing from "../../../constants/Routing";
import Progress from "../../../../components/core/Progress";
import Success from "../../../../components/core/Success";

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            formSubmitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.setState({ formSubmitted: true });
        const email = this.state.email.trim();
        if (!email) {
            return;
        }

        this.props.resetPassword({ email });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value, formSubmitted: false });
    }

    render() {
        const { auth } = this.props;
        if (auth.isAuthenticated) {
            this.props.isAuthenticated();
        }

        return (
            <Form onSubmit={this.onFormSubmit}>
                <React.Fragment>
                    {auth.errors && auth.errors.reset && auth.errors.reset.non_field_errors ?
                        <Error
                            message={
                                auth.errors.reset.non_field_errors.join(', ') ||
                                "Sorry, we couldn't reset your password"
                            }
                        /> :
                        null}
                    <Title className="AuthForm__title">
                        Reset Password
                    </Title>
                    {auth.isResetting ? <Progress/> : null}

                    {auth.isReset ? (
                        <Success message="Instructions for resetting your password have been sent to your email."/>
                    ) : null}
                    <Group>
                        <Label>
                            Email address
                        </Label>
                        <IconGroup className="Form__input-icon-group">
                            <Icon className="Form__input-icon" name='envelope-o' size='card'/>
                            <Input className="Form__input--has-icon" type="text"
                                   name="email" value={this.state.email} onChange={this.handleChange}
                                   placeholder="Enter your email address"/>
                        </IconGroup>
                        {
                            this.state.formSubmitted && !this.state.email &&
                            <div className="Form__group text-danger mt-2">
                                Please enter an email address
                            </div>
                        }
                        <Cta href="/login" className="AuthForm__cta float-right mt-2">Have an account? Login</Cta>
                    </Group>
                    <div className="clearfix"></div>
                    <div className="text-center pt-4">
                        <Button type="submit"
                                disabled={auth.isResetting}>
                            Reset password
                        </Button>
                    </div>
                </React.Fragment>
            </Form>
        );
    }
}

AuthForm.propTypes = {};

const mapStateToProps = store => ({
    auth: store.app.Auth
});

const mapDispatchToProps = dispatch => {
    return {
        resetPassword: (credentials) => dispatch(resetPassword(credentials)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);

