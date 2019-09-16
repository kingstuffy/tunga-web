import React, {Component} from 'react';
import {Elements, StripeProvider, CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';

import Button from "./Button";
import Progress from "./Progress";
import Error from "./Error";

import {ENDPOINT_INVOICES} from "../../actions/utils/api";
import {parseStripeAmount} from "../utils/stripe";

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intent: null,
            complete: false,
            error: null
        };
        this.element = null;
    }

    componentDidMount() {
        const {invoice, email} = this.props,
            self = this;

        axios.post(`${ENDPOINT_INVOICES}${invoice.id}/pay-intent/`, {
                payment_method: 'stripe',
                amount: parseStripeAmount(invoice.total_amount),
                email
            }, {})
            .then(function (response) {
                self.setState({intent: response.data, error: null});
            })
            .catch(function (error) {
                self.setState({error: 'Something went wrong! Please contact hello@tunga.io'});
            });
    }

    onReady = (element) => {
        this.element = element;
    };

    onChange = (data) => {
        this.setState({complete: data.complete, error: null});
    };

    onSubmit = (e) => {
        console.log('onSubmit => ', e);
        const {stripe, invoice, email, InvoiceActions, selectionKey, proceed} = this.props,
            {intent} = this.state,
            self = this;

        self.setState({error: null});

        stripe.handleCardPayment(
            intent.client_secret, this.element, {
                save_payment_method: true
            }
        ).then(function(result) {
            if (result.error) {
                // Display error.message in your UI.
                self.setState({error: 'Something went wrong! Please contact hello@tunga.io'});
            } else {
                // The payment has succeeded. Display a success message.
                const paymentIntent = result.paymentIntent;
                console.log('paymentIntent => ', paymentIntent);
                if(paymentIntent.status === 'succeeded') {
                    console.log('data => ', {...paymentIntent, email});
                    InvoiceActions.payInvoice(invoice.id, {...paymentIntent, email}, selectionKey);
                    if(proceed) {
                        proceed({invoice, paymentIntent});
                    }
                }
            }
        });

        // User clicked submit
        //let {token} = await this.props.stripe.createToken({name: "Name", currency: 'EUR'});
    };

    render() {
        const {intent, complete, error} = this.state;

        return (
            <div className="checkout">
                {error && <Error message={error}/>}
                {intent && intent.client_secret?(
                    <React.Fragment>
                        <CardElement onReady={this.onReady} onChange={this.onChange}/>
                        <Button onClick={this.onSubmit} disabled={!complete}>Send</Button>
                    </React.Fragment>
                ):(
                    <Progress/>
                )}
            </div>
        );
    }
}

const CheckoutFormWrapper = injectStripe(CheckoutForm);

export default (props) => {
    return (
        <StripeProvider apiKey={__STRIPE_KEY__}>
            <div>
                <Elements>
                    <CheckoutFormWrapper {...props}/>
                </Elements>
            </div>
        </StripeProvider>
    );
};
