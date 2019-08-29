import React, { Component } from "react";
import "./PublicationDownload.scss";
import { Col, Row } from "reactstrap";
import SideImg from "../../../../assets/img/blog/white-paper-download.png";
import { Form, Title, Button, Input, Group, Select, IconGroup, Cta } from "../../../../shared/Form/Form";
import Icon from "../../../../shared/core/Icon";

class PublicationDownload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            company: '',
            email: '',
            phoneNumber: '',
            country: '',
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
        const { downloadTitle } = this.props;

        return (
            <div className="PublicationDownload">
                <Row>
                    <Col
                        sm="0"
                        md="6">
                        <div className="PublicationDownload__bg-container">
                            <div className="PublicationDownload__bg"
                                 style={{ backgroundImage: `url(${SideImg})` }}></div>
                        </div>
                    </Col>
                    <Col
                        sm="12"
                        md="6">
                        <div className="PublicationDownload__form-container">
                            <Form onSubmit={this.onFormSubmit} className="PublicationDownload__form">
                                <React.Fragment>
                                    <div className="PublicationDownload__title">
                                        {downloadTitle}
                                    </div>
                                    <Group>
                                        <Input className="Form__input--light Form__input--transparent" type="text"
                                               name="fullName" value={this.state.fullName}
                                               onChange={this.handleChange}
                                               placeholder="Full name"/>
                                    </Group>
                                    <Group>
                                        <Input className="Form__input--light Form__input--transparent" type="text"
                                               name="company" value={this.state.company}
                                               onChange={this.handleChange}
                                               placeholder="Company/Organization"/>
                                    </Group>
                                    <Group>
                                        <Input className="Form__input--light Form__input--transparent" type="email"
                                               name="email" value={this.state.email}
                                               onChange={this.handleChange}
                                               placeholder="Business email"/>
                                    </Group>
                                    <Group>
                                        <Input className="Form__input--light Form__input--transparent" type="text"
                                               name="phoneNumber" value={this.state.phoneNumber}
                                               onChange={this.handleChange}
                                               placeholder="Phone number"/>
                                    </Group>
                                    <Group>
                                        <Select className="Form__input--light Form__input--transparent" type="text"
                                                name="country" value={this.state.country}
                                                onChange={this.handleChange}>
                                            <React.Fragment>
                                                <option>--Select a country--</option>
                                            </React.Fragment>
                                        </Select>
                                    </Group>
                                    <div className="text-center">
                                        <Button type="submit"
                                                className="Form__btn--full-w">
                                            Download
                                        </Button>
                                    </div>
                                </React.Fragment>
                            </Form>
                            <div className="PublicationDownload__disclaimer">
                                By submitting this form, you agree that we may contact you by mail, phone or otherwise
                                with information related to this report and the relevant Tunga services. If you already
                                have an account at Tunga, you can control the messages you receive from us in your
                                settings. If you are a guest visitor, you can unsubscribe from Tunga marketing messages
                                any time by clicking the unsubscribe button in the e-mail or by sending us an e-mail to
                                <b>hello@tunga.io</b> with the word “Unsubscribe” in the subject. To learn more, please
                                visit
                                Tunga’s <b>Privacy Policy</b> page.
                            </div>
                        </div>
                    </Col>
                </Row>
                <a className="PublicationDownload__dismiss"
                   onClick={this.props.onDownloadClose}>
                    <Icon
                        name="times-circle-o"
                        size="topbar"
                        className="PublicationDownload__icon"
                    />
                </a>
            </div>
        );
    }
}

PublicationDownload.propTypes = {};

export default PublicationDownload;

