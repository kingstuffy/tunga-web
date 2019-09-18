import React, {Component} from "react";
import "./PublicationDownload.scss";
import {Col, FormGroup, Row} from "reactstrap";
import SideImg from "../../../../assets/img/blog/white-paper-download.png";
import {
    Form,
    Title,
    Button,
    Input,
    Group,
    Select,
    IconGroup,
    Cta
} from "../../../../shared/Form/Form";
import Icon from "../../../../shared/core/Icon";
import {isBusinessEmail} from "../../../../../components/utils/search";
import CountrySelector from "../../../../../components/core/CountrySelector";
import FieldError from "../../../../../components/core/FieldError";
import connect from '../../../../../connectors/ProfileConnector';

class PublicationDownload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            company: '',
            country: '',
            email: '',
            phone_number: '',
            paper: 'best_african_countries_for_outsourcing',
            error: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.Profile && nextProps.Profile.isSaved.visitors) {
            const downloadLink = nextProps.Profile.isSaved.visitors.download_url;

            window.open(downloadLink);



        }
    }

    componentDidMount() {
        if (this.props.location.hash.includes("?")){
            const answer_array = this.props.location.hash.split('?');
            if (answer_array[1].includes('research')){
                this.setState({
                    paper: 'scaling_your_team_with_remote_developers'
                });
            }
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {first_name, last_name, email, phone_number, country, company, paper} = this.state;
        if (isBusinessEmail(email)) {
            this.props.ProfileActions.createVisitor({
                first_name,
                last_name,
                email,
                phone_number,
                country,
                company,
                paper
            });
        } else {
            this.setState({error: true});
        }
    };

    onChangeField(key, e) {
        let newState = {};
        if (key === 'country') {
            newState[key] = e;
        } else {
            newState[key] = e.target.value;
        }
        this.setState(newState);
    }


    render() {
        const {downloadTitle} = this.props;
        const {first_name, last_name, company, email, country, phone_number} = this.state;

        return (
            <div className="PublicationDownload">
                <Row>
                    <Col
                        sm="0"
                        md="6">
                        <div className="PublicationDownload__bg-container">
                            <div className="PublicationDownload__bg"
                                 style={{backgroundImage: `url(${SideImg})`}}>
                            </div>
                        </div>
                    </Col>
                    <Col
                        sm="12"
                        md="6">
                        <div className="PublicationDownload__form-container">
                            <Form onSubmit={this.handleSubmit}>
                                <React.Fragment>
                                    <div className="PublicationDownload__title">
                                        {downloadTitle}
                                    </div>
                                    <Group>
                                        <Input placeholder="First name"
                                               className="Form__input--light Form__input--transparent"
                                               required
                                               value={first_name}
                                               onChange={this.onChangeField.bind(this, 'first_name')}
                                        />
                                    </Group>
                                    <Group>
                                        <Input placeholder="Last name"
                                               className="Form__input--light Form__input--transparent"
                                               required
                                               value={last_name}
                                               onChange={this.onChangeField.bind(this, 'last_name')}
                                        />
                                    </Group>
                                    <Group>
                                        <Input
                                            placeholder="Company/Organization"
                                            className="Form__input--light Form__input--transparent"
                                            required
                                            value={company}
                                            onChange={this.onChangeField.bind(this, 'company')}
                                        />
                                    </Group>
                                    <Group>
                                        {this.state.error && <FieldError
                                            message="Please fill in valid business email"/>}
                                        <Input placeholder="Business email"
                                               className="Form__input--light Form__input--transparent"
                                               required
                                               type="email"
                                               value={email}
                                               onChange={this.onChangeField.bind(this, 'email')}
                                        />
                                    </Group>
                                    <Group>
                                        <Input placeholder="Phone number"
                                               className="Form__input--light Form__input--transparent"
                                               required
                                               value={phone_number}
                                               onChange={this.onChangeField.bind(this, 'phone_number')}
                                        />
                                    </Group>
                                    <Group>
                                        <CountrySelector
                                            value={country}
                                            className="Form__input--light Form__input--transparent"
                                            onChange={this.onChangeField.bind(this, 'country')}
                                            required/>
                                    </Group>
                                    <div className="text-center">

                                        <Button className="Form__btn--full-w"
                                                type="submit"
                                                disabled={this.props.Profile.isSaving.visitors}>Download
                                        </Button>
                                    </div>
                                </React.Fragment>
                            </Form>
                            <div className="PublicationDownload__disclaimer">
                                By submitting this form, you agree that we may
                                contact you by mail, phone or otherwise
                                with information related to this report and the
                                relevant Tunga services. If you already
                                have an account at Tunga, you can control the
                                messages you receive from us in your
                                settings. If you are a guest visitor, you can
                                unsubscribe from Tunga marketing messages
                                any time by clicking the unsubscribe button in
                                the e-mail or by sending us an e-mail to
                                <b>hello@tunga.io</b> with the word
                                “Unsubscribe” in the subject. To learn more,
                                please
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

export default connect(PublicationDownload);

