import React from "react";
import './Footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"

const quick__links = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/about",
        display: "About",
    },
    {
        path: "/tours",
        display: "Tours",
    },
];

const quick__links2 = [
    {
        path: "/about",
        display: "Gallery",
    },
    {
        path: "/login",
        display: "Login",
    },
    {
        path: "/register",
        display: "Register",
    },
];


const Footer = () => {

    const year = new Date().getFullYear()

    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='3'>
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>Embark on a journey of discovery with Venture Vista. Explore the world's wonders, immerse yourself in diverse cultures, and create unforgettable memories.
                        </p>
                        <div className="social__links dp-flex align-items-center gap-4">
                            <span>
                                <Link to='#'><i class="ri-youtube-line"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i class="ri-github-fill"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i class="ri-instagram-line"></i></Link>
                            </span>
                        </div>
                    </div>
                </Col>

                <Col lg='3'>
                    <h5 className="footer_link-title">Discover</h5>
                    <ListGroup className="footer__quick-links">
                        {
                            quick__links.map((item,index) => (
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                <h5 className="footer_link-title">Quick Links</h5>
                    <ListGroup className="footer__quick-links">
                        {
                            quick__links2.map((item,index) => (
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                
                <Col lg='3'>
                <h5 className="footer_link-title">Contact</h5>
                    <ListGroup className="footer__quick-links">
                                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3"> 
                                <h6 className="mb-0 d-flex align-items-center gap-2"> 
                                    <span>
                                    <i class="ri-map-pin-line"></i>
                                    Address:
                                    </span>
                                </h6>
                                <p className="mb-0">Conestoga College</p>
                                </ListGroupItem>
                                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3"> 
                                <h6 className="mb-0 d-flex align-items-center gap-2"> 
                                    <span>
                                    <i class="ri-mail-line"></i>
                                    Email:
                                    </span>
                                </h6>
                                <p className="mb-0">venturevista@gmail.com</p>
                                </ListGroupItem>
                                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3"> 
                                <h6 className="mb-0 d-flex align-items-center gap-2"> 
                                    <span>
                                    <i class="ri-phone-line"></i>
                                    Phone
                                    </span>
                                </h6>
                                <p className="mb-0">+1(111)-222-3333</p>
                                </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col lg='12' className="text-center pt-5">
                    <p className="copyright">Copyright {year}, design and develop by Capstone Group 4. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer;