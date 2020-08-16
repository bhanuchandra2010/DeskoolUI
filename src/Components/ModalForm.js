import React, { Component } from 'react';
import { Row, Button, Form, Col } from 'react-bootstrap';

export default class ModalForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalType: props.modalType
        };
    }

    loadForgotContent = () => {
        this.setState({ modalType: "Forgot Password" });
    };

    render() {
        if (this.state.modalType === 'Login') {
            return (
                <div>
                    <h2>{this.state.modalType}</h2>
                    <Form.Control type="text" placeholder="Enter Phone Number" />
                    <Form.Control type="text" placeholder="Enter Password" />
                    <Form.Check className="form-control" type="checkbox" label="Remember Password" />
                    <Row>
                        <Col md="3">
                            <Button >Login</Button>
                        </Col>
                        <Col md="9">
                            <a href='javascript:void(0)' onClick={this.loadForgotContent} className="forgot-password" >Forgot Password</a>
                        </Col>

                    </Row>
                </div>
            )
        }
        else if (this.state.modalType === 'Register') {
            return (
                <div>
                    <h2>{this.state.modalType}</h2>
                    <Form.Control type="text" placeholder="Enter Full Name" />
                    <Form.Control type="text" placeholder="Enter Phone Number" />
                    <Form.Control type="Password" placeholder="Enter Password" />
                    <Form.Control type="Password" placeholder="Confirm Password" />
                    <Form.Check type="checkbox" label="I agree the terms and conditions" />
                    <Button>Register</Button>
                </div>
            )
        }
        else if (this.state.modalType === 'Change Password') {
            return (
                <div>
                    <h2>{this.state.modalType}</h2>
                    <Form.Control type="Password" placeholder="Enter Extsting Password" />
                    <Form.Control type="Password" placeholder="Enter Password" />
                    <Form.Control type="Password" placeholder="Confirm Password" />
                    <Button>"Update"</Button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h2>{this.state.modalType}</h2>
                    <Form.Control type="text" placeholder="Enter Full Name" />
                    <Form.Control type="text" placeholder="Enter Phone Number" />
                    <Button>Get Password</Button>
                </div>
            )
        }
    }
}
