import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SearchForm.scss";
import Icon from "../../../shared/core/Icon";


class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ""
        };


        this.handleInputChange = this.handleInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onFormSubmit(e) {
        e.preventDefault();
    }


    handleInputChange(e) {
    }


    render() {
        return (
            <div className="SearchForm">
                <div className="SearchForm__container">
                    <form className="SearchForm__form" onSubmit={this.onFormSubmit}>
                        <div className="SearchForm__icon-group">
                            <Icon className="SearchForm__icon" name='search' size='card'/>
                            <input className="SearchForm__input SearchForm__input--has-icon" type="text"
                                   placeholder="Search by skills or technology"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

SearchForm.propTypes = {};

export default SearchForm;
