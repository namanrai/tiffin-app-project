import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/home.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import RestaurantIcon from '@mui/icons-material/Restaurant';

function Footer() {
    return (
        <footer className="footer mt-5">
            <Container>
                <Row>
                    <Col xs={12} md={4} className="footer-left d-flex flex-column justify-content-center">
                        <div className="d-flex align-items-center mb-3">
                            <RestaurantIcon className="footer-logo mb-3" />
                            <h5>Roti Express</h5>
                        </div>
                        <div className="social-links">
                            <a href="https://facebook.com" className="me-2"><FacebookIcon/></a>
                            <a href="https://linkedin.com" className="me-2"><LinkedInIcon/></a>
                            <a href="https://instagram.com" className="me-2"><InstagramIcon/></a>
                        </div>
                    </Col>
                    <Col xs={12} md={8} className="footer-right d-flex justify-content-around">
                        <div className="footer-column">
                            <h6>Heading 1</h6>
                            <ul className="list-unstyled">
                                <li><a href="#link1">Link 1</a></li>
                                <li><a href="#link2">Link 2</a></li>
                                <li><a href="#link3">Link 3</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h6>Heading 2</h6>
                            <ul className="list-unstyled">
                                <li><a href="#link4">Link 4</a></li>
                                <li><a href="#link5">Link 5</a></li>
                                <li><a href="#link6">Link 6</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h6>Heading 3</h6>
                            <ul className="list-unstyled">
                                <li><a href="#link7">Link 7</a></li>
                                <li><a href="#link8">Link 8</a></li>
                                <li><a href="#link9">Link 9</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
