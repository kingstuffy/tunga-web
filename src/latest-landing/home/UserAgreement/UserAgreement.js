import React, { Component } from "react";
import "./UserAgreement.scss";

import Nav from "../../layout/Nav/Nav";
import Footer from "../../layout/Footer/Footer";
import PageScroll from "../../shared/PageScroll/PageScroll";
import UserAgreementContent from "../../../components/showcase/Agreement";

const pages = [
    {
        hash: "Content",
        title: "Content",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff",
        theme: "light",
    },
    {
        hash: "Contact",
        title: "Contact",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff",
        theme: "dark",
    },
];

class UserAgreement extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="UserAgreement">
                <div id="Content" className="UserAgreement__content agreement-page">
                    <div className="DevProfile__nav">
                        <Nav/>
                    </div>
                    <UserAgreementContent/>
                </div>
                <Footer/>
            </section>
        );
    }
}

UserAgreement.propTypes = {};

export default UserAgreement;
