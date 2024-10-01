import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/styles.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import rotiLogo from '../assets/logo-roti.svg';

function Footer() {
    return (
        <footer className="footer">
          <Container>
            <Row className="align-items-start">
              

              <Col>
                    <Col xs={12} md={4} className="footer-left d-flex flex-column justify-content-center footer-items">
                                <div className="d-flex align-items-center mb-3">
                                <img src={rotiLogo} alt="Roti Xpress Logo" className="footer-logo" style={{ width: '50px', marginRight: '10px' }} />
                                <h4>Roti Xpress</h4>
                                </div>
                                <div className="social-links">
                                    <a href="https://facebook.com" className="me-2"><FacebookIcon/></a>
                                    <a href="https://linkedin.com" className="me-2"><LinkedInIcon/></a>
                                    <a href="https://instagram.com" className="me-2"><InstagramIcon/></a>
                                </div>
                            </Col>
              </Col>
    

              <Col xs={12} md={5} className="text-center footer-col footer-items">
                    <div className="footer-column">
                            <h6>Heading 1</h6>
                            <ul className="list-unstyled">
                                <li><a href="#link1">Link 1</a></li>
                                <li><a href="#link2">Link 2</a></li>
                                <li><a href="#link3">Link 3</a></li>
                            </ul>
                    </div>
                    
              </Col>
    
              <Col xs={12} md={4} className="footer-col footer-items">
                <h5>Contact Information</h5>
                

                <div className="google-map mb-3">
                  <iframe
                    title="Roti Xpress Location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11532.263859130406!2d-79.7653087!3d43.7299565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b173bfe25d665%3A0x31d78a9c790bc136!2sRoti%20Xpress!5e0!3m2!1sen!2sca!4v1727810913122!5m2!1sen!2sca"
                    width="70%"
                    height="150"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
    

                <p><strong>Hours of Operation:</strong></p>
                <p>Mon - Fri: 9 AM - 9 PM</p>
                <p>Sat - Sun: 10 AM - 8 PM</p>
                <p><strong>Phone:</strong> 437-215-4881</p>
              </Col>
            </Row>
    
            {/* Copyright Section */}
            <Row className="mt-4">
              <Col xs={12} className="text-center">
                <p>© Copyright 2024 Roti Xpress. All Rights Reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      );
}

export default Footer;


