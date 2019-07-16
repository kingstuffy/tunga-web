import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TalentSearch.scss";
// import Button from "../../../../shared/core/Button";
import Icon from "../../../../shared/core/Icon";
import { Group, Input, IconGroup, Button } from "../../../../shared/Form/Form";
import { connect } from "react-redux";
import { isBusinessEmail } from "../../../../../components/utils/search";
import { authenticateEmailVisitor } from "../../../../../actions/AuthActions";


class TalentSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            email: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.onEmailSubmit = this.onEmailSubmit.bind(this);
        this.onSearchQuery = this.onSearchQuery.bind(this);
    }


    onEmailSubmit(e) {
        e.preventDefault();
        const email = this.state.email;
        if (email) {
            console.log(isBusinessEmail(email), email);
            if (isBusinessEmail(email)) {
                this.props.authenticateEmailVisitor({ email, via_search: true, search: this.state.query });
            } else {
                // this.setState({ [`${loadMore ? 'emailMore' : 'emailUnlock'}Error`]: 'Please enter a business email.' });
            }
        }
    }


    onSearchQuery(e) {
        e.preventDefault();
        this.props.onSearchQuery(this.state.query);
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        const { auth } = this.props;

        return (
            <div className="TalentSearch">
                <div className="TalentSearch__container">
                    {
                        auth.isEmailVisitor || auth.isAuthenticated
                            ?
                            <form className="TalentSearch__form" onSubmit={this.onSearchQuery}>
                                <div className="TalentSearch__icon-group">
                                    <IconGroup>
                                        <Icon className="Form__input-icon" name='search' size='card'/>
                                        <Input className="Form__input--has-icon Form__input--b-b" type="text"
                                               name="query" value={this.state.query} onChange={this.handleChange}
                                               placeholder="Search by skills or technology"/>
                                    </IconGroup>
                                </div>
                            </form>
                            :
                            <form className="TalentSearch__form" onSubmit={this.onEmailSubmit}>
                                <div className="TalentSearch__icon-group">
                                    <IconGroup style={{ width: "176%" }}>
                                        <Icon className="Form__input-icon" name='lock-alt' size='card'/>
                                        <Input className="Form__input--has-icon" id="TalentSearch-input" type="email"
                                               name="email" value={this.state.email}
                                               onChange={this.handleChange}
                                               placeholder="Enter Business Email to unlock search"/>
                                        <Button type="submit"
                                            className="p-4 border-radius-0 TalentSearch-button"
                                        >
                                            Go
                                        </Button>
                                    </IconGroup>
                                </div>
                            </form>
                    }
                </div>
            </div>
        );
    }
}

TalentSearch.propTypes = {};

const mapStateToProps = state => ({
    auth: state.app.Auth,
});

const mapDispatchToProps = (dispatch) => {
    return {
        authenticateEmailVisitor: (params) => dispatch(authenticateEmailVisitor(params))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TalentSearch);
