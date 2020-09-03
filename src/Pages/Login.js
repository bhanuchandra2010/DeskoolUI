import React, { Component } from 'react'
import { Modal, FormGroup, Button, Form, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './login.css';
import PostData from '../Services/PostData';

export default class Login extends Component {
    constructor() {
        super();
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false,
            info: ''
        };
    }

    login() {
        if (this.state.username && this.state.password) {
            PostData('login', this.state).then((result) => {
                let responseJson = result;
                if (responseJson.token) {
                    sessionStorage.setItem('userData', JSON.stringify(responseJson));
                    this.setState({ redirectToReferrer: true });
                }
                else {
                    this.setState({ info: 'Check your credentials' });
                }
            });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        if (this.state.redirectToReferrer && sessionStorage.getItem('userData')) {
            return (<Redirect to={'/user'} />)
        }
        return (
            <div>
                <div className="logo">
                    <a >Deskool</a>
                </div>
                <FormGroup className="login-group">
                    <h3>Login</h3>
                    <Form.Label>Enter Username</Form.Label>
                    <Form.Control type="text" name="username" onChange={this.onChange} />
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type="Password" name="password" onChange={this.onChange} />

                    <Button className="login-button" onClick={this.login}>Login</Button>
                    <a href='javascript:void(0)' onClick={this.loadForgotContent} className="forgot-password" >Forgot Password</a>
                    <div className="modal-response">
                        <span ></span>
                    </div>
                </FormGroup>
                <div className="divider">
                    <line x1="0" y1="0" x2="300" y2="0" />
                    {/* <span>New to Deskool</span> */}
                    <line x1="0" y1="0" x2="200" y2="0" />
                </div>
                <div className=" form-group register-group">
                    <Button>Create your Deskool Account</Button>
                </div>
                <div className="info-group">
                    <label>{this.state.info}</label>
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
