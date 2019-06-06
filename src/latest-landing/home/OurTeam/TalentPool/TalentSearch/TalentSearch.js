import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TalentSearch.scss";
import Icon from "../../../../shared/core/Icon";
import { Input, IconGroup } from "../../../../shared/Form/Form";


class TalentSearch extends Component {
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
            <div className="TalentSearch">
                <div className="TalentSearch__container">
                    <form className="TalentSearch__form" onSubmit={this.onFormSubmit}>
                        <div className="TalentSearch__icon-group">
                            <IconGroup>
                                <Icon className="Form__input-icon" name='search' size='card'/>
                                <Input className="Form__input--has-icon Form__input--b-b" type="text"
                                       name="query" value={this.state.query} onChange={this.handleChange}
                                       placeholder="Search by skills or technology"/>
                            </IconGroup>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

TalentSearch.propTypes = {};

export default TalentSearch;
