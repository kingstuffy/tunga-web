import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SearchForm.scss";
import Icon from "../../../shared/core/Icon";
import { Input, IconGroup } from "../../../shared/Form/Form";


class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
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
            <div className="SearchForm">
                <div className="SearchForm__container">
                    <form className="SearchForm__form" onSubmit={this.onFormSubmit}>
                        <div className="SearchForm__icon-group">
                            <IconGroup>
                                <Icon className="Form__input-icon Form__input-icon--light" name='search' size='card'/>
                                <Input className="Form__input--has-icon Form__input--b-b Form__input--light" type="text"
                                       name="query" value={this.state.query} onChange={this.handleChange}
                                       placeholder="Search by skills or technology"/>
                            </IconGroup>
                            {/*<Icon className="SearchForm__icon" name='search' size='card'/>
                            <input className="SearchForm__input SearchForm__input--has-icon" type="text"
                                   placeholder="Search by skills or technology"/>*/}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

SearchForm.propTypes = {};

export default SearchForm;
