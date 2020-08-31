import React, { Component } from 'react'
import { Modal, FormGroup, Button, Form, Row, Col } from 'react-bootstrap';
import './login.css';

export default class Register extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            email: "",
            password: "",
            show: false,
            isError: false,
            info: ""
        }

    }
    handleShow() {
        this.setState({ show: true })
    }
    handleClose() {
        this.setState({ show: false })
    }

    render() {
        return (
            <div>

                <div className="logo">
                    <a href="#">Educa-Do</a>
                </div>
                <FormGroup className="login-group">
                    <h3>Login</h3>
                    <Form.Label>Enter Username</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type="Password" />

                    <Button className="login-button" onClick={this.onSubmit}>Login</Button>
                    <a href='javascript:void(0)' onClick={this.loadForgotContent} className="forgot-password" >Forgot Password</a>
                    <div className="modal-response">
                        <span ></span>
                    </div>
                </FormGroup>
                <div className="divider">
                    <line x1="0" y1="0" x2="300" y2="0" />
                    <span>New to Educa-Do</span>
                    <line x1="0" y1="0" x2="200" y2="0" />

                </div>
                <div className=" form-group register-group">
                    <Button>Create your Educa-Do Account</Button>
                </div>
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
