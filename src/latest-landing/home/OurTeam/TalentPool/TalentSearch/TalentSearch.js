import React, { Component } from "react";
import PropTypes from "prop-types";
// import Button from "../../../../shared/core/Button";
import Icon from "../../../../shared/core/Icon";
import { Group, Input, IconGroup, Button } from "../../../../shared/Form/Form";
import "./TalentSearch.scss";
import { connect } from "react-redux";
import { isBusinessEmail } from "../../../../../components/utils/search";
import { authenticateEmailVisitor } from "../../../../../actions/AuthActions";
import _ from "lodash";
import Progress from "../../../../../components/core/Progress";


class TalentSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: props.query || '',
            email: '',
            searched: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.onEmailSubmit = this.onEmailSubmit.bind(this);
        this.onSearchQuery = this.onSearchQuery.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.auth.isEmailVisitor && !prevProps.auth.isAuthenticated
            && (this.props.auth.isEmailVisitor || this.props.auth.isAuthenticated)
            && this.state.query) {
            this.props.onSearchQuery(this.state.query);
        }
    }


    onEmailSubmit(e) {
        e.preventDefault();
        const email = this.state.email;
        if (email) {
            if (isBusinessEmail(email)) {
                this.setState({ emailError: false });
                this.props.authenticateEmailVisitor({ email, via_search: true, search: this.state.query });
            } else {
                this.setState({ emailError: true });
            }
        }
    }


    onSearchQuery(e) {
        e.preventDefault();
        this.setState({ searched: true });
        this.props.onSearchQuery(this.state.query);
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }


    clearSearch(e) {
        e.preventDefault();
        this.setState({ query: '', searched: false });
        this.props.onSearchQuery('');
    }


    render() {
        const { auth, query } = this.props;

        return (
            <div className="TalentSearch">
                <div className="TalentSearch__container">
                    {
                        auth.isEmailVisitor || auth.isAuthenticated
                            ?
                            <form className="TalentSearch__form" onSubmit={this.onSearchQuery}>
                                <div>
                                    <IconGroup className="TalentSearch__icon-group">
                                        <Icon className="Form__input-icon" name='search' size='card'/>
                                        <Input className="Form__input--has-icon TalentSearch__input" type="text"
                                               name="query" value={this.state.query} onChange={this.handleChange}
                                               placeholder="Search by skills or technology"/>
                                        {
                                            this.state.searched
                                            &&
                                            <Icon className="Form__input-icon Form__input-icon--right" name='close'
                                                  size='sm' onClick={this.clearSearch}/>
                                        }
                                    </IconGroup>
                                    {
                                        this.state.searched
                                        &&
                                        <Button type="submit" className="TalentSearch__cancel-btn"
                                                onClick={this.clearSearch}>
                                            Cancel
                                        </Button>
                                    }
                                </div>
                            </form>
                            :
                            <form className="TalentSearch__form" onSubmit={this.onEmailSubmit}>
                                <div className="TalentSearch__icon-group-holder">
                                    <IconGroup className="TalentSearch__icon-group TalentSearch__icon-group--locked">
                                        <Icon className="Form__input-icon" name='lock-alt' size='card'/>
                                        <Input className="Form__input--has-icon" id="TalentSearch-input" type="email"
                                               name="email" value={this.state.email}
                                               onChange={this.handleChange}
                                               placeholder="Enter Business Email to unlock search"/>
                                        <Button type="submit"
                                                disabled={auth.isAuthenticating === true}
                                                className="p-4 border-radius-0 TalentSearch-button"
                                        >
                                            Go
                                        </Button>
                                        <span className="ml-3">{auth.isAuthenticating === true ?
                                            <Progress/> : ''}</span>
                                    </IconGroup>
                                </div>
                                {
                                    this.state.emailError &&
                                    <div className="Form__group text-danger mt-2">
                                        Please enter a valid business email
                                    </div>
                                }
                                {
                                    query &&
                                    <div className="Form__group text-danger mt-2">
                                        You need to enter a business email to search
                                    </div>
                                }
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
