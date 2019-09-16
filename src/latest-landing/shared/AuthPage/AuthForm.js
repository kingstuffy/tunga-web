import React, { Component } from "react";
import "./AuthPage.scss";

import Nav from "../../layout/Nav/Nav";
import AuthForm from "./AuthForm/AuthForm";

import HeroBg from "../../assets/img/our-story/hero-bg.png";

class AuthPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="AuthPage">
                <div className="AuthPage__header"
                     style={{ backgroundImage: `url(${HeroBg})` }}>
                    <div className="AuthPage__nav">
                        <Nav/>
                    </div>
                    <div className="AuthPage__form">
                        <AuthForm {...this.props}/>
                    </div>
                    <div className="AuthPage__bg-mask">
                    </div>
                </div>
            </section>
        );
    }
}

AuthPage.propTypes = {};

export default AuthPage;
