import React, { Component } from 'react';

class Account extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: 12345,
            username: 'John Doe',
            email: 'johndoe@gmail.com',
            creation_date: '02/01/2019',
            phone_number: '516-999-9999',
            delivery_address: '123 Bluestone Lane, New York, NY',
            default_payment_source: 'American Express ending in 0789',
            email_subscription_plan: 'Promotion Emails'
        }
    }

    render() {
        return (
            <div className="account">

                <div className="account-section">
                    <b>Welcome {this.state.username}!</b>
                </div>

                <div className="account-section">
                    <b>Profile</b>

                    <p>{this.state.email} </p>
                    <p>{this.state.phone_number} </p>
                    <p>User since {this.state.creation_date.slice(6)} </p>
                </div>

                <div className="account-section">
                    <b>Settings</b>

                    <div className="subsection">
                        <p>Delivery Address: {this.state.delivery_address}</p>
                    </div>

                    <div className="subsection">
                        <p>Payment: {this.state.default_payment_source}</p>
                    </div>

                    <div className="subsection">
                        <p>Email Subscriptions: {this.state.email_subscription_plan}</p>
                    </div>
                </div>

            </div>

        );
    }
}

export default Account;