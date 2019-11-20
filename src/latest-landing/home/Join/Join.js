import React, { Component } from "react";
import "./Join.scss";

import Nav from "../../layout/Nav/Nav";
import Footer from "../../layout/Footer/Footer";
import PageScroll from "../../shared/PageScroll/PageScroll";
import JoinContent from "../../../components/showcase/Join";

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

class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="Join">
                <div id="Content" className="Join__content agreement-page">
                    <div className="DevProfile__nav">
                        <Nav/>
                    </div>
                    <JoinContent/>
                </div>
                <Footer/>
            </section>
        );
    }
}

Join.propTypes = {};

export default Join;
