import React, { Component } from 'react';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            address: '',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
    }
    render() {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>this is the item</h4>
                    <h6>this is the desc</h6>
                    <span><input></input></span>
                    
                </div>
            </div>
        </div>
    );
} }

export default Order;  