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
import { openCalendlyWidget } from "../../../components/utils/calendly";
import { authenticate } from "../../../actions/AuthActions";
import { connect } from "react-redux";


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        if (this.props.onNavToggle) {
            this.props.onNavToggle(!this.state.isOpen);
        }

        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const { auth } = this.props;

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
                                    <NavLink to={Routing.ourStory.path} activeClassName="font-weight-bold text-black">
                                        {Routing.ourStory.name}
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to={Routing.ourTeam.path} activeClassName="font-weight-bold text-black">
                                        {Routing.ourTeam.name}
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to={Routing.news.path} activeClassName="font-weight-bold text-black">
                                        {Routing.news.name}
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    {
                                        auth.isAuthenticated
                                            ?
                                            <NavLink to={Routing.dashboard.path}
                                                     activeClassName="font-weight-bold text-black">
                                                {Routing.dashboard.name}
                                            </NavLink>
                                            :
                                            <NavLink to={Routing.login.path}
                                                     activeClassName="font-weight-bold text-black">
                                                {Routing.login.name}
                                            </NavLink>
                                    }
                                </NavItem>
                                <NavItem>
                                    <RNavLink className="ml-3 text-white btn btn-lg btn-primary p-4 border-radius-0"
                                              onClick={() => openCalendlyWidget()}>
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


const mapStateToProps = store => ({
    auth: store.app.Auth
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
