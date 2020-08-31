import React, { Component } from 'react'
import { Modal, FormGroup, Button, Form, Row, Col } from 'react-bootstrap';

export default class RegisterModal extends Component {
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
            <Modal show={this.state.show} size="sm" onHide={this.handleClose}>
                <Modal.Body>
                    <FormGroup className="modal-body">
                        <h2>Login</h2>
                        <Form.Control type="text" placeholder="Enter Full Name" />
                        <Form.Control type="Password" placeholder="Enter Password" />
                        <Row>
                            <Col md="3">
                                <Button onClick={this.onSubmit}>Login</Button>
                            </Col>
                            <Col md="9">
                                <a href='javascript:void(0)' onClick={this.loadForgotContent} className="forgot-password" >Forgot Password</a>
                            </Col>
                        </Row>
                        <div className="modal-response">
                            <span ></span>
                        </div>
                    </FormGroup>
                </Modal.Body>
            </Modal>
        )
    }
}
