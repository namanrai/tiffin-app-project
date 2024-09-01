import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../styles/styles.css'; 
import order from '../assets/order-illustration.svg';
import Footer from '../components/footer';



function Order() {
    return (
      <div className="order-page">
        <Container>
                {/* Heading */}
                <Row>
                    <Col xs={12} className="text-left">
                        <h2 className="form-heading">Get in touch with us</h2>
                    </Col>
                </Row>

                {/* Illustration on the left and Form on the right */}
                <Row className="align-items-center my-5">
                    {/* Illustration on the left */}
                    <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-start">
                        <img src={order} alt="Illustration" className="img-fluid illustration" />
                    </Col>

                    {/* Form on the right */}
                    <Col xs={12} md={6}>
                        <Form>
                            {/* First Name Field */}
                            <Form.Group controlId="formFirstName" className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First name" />
                            </Form.Group>

                            {/* Last Name Field */}
                            <Form.Group controlId="formLastName" className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" />
                            </Form.Group>

                            {/* Email Field */}
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            {/* Message Field (Big Textbox) */}
                            <Form.Group controlId="formMessage" className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                            </Form.Group>

                            {/* Submit Button */}
                            <Button variant="primary" type="submit" style= {{backgroundColor: 'var(--primary)', border: 'none'}}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        <Footer/>
      </div>
    );
  }
  
  export default Order;