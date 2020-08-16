import React, { Component } from 'react';
import { Nav, Navbar, Row,  Modal, FormGroup, Col, FormControl } from 'react-bootstrap';
import './header.css';
import classnames from 'classnames';
import { FaPhone, FaEnvelope, FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter, FaPlay } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import CountUp from 'react-countup';
import ModalForm from './ModalForm';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            show: false,
            modelType: null
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
        const modalType = "";
        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    showModal = (type) => {
        this.setState({
            show: true,
            Type: type
        });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

        

    render() {
        return (
            <div >
                <Modal show={this.state.show} size="sm" onHide={this.hideModal}>
                    <Modal.Body>
                        <FormGroup className="modal-body">
                            <div><ModalForm modalType={this.state.Type}/></div>
                            <div className="modal-response">
                                <span >l</span>
                            </div>
                        </FormGroup>
                        </Modal.Body>
                </Modal>
                <div className="div-login-bar">
                    <div className="container">
                        <Navbar className="loginnavbar" collapseOnSelect expand="lg" >
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto" variant="dark">
                                    <Nav.Link><FaPhone />  +91 7842184610</Nav.Link>
                                    <Nav.Link><FaEnvelope />  bhanu@gmail.com</Nav.Link>
                                </Nav>
                                <Nav className="login-links">
                                    <Row>
                                        <Nav.Link eventKey={2} onClick={() => this.showModal("Login")}>Login /</Nav.Link>
                                        <Nav.Link eventKey={2} onClick={() => this.showModal("Register")}>Register</Nav.Link>
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
                                <Nav.Link href="#deets">Home</Nav.Link>
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
                <div className="service container">
                    <div className="service-details">
                        <div className="section-header text-center">
                            <h2>our services</h2>
                            <p>
                                Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
                        </div>
                        <div className="service-content-one">
                            <Row>
                                <Col xs="12" sm="4">
                                    <div className="service-single text-center">
                                        <div className="service-img">
                                            <img src={require('../images/service/service1.png')} alt=""/>
                                        </div>
                                        <div className="service-txt">
                                            <h2>
                                                <a href="#">busisness planning</a>
                                            </h2>
                                            <p>
                                                Lorem ipsum dolo dolor in in voluptate velit esse cillum dolore. epteur sint oat
                                                cupidatat
              </p>
                                            <a href="#" className="service-btn">
                                                learn more
              </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="4" xs="12">
                                    <div className="service-single text-center">
                                        <div className="service-img">
                                            <img src={require('../images/service/service2.png')} alt=""/>
                                        </div>
                                        <div className="service-txt">
                                            <h2>
                                                <a href="#">busisness consultency</a>
                                            </h2>
                                            <p>
                                                Lorem ipsum dolo dolor in in voluptate velit esse cillum dolore. epteur sint oat
                                                cupidatat
              </p>
                                            <a href="#" className="service-btn">
                                                learn more
              </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="4" xs="12">
                                    <div className="service-single text-center">
                                        <div className="service-img">
                                            <img src={require('../images/service/service3.png')} alt=""/>
                                        </div>
                                        <div className="service-txt">
                                            <h2>
                                                <a href="#">financial services</a>
                                            </h2>
                                            <p>
                                                Lorem ipsum dolo dolor in in voluptate velit esse cillum dolore. epteur sint oat
                                                cupidatat
              </p>
                                            <a href="#" className="service-btn">
                                                learn more
              </a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="service-content-two">
                            <Row>
                                <Col sm="4" xs="12">
                                    <div className="service-single text-center">
                                        <div className="service-img">
                                            <img src={require('../images/service/service4.png')} alt=""/>
                                        </div>
                                        <div className="service-txt">
                                            <h2>
                                                <a href="#">risk management</a>
                                            </h2>
                                            <p>
                                                Lorem ipsum dolo dolor in in voluptate velit esse cillum dolore. epteur sint oat
                                                cupidatat
              </p>
                                            <a href="#" className="service-btn">
                                                learn more
              </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="4" xs="12">
                                    <div className="service-single text-center">
                                        <div className="service-img">
                                            <img src={require('../images/service/service5.png')} alt=""/>
                                        </div>
                                        <div className="service-txt">
                                            <h2>
                                                <a href="#">expert advisers</a>
                                            </h2>
                                            <p>
                                                Lorem ipsum dolo dolor in in voluptate velit esse cillum dolore. epteur sint oat
                                                cupidatat
              </p>
                                            <a href="#" className="service-btn">
                                                learn more
              </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="4" xs="12">
                                    <div className="service-single text-center">
                                        <div className="service-img">
                                            <img src={require('../images/service/service6.png')} alt=""/>
                                        </div>
                                        <div className="service-txt">
                                            <h2>
                                                <a href="#">24/7 customer support</a>
                                            </h2>
                                            <p>
                                                Lorem ipsum dolo dolor in in voluptate velit esse cillum dolore. epteur sint oat
                                                cupidatat
              </p>
                                            <a href="#" className="service-btn">
                                                learn more
              </a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="statistics">
                    <div className="container">
                        <div className="statistics-counter ">
                            <Row>
                                <Col md="3" sm="6">
                                    <div className="single-ststistics-box">
                                        <div className="statistics-img">
                                            <img src={require('../images/counter/counter1.png')} alt=""/>
                                        </div>
                                        <div className="statistics-content">
                                            <CountUp className="counter" end={2556} duration={10} />
                                            <h3>students</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3" sm="6">
                                    <div className="single-ststistics-box">
                                        <div className="statistics-img">
                                            <img src={require('../images/counter/counter2.png')} alt=""/>
                                        </div>
                                        <div className="statistics-content">
                                            <CountUp className="counter" end={326} duration={10} />
                                            <h3>colleges</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3" sm="6">
                                    <div className="single-ststistics-box">
                                        <div className="statistics-img">
                                            <img src={require('../images/counter/counter3.png')} alt=""/>
                                        </div>
                                        <div className="statistics-content">
                                            <CountUp className="counter" end={1526} duration={10} />
                                            <h3>courses</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3" sm="6">
                                    <div className="single-ststistics-box">
                                        <div className="statistics-img">
                                            <img src={require('../images/counter/counter4.png')} alt=""/>
                                        </div>
                                        <div className="statistics-content">
                                            <CountUp className="counter" end={856} duration={10} />
                                            <h3>client satisfied</h3>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="news">
                    <div className="container">
                        <div className="news-details">
                            <div className="section-header text-center">
                                <h2>our latest news</h2>
                                <p>
                                    Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
                            </div>
                            <div className="news-card news-card-pb-25">
                                <Row >
                                    <Col md="4" sm="`6">
                                         <div className="single-news-box">
            <div className="news-box-bg">
            <img src={require('../images/blog/bl1.jpg')} alt="blog image" />
              <div className="isotope-overlay">
                <a href="blog_single.html">
                                <FaPlay />
                </a>
              </div>
            </div>
            <div className="news-box-inner">
              <h3>
                <a href="blog_single.html">
                  The Pros and Cons of Starting an Online Consulting Business
                </a>
              </h3>
              <p className="news-meta">
                Posted By: <span>Mick Steven</span> // On <span>12th June, 2017</span>
              </p>
            </div>
          </div>
                                    </Col>
                                    <Col md="4" sm="6">
          <div className="single-news-box">
            <div className="news-box-bg">
            <img src={require('../images/blog/bl2.jpg')} alt="blog image" />
              <div className="isotope-overlay">
                              <a href="blog_single.html">
                                <FaPlay />
                              </a>
              </div>
            </div>
            <div className="news-box-inner">
              <h3>
                <a href="blog_single.html">
                  8 Secrets for Your successful Business Mentor Won't Tell You
                </a>
              </h3>
              <p className="news-meta">
                Posted By: <span>Mick Steven</span> // On <span>12th June, 2017</span>
              </p>
            
            </div>
          </div>
                                    </Col>
        <Col md="4" sm="6">
          <div className="single-news-box">
            <div className="news-box-bg">
                <img src={require('../images/blog/bl3.jpg')} alt="blog image" />
              <div className="isotope-overlay">
                <a href="blog_single.html">
                                <FaPlay/>
                </a>
              </div>
            </div>
                                           <div className="news-box-inner">
              <h3>
                <a href="blog_single.html">
                  Hire a Branding Consultant With a Similar Aesthetic to Your Own
                </a>
              </h3>
              <p className="news-meta">
                Posted By: <span>Mick Steven</span> // On <span>12th June, 2017</span>
              </p>
              
            </div>
          </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="contact">
                   <div className="container">
  <div className="contact-details">
    <div className="section-header contact-head">
      <h2>contact us</h2>
    </div>
    <div className="contact-content">
      <Row >
        <Col sm="6">
          <div className="single-contact-box">
            <div className="contact-right">
              <div className="contact-adress">
                <div className="contact-office-address">
                  <h3>contact info</h3>
                  <p>
                    125, Park street avenue, Brocklyn, Newyork.
                  </p>
                  <div className="contact-online-address">
                    <div className="single-online-address">
                      <FaPhone/>
                      +11253678958
                    </div>
                    <div className="single-online-address">
                      <FaEnvelope/>
                      info@mail.com
                    </div>
                  </div>
                </div>
                <div className="contact-office-address">
                  <h3>social partner</h3>
                  <div className="contact-icon">
                    <ul>
                                                                <li><a href="#"><FaFacebookF /></a></li>
                                                                <li><a href="#"><FaGoogle/></a></li>
                                                                <li><a href="#"><FaLinkedinIn/></a></li>
                                                                <li><a href="#"><FaTwitter/></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
                                    <Col sm="5">
          <div className="single-contact-box">
            <div className="contact-form">
              <h3>Leave us a Massage Here</h3>
                <Row>
                  <Col sm="6" xs="2">
                    <FormGroup >
                      <FormControl type="text"  id="firstname" placeholder="First Name" name="firstname" />
                                                            </FormGroup>
                                                        </Col>
                                                    <Col sm="6" xs="2">
                    <FormGroup>
                      <FormControl type="text"  id="lastname" placeholder="Last Name" name="laststname" />
                                                        </FormGroup>
                  </Col>
                </Row>
                <Row >
                                                    <Col sm="6" xs="12">
                    <div className="form-group">
                      <FormControl type="email" id="email" placeholder="Email" name="email" />
                    </div>
                  </Col>
                                                    <Col sm="6" xs="12">
                    <FormGroup>
                      <FormControl type="text"  id="phone" placeholder="Phone" name="phone" />
                                                        </FormGroup>
                    {/*/.form-group*/}
                  </Col>
                  {/*/.col*/}
                </Row>
                <Row >
                  <Col sm="12">
                    <FormGroup >
                                                            <FormControl type="text"  as="textarea" rows="6" id="comment" placeholder="Message" defaultValue={""} />
                                                        </FormGroup>
                                                    </Col>
                </Row>
                                                <Row >
                  <Col sm="12">
                    <div className="single-contact-btn">
                      <button className="contact-btn" type="button">send message</button>
                    </div>
                                                    </Col>
                </Row>
            </div>
                                        </div>
                                        </Col>
        </Row>
    </div>
  </div>
</div>
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
      <i className="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top"  />
    </div>
  </div>
            </div>
            </div >
        )
    }
}

