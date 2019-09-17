import React, { Component } from "react";
import { connect } from 'react-redux';
import Icon from "../../../shared/core/Icon";
import { Form, Title, Button, Input, Group, Label, IconGroup, Cta } from "../../../shared/Form/Form";
import Error from "../../../../components/core/Error";
import { resetPasswordConfirm } from "../../../../actions/AuthActions";
import Progress from "../../../../components/core/Progress";
import Success from "../../../../components/core/Success";


class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirmPassword: '',
            formSubmitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.auth.isReset && !prevProps.auth.isReset) {
            window.location.href = this.props.query.next || '/dashboard';
        }
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.setState({ formSubmitted: true });
        const { uid, token } = this.props.query;
        const new_password1 = this.state.password.trim();
        const new_password2 = this.state.confirmPassword.trim();

        if (!new_password1 || !new_password2) {
            return;
        }

        this.props.resetPasswordConfirm({
            uid,
            token,
            new_password1,
            new_password2,
        });

    }


    parseErrors(errors) {
        const allErrors = [];
        if (!errors) {
            return '';
        }

        Object.keys(errors).forEach((errorKey) => {
            const firstErrorSet = errors[errorKey];
            if (Array.isArray(firstErrorSet)) {
                const error = errorKey === 'non_field_errors' ? firstErrorSet.join(', ') : `${errorKey}: ${firstErrorSet.join(', ')}`;
                allErrors.push(error);
                return;
            }

            Object.keys(firstErrorSet).forEach((secondErrorKey) => {
                const error = `${secondErrorKey}: ${firstErrorSet[secondErrorKey].join(', ')}`;
                allErrors.push(error);
            });
        });

        return allErrors.join(', ');
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
                    <Title className="AuthForm__title">
                        Reset Password
                    </Title>
                    {auth.isResetting ? <Progress/> : null}

                    {
                        auth.isReset
                            ?
                            (
                                <Success
                                    message="Instructions for resetting your password have been sent to your password."/>
                            )
                            :
                            null
                    }
                    {
                        auth.errors && auth.errors.reset_confirm
                            ?
                            <Error
                                message={
                                    this.parseErrors(auth.errors.reset_confirm) ||
                                    "Sorry, we couldn't reset your password"
                                }
                            />
                            :
                            null
                    }
                    {
                        !!(this.state.formSubmitted && this.state.password !== this.state.confirmPassword)
                        &&
                        <Error
                            message={
                                "Passwords must match"
                            }
                        />
                    }
                    <Group>
                        <Label>
                            New password
                        </Label>
                        <IconGroup className="Form__input-icon-group">
                            <Icon className="Form__input-icon" name='lock-alt' size='card'/>
                            <Input className="Form__input--has-icon" type="password"
                                   name="password" value={this.state.password} onChange={this.handleChange}
                                   placeholder="Enter your password address"/>
                        </IconGroup>
                        {
                            this.state.formSubmitted && !this.state.password &&
                            <div className="Form__group text-danger mt-2">
                                Please enter a password
                            </div>
                        }
                    </Group>
                    <Group>
                        <Label>
                            Confirm password
                        </Label>
                        <IconGroup className="Form__input-icon-group">
                            <Icon className="Form__input-icon" name='lock-alt' size='card'/>
                            <Input className="Form__input--has-icon" type="password"
                                   name="confirmPassword" value={this.state.confirmPassword}
                                   onChange={this.handleChange}
                                   placeholder="Enter your password address"/>
                        </IconGroup>
                        {
                            this.state.formSubmitted && !this.state.confirmPassword &&
                            <div className="Form__group text-danger mt-2">
                                Please enter a password
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
        resetPasswordConfirm: (credentials) => dispatch(resetPasswordConfirm(credentials)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);

