import React, { Component } from 'react';
import { Nav, Navbar, Row, Modal, FormGroup, Col, FormControl, Form, Table } from 'react-bootstrap';
import '../Components/guest.css';
import classnames from 'classnames';
import { FaPhone, FaEnvelope, FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter, FaUser, FaBookReader, FaCamera, } from 'react-icons/fa';
import EditIcon from '@material-ui/icons/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import AcademicTable from '../Components/AcademicTable';
import { Redirect } from 'react-router-dom';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = window.pageYOffset === 0;
        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    // products = [{
    //     name: "B-Tech",
    //     desc: "A complete package for testing your carees.Exam of 120 questions",
    //     price: 150
    // }, {
    //     name: "B-Pharma",
    //     desc: "A complete package for testing your carees.Exam of 60 questions",
    //     price: 130
    // },
    // {
    //     name: "B-Comm",
    //     desc: "A complete package for testing your carees.Exam of 110 questions",
    //     price: 100
    // }];

    // renderTableData() {
    //     return this.products.map((products, index) => {
    //         const { name, desc, price } = products //destructuring
    //         return (
    //             <tr>
    //                 <td >
    //                     <i className="exam-icon"><FaBookReader /></i>
    //                 </td>
    //                 <td >
    //                     <div className="exam-name">
    //                         <h2>{name}</h2>
    //                         <p>{desc}</p>
    //                     </div>
    //                 </td>
    //                 <td>
    //                     <label className="course-price">Rs {price}</label>
    //                 </td>
    //                 <td >
    //                     <div>
    //                         <input className="tgl tgl-skewed" id="cb4" type="checkbox" />
    //                         <label className="tgl-btn" data-tg-off="SELECT" data-tg-on="ADDED"
    //                             htmlFor="cb4"></label>
    //                     </div>
    //                 </td>
    //             </tr>
    //         )
    //     })
    // };

    render() {
        if (!sessionStorage.getItem('userData')) {
            return (<Redirect to='/' />);
        }
        return (
            <div >
                <div className="div-login-bar">
                    <div className="container">
                        <Navbar className="loginnavbar" collapseOnSelect expand="lg" >
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto" variant="dark">
                                    <Nav.Link><FaPhone />  +91 XXXXXXXXXX</Nav.Link>
                                    <Nav.Link><FaEnvelope />  deskool@gmail.com</Nav.Link>
                                </Nav>
                                <Nav className="social-links">
                                    <Nav.Link href="#deets"><FaFacebookF /></Nav.Link>
                                    <Nav.Link href="#deets" ><FaGoogle /></Nav.Link>
                                    <Nav.Link href="#deets"><FaLinkedinIn /></Nav.Link>
                                    <Nav.Link href="#deets"><FaTwitter /></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar >
                    </div>
                </div>
                <div className={classnames({
                    "div-menu-bar": !this.state.visible
                }, {
                    "div-menu-bar--active": this.state.visible
                })}>
                    <Navbar collapseOnSelect className={classnames("menubar", {
                        "menubar--active": this.state.visible
                    })} expand="lg" variant="dark">
                        <Navbar.Brand href="#home">Educa-Do</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            {/* <Nav className="mr-auto">

                        </Nav> */}
                            <Nav className="ml-auto">
                                <Nav.Link >Dashboard</Nav.Link>
                                <Nav.Link >Apply</Nav.Link>
                                <Nav.Link >News</Nav.Link>
                                <Nav.Link >About</Nav.Link>
                                <Nav.Link ><FaUser /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="header-slider-area">
                    <Carousel className="carousel-inner">
                        <Carousel.Item>
                            <div className="single-slide-item slide-1">
                                <div className="container">
                                    <Row >
                                        <Col sm="12">
                                            <div className="single-slide-item-content">
                                                <h2>Enhance Your <br /> Career With Us</h2>
                                                <p>
                                                    Give a boost to your knowledge and testify yourself what you deserve and
                                                    where you stand today.
                </p>
                                                <button type="button" className="slide-btn" onClick={() => this.showModal("Register")}>
                                                    Register
                </button>
                                                <button type="button" className="slide-btn">
                                                    explore more
                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="single-slide-item slide-2">
                                <div className="container">
                                    <Row>
                                        <Col sm="12">
                                            <div className="single-slide-item-content">
                                                <h2>
                                                    Consult Your <br /> Business
										</h2>
                                                <p>
                                                    We are the unique Consultancy Farm for your business solution, That is ready
                                                    to take challenge and knockout your business problems.
										</p>
                                                <button type="button" className="slide-btn" onClick={() => this.showModal("Register")}>
                                                    get started
										</button>
                                                <button type="button" className="slide-btn
											">
                                                    explore more
										</button>
                                            </div>

                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div id="application" className="team">
                    <div className="container">
                        <div className="application-content">
                            <div className="sub-section">
                                <div className="table-title">
                                    <h2>Choose Your <b>Exam</b></h2>
                                </div>
                                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                    <Table className="table table-bordered table-striped">
                                        <tbody>
                                            {/* {this.renderTableData()} */}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="sub-section">
                                <div className="table-title">
                                    <h2>Personal <b>Details</b></h2>
                                </div>
                                <Row>
                                    <Col md="8">
                                        <div className="form-group form-row input-group">
                                            <div className="form-group col-md-4">
                                                <input type="text" className="form-control" id="fname" placeholder="First Name" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <input type="text" className="form-control" id="mname" placeholder="Middle Name" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <input type="text" className="form-control" id="lname" placeholder="Last Name" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <input type="text" className=" form-control" id="fname" placeholder="Father's Name" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <input type="email" className="form-control" id="email" placeholder="Email" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <input type="number" className="form-control" id="phone" placeholder="Phone" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input type="text" className="form-control" id="inputAddress" placeholder="Communication Address" />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <input type="text" className="form-control" id="inputCity" placeholder="City" />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <input type="text" className="form-control" id="inputZip" placeholder="Zip" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <select id="inputState" className="form-control" aria-placeholder="State">
                                                    <option>Bihar</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <select id="inputState" className="form-control" aria-placeholder="State">
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-1">
                                                <label htmlFor="dob">DOB: </label>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <input type="date" id="dob" className=" form-control " min="1980-01-01" max="2018-12-31" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="4" className="photo-section">
                                        <div className="circle">
                                            {/* User Profile Image */}
                                            <img className="profile-pic" src={require('../images/blog/bl1.jpg')} />
                                        </div>
                                        <div className="p-image">
                                            <i className="upload-button" data-toggle="tooltip" title="Add Photo" ><FaCamera /></i>
                                            <input className="file-upload" type="file" accept="image/*" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="sub-section">
                                <AcademicTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

