import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Nav.scss";
import Routing from "../../constants/Routing";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav as RNav, NavItem , NavLink as RNavLink} from "reactstrap";
import Button from "../Header/Header";

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
                    <Navbar color="transparent" light expand='lg' className="p-3 pl-5 pr-5">
                        <NavLink className='font-weight-bold text-white text-uppercase navbar-brand'  to="/">Tunga</NavLink>
                        <NavbarToggler onClick={this.toggle} className="text-white"/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <RNav className="ml-auto text-right" navbar>
                                <NavItem>
                                    <NavLink to={Routing.ourStory.path}>{Routing.ourStory.name}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to={Routing.ourTeam.path}>{Routing.ourTeam.name}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to={Routing.news.path}>{Routing.news.name}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <a className="">Log In</a>
                                </NavItem>
                                <NavItem>
                                    <RNavLink className="ml-3 text-white btn btn-lg btn-primary p-4 border-radius-0">Schedule a Call </RNavLink>
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
