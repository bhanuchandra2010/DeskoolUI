import React, { Component } from 'react'
import { Modal, FormGroup, Button, Form, Col, Row } from 'react-bootstrap';
import PostData from '../Services/PostData';
import { Redirect } from 'react-router-dom';
import './register.css';

export default class Register extends Component {
    constructor() {
        super();
        this.register = this.register.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            fullname: '',
            email: '',
            password: '',
            confirmpwd: '',
            info: '',
            redirectToReferrer: false
        };
    }

    register() {
        if (!this.state.fullname || !this.state.email || !this.state.password || !this.state.confirmpwd) {
            PostData('register', this.state).then((result) => {
                let responseJson = result;
                if (responseJson.token) {
                    sessionStorage.setItem('userData', JSON.stringify(responseJson));
                    this.setState({ redirectToReferrer: true });
                }
            });
        }
        else {

        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
            return (<Redirect to={'/user'} />)
        }
        return (
            <div>
                <div className="logo">
                    <a href="#">Deskool</a>
                </div>
                <FormGroup className="login-group modal-body">
                    <h2>Register</h2>
                    <Form.Control type="text" name="username" onChange={this.onChange} placeholder="Enter Full Name" />
                    <Form.Control type="text" name="email" onChange={this.onChange} placeholder="Enter valid Email Id" />
                    <Form.Control type="Password" name="password" onChange={this.onChange} placeholder="Enter Password" />
                    <Form.Control type="Password" name="confirmpwd" onChange={this.onChange} placeholder="Confirm Password" />
                    <Form.Check type="checkbox" name="agree" onChange={this.onChange} label="I agree the terms and conditions" />
                    <Button>Register</Button>
                    <div className="modal-response">
                        <span ></span>
                    </div>
                </FormGroup>
                <div className="footer-copyright">
                    <div className="container">
                        <Row >
                            <Col sm="7">
                                <div className="foot-copyright">
                                    <p>
                                        © All Rights Reserve
            <a href="https://www.bhanu.com">bhanu</a>
                                    </p>
                                </div>
                            </Col>
                            <Col sm="5">
                                <div className="foot-menu">
                                    <ul>
                                        <li><a href="#">legal</a></li>
                                        <li><a href="#">sitemap</a></li>
                                        <li><a href="#">privacy policy</a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <div id="scroll-Top">
                            <i className="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title data-original-title="Back to Top" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
