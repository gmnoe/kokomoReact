import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Input, CardTitle, 
    Button, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors, Field } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);

class RenderReserve extends Component {

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
                <CardTitle>Reserve A Table</CardTitle>
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
                                        // required,
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
                                        // required,
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
                    <Row className="form-group row">
                        <Col md={10}>
                        <Label className="col-sm-2 col-form-label" htmlFor="date">Date:</Label>
                            <Input
                                type="date"
                                name="date"
                                id="exampleDate"
                                placeholder="date placeholder"
                                className="form-control"
                                required
                            />
                        </Col>
                    </Row>
                    <div className="form-group row">
                        <Col>
                        <Label className="col-sm-2 col-form-label" htmlFor="time">Time:</Label>
                            <Input
                                type="time"
                                name="time"
                                id="time"
                                placeholder="time placeholder"
                                className="form-control"
                                required
                            />
                        </Col>
                    </div>
                    <Button color="primary">Reserve A Table</Button>
                </LocalForm>
            </CardBody>
        </Card>
        );
    }
}

export default RenderReserve;