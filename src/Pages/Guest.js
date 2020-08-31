import React, { Component } from 'react';
import { Nav, Navbar, Row, Modal, FormGroup, Col, FormControl } from 'react-bootstrap';
import '../Components/guest.css';
import classnames from 'classnames';
import { FaPhone, FaEnvelope, FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter, FaPlay } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import LoginModal from '../Components/LoginModal';
import RegisterModal from '../Components/RegisterModal';
import Home from '../Components/Home';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.handleScroll();
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
    }

    onLoginClick = () => {
        this.showModal();
    }

    loginModalRef = ({ handleShow }) => {
        this.showModal = handleShow;
    }



    render() {
        return (
            <div >
                <LoginModal ref={this.loginModalRef} ></LoginModal>
                <div className="div-login-bar">
                    <div className="container">
                        <Navbar className="loginnavbar" collapseOnSelect expand="lg" >
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto" variant="dark">
                                    <Nav.Link><FaPhone />  +91 XXXXXXXXXX</Nav.Link>
                                    <Nav.Link><FaEnvelope />  abc@xyz.com</Nav.Link>
                                </Nav>
                                <Nav className="login-links">
                                    <Row>
                                        <Nav.Link onClick={this.onLoginClick}>Login /</Nav.Link>
                                        <Nav.Link onClick={this.onLoginClick}>Register</Nav.Link>
                                    </Row>
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
                                <Nav.Link href="#memes">Services</Nav.Link>
                                <Nav.Link >News</Nav.Link>
                                <Nav.Link >About</Nav.Link>
                                <Nav.Link href="#memes">Blog</Nav.Link>
                                <Nav.Link href="#memes">Contact Us</Nav.Link>
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
                <Home />
            </div>
        )
    }
}

