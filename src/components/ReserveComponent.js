import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardTitle, 
    Button, Label, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);

class Reserve extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            numPeople: '',
            date: '',
            time: '',
            feedback: '',
            touched: {
                name: false,
                numPeople: false,
                date: false,
                time: false
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
        <Card>
            <CardHeader className="bg-info text-white">
                <CardTitle id="reserve">Reserve A Table</CardTitle>
            </CardHeader>
            <CardBody>
                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                    <div className="form-group row">
                        <Label htmlFor="name" className="col-sm-2 col-form-label">Name: </Label>
                        <Col sm={10}>
                            <Control.text model=".name" id="name" name="name"
                                    className="form-control"
                                    placeholder="Enter Your Name..."
                                    validators={{
                                        required,
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                            />
                            <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                Component="div"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be at least 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </div>
                    <div className="form-group row">
                        <Label htmlFor="numPeople" className="col-sm-2 col-form-label">Number of People:</Label>
                        <Col sm={10}>
                            <Control.text model=".numPeople" id="numPeople" name="numPeople"
                                    className="form-control"
                                    placeholder="Number of People"
                                    validators={{
                                        required,
                                        isNumber
                                    }}
                                />
                            <Errors
                                className="text-danger"
                                model=".numPeople"
                                show="touched"
                                Component="div"
                                messages={{
                                    required: 'Required',
                                    isNumber: 'Must be a number'
                                }}
                            />
                        </Col>
                    </div>
                    <div className="form-group row">
                        <Label htmlFor="date" className="col-sm-2 col-form-label">Date:</Label>
                        <Col sm={10}>
                            <Control type="date" model=".date" id="date" name="date" 
                                    className="form-control"
                                    placeholder="Number of People"
                                    validators={{
                                        required
                                    }}
                                />
                            <Errors
                                className="text-danger"
                                model=".date"
                                show="touched"
                                Component="div"
                                messages={{
                                    required: 'Required'
                                }}
                            />
                        </Col>
                    </div>
                    <div className="form-group row">
                        <Label htmlFor="time" className="col-sm-2 col-form-label">Time:</Label>
                        <Col sm={10}>
                            <Control type="time" model=".time" id="time" name="time"
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                />
                            <Errors
                                className="text-danger"
                                model=".time"
                                show="touched"
                                Component="div"
                                messages={{
                                    required: 'Required'
                                }}
                            />
                        </Col>
                    </div>
                    <Button color="info">Reserve A Table</Button>
                </LocalForm>
            </CardBody>
        </Card>
        );
    }
}

export default Reserve;