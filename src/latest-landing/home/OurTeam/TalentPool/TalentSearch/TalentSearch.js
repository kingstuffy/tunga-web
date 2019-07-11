import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TalentSearch.scss";
// import Button from "../../../../shared/core/Button";
import Icon from "../../../../shared/core/Icon";
import {  Group, Input, IconGroup, Button } from "../../../../shared/Form/Form";


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
                                <Icon className="Form__input-icon" name='lock-alt' size='card'/>
                                <Input className="Form__input--has-icon  TalentSearch-input" type="text"
                                    name="query" value={this.state.query} onChange={this.handleChange}
                                    placeholder="Enter Business Email to unlock search"/>
                                <Button
                                    className="p-4 border-radius-0 TalentSearch-button"
                                >
                                    Go
                                </Button>
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
