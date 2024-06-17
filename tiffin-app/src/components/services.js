import { Container, Row, Col, Button} from 'react-bootstrap';
import '../styles/home.css'
import { Link } from 'react-router-dom';
import Service1 from '../assets/home/service1.svg';
import Service2 from '../assets/home/service2.svg';
import Service3 from '../assets/home/service3.svg';

function Services() {
    return (
      <div className='service-section'>
        <Container fluid>
        <Row className="services">
                <Col xs={12} className="service-head text-center">
                    <h2>Our Services</h2>
                </Col>
        </Row>
            <Row className="d-flex justify-content-center service-list mx-4">
                <Col xs={12} md={4} className="d-flex justify-content-center">
                    <div className="service-card">
                        <img src={Service1} alt="Service 1" />
                        <h3>Bulk Roti</h3>
                        <p>Roti Xpress offers freshly made rotis in bulk for restaurants, tiffin, and catering businesses. Using Durum sher atta and ghee, we craft traditional rotis, but can customise to meet specific preferences like wheat, Punjabi, or Gujarati styles.</p>
                        <Button as={Link} to='/roti' style= {{backgroundColor: 'white', border: '2px solid var(--primary)', color: 'var(--primary)'}}>Learn More</Button>
                    </div>
                </Col>
                <Col xs={12} md={4} className="d-flex justify-content-center">
                    <div className="service-card">
                        <img src={Service2} alt="Service 2" />
                        <h3>Tiffin Service</h3>
                        <p>Roti Xpress not only offers bulk rotis but also convenient monthly tiffin plans for clients. Contact us anytime to consult and start your trial.</p>
                        <Button as={Link} to='/tiffin' style= {{backgroundColor: 'white', border: '2px solid var(--primary)', color: 'var(--primary)'}}>Learn More</Button>
                    </div>
                </Col>
                <Col xs={12} md={4} className="d-flex justify-content-center">
                    <div className="service-card">
                        <img src={Service3} alt="Service 3" />
                        <h3>Catering</h3>
                        <p>Roti Xpress caters to your reception events like weddings and birthdays. Contact us to book for your upcoming event and for personalized consultations.</p>
                        <Button as={Link} to='/catering' style= {{backgroundColor: 'white', border: '2px solid var(--primary)', color: 'var(--primary)'}}>Learn More</Button>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  

  export default Services;
