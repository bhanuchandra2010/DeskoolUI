import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Nav, Navbar, Row, Modal, FormGroup, Col, FormControl, Form, Table } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter, FaPlay, FaUser, FaBookReader, FaPlus, FaCamera, FaEdit, FaTrash } from 'react-icons/fa';



export default class HtmlColumnFormatTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            academics: [
                {
                    qualification: "",
                    school: "",
                    board: "",
                    marks: 0
                }
            ]
        };
    }

    handleSubmit = (event) => {
        console.log("button clicked");
        let user = { qualification: 'inter', school: 'school', board: 'state', percentage: 47 };
        this.state.academics.push(user);
    };
    renderAcademics = (academic, index) => {
        return (
            <tr>
                <td>{academic.qualification}</td>
                <td>{academic.school}</td>
                <td>{academic.board}</td>
                <td>{academic.percentage}</td>
                <td>
                    <a title="Add" data-toggle="tooltip" ><i
                        class="material-icons">&#xE03B;</i></a>
                    <a title="Edit" data-toggle="tooltip"><i
                        class="material-icons">&#xE254;</i></a>
                    <a title="Delete" data-toggle="tooltip"><i
                        class="material-icons">&#xE872;</i></a>
                </td>
            </tr>
        );
    };
    render() {
        return (
            <div>
                <div className="table-title">
                    <Row>
                        <Col md="8">
                            <h2>Academic <b>Details</b></h2>
                        </Col>
                        <Col md="4">
                            <Form onSubmit={this.handleSubmit()}>

                                <button type="button" className="btn btn-info add-new" >
                                    <FaPlus /> Add Row</button>
                            </Form>
                        </Col>
                    </Row>
                </div>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th>Qualification</th>
                            <th>School/College</th>
                            <th>Board</th>
                            <th>Marks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.state.academics.map(this.renderAcademics)} */}
                    </tbody>
                </table >
            </div >
        );
    }
}
