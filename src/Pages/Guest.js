import React, { Component } from 'react';
import { Nav, Navbar, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import '../Components/guest.css';
import classnames from 'classnames';
import { FaPhone, FaEnvelope, FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter, FaPlay } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Home from '../Components/Home';
import { Redirect } from 'react-router-dom';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            redirect: false,
            loginRoute: false,
            registerRoute: false
        };

        this.loginClick = this.loginClick.bind(this);
        this.registerClick = this.registerClick.bind(this);
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.handleScroll();
        if (sessionStorage.getItem('userData')) {
            this.setState({ redirect: true });
        }
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

    loginClick = () => {
        this.setState({ loginRoute: true });
    }
    registerClick = () => {
        this.setState({ registerRoute: true });
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to='/user' />);
        }
        if (this.state.loginRoute) {
            return (<Redirect to='/login' />);
        }
        if (this.state.registerRoute) {
            return (<Redirect to='/register' />);
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
                                    <Nav.Link><FaEnvelope />  abc@xyz.com</Nav.Link>
                                </Nav>
                                <Nav className="login-links">
                                    <Row>
                                        <Nav.Link onClick={this.loginClick}>Login /</Nav.Link>
                                        <Nav.Link onClick={this.registerClick}>Register</Nav.Link>
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
                                                <h2>Enhance Your Career With Us</h2>
                                                <p>
                                                    We help you find your correct place to meet your destination.
                </p>
                                                <Row>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            Select Best Schools Around You
  </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <button type="button" className="slide-btn" >
                                                        Submit
                </button>
                                                </Row>
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

