import React, { Component } from 'react'
import { Modal, FormGroup, Button, Form } from 'react-bootstrap';

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
                        <h2>Register</h2>
                        <Form.Control type="text" placeholder="Enter Full Name" />
                        <Form.Control type="text" placeholder="10 Digit Phone Number" />
                        <Form.Control type="Password" placeholder="Enter Password" />
                        <Form.Control type="Password" placeholder="Confirm Password" />
                        <Form.Check type="checkbox" label="I agree the terms and conditions" />
                        <Button>Register</Button>
                        <div className="modal-response">
                            <span ></span>
                        </div>
                    </FormGroup>
                </Modal.Body>
            </Modal>
        )
    }
}
