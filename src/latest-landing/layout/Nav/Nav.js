import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Nav.scss";
import Routing from "../../constants/Routing";
import { NavLink } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav as RNav,
    NavItem,
    NavLink as RNavLink
} from "reactstrap";

import Button from "../Header/Header";
import Logo from "../../assets/img/common/logo.png";


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div className="Nav">
                <div className="">
                    <Navbar
                        color="transparent"
                        light
                        expand="lg"
                        className="Nav__bar"
                    >
                        <NavLink
                            className="font-weight-bold text-white text-uppercase navbar-brand"
                            to="/"
                        >
                            <img className="Nav__logo" src={Logo} alt="Tunga logo"/>
                        </NavLink>
                        <NavbarToggler
                            onClick={this.toggle}
                            className="text-white"
                        />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <RNav className="ml-auto text-right" navbar>
                                <NavItem>
                                    <NavLink to={Routing.ourStory.path}>
                                        {Routing.ourStory.name}
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to={Routing.ourTeam.path}>
                                        {Routing.ourTeam.name}
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to={Routing.news.path}>
                                        {Routing.news.name}
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to={Routing.login.path}>
                                        {Routing.login.name}
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <RNavLink className="ml-3 text-white btn btn-lg btn-primary p-4 border-radius-0">
                                        Schedule a Call{" "}
                                    </RNavLink>
                                </NavItem>
                            </RNav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

Nav.propTypes = {};

export default Nav;
