import React, { Component } from "react";
import "./Login.scss";

import Nav from "../../layout/Nav/Nav";
import LoginForm from "./LoginForm/LoginForm";

import HeroBg from "../../assets/img/our-story/hero-bg.png";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="Login">
                <div className="Login__header"
                     style={{ backgroundImage: `url(${HeroBg})` }}>
                    <div className="Login__nav">
                        <Nav/>
                    </div>
                    <div className="Login__form">
                        <LoginForm/>
                    </div>
                    <div className="Login__bg-mask">
                        &nsbp;
                    </div>
                </div>
            </section>
        );
    }
}

Login.propTypes = {};

export default Login;
