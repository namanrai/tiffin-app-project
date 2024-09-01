import { Container, Row, Col} from 'react-bootstrap';
import '../styles/styles.css'
import leftImage from '../assets/home/about-img-left.png'
import rightImage from '../assets/home/about-img-right.png'

function About() {
    return (
      <div className='about-section'>
        <Container fluid>
            <Row className="about">
                <Col xs={12} md={3} className="d-flex justify-content-center justify-content-md-start align-items-center">
                    <img src={leftImage} alt="Left" className="img-about" />
                </Col>
                <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-center">
                    <h2>About Us</h2>
                    <p>For a decade, Roti Xpress has been the go-to supplier for bulk rotis to restaurants, tiffin, and catering businesses. Additionally, we've been delivering our own catering and tiffin services, ensuring quality and convenience for our clients.</p>
                </Col>
                <Col xs={12} md={3} className="d-flex justify-content-center justify-content-md-end align-items-center">
                    <img src={rightImage} alt="Right" className="img-about" />
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  

  export default About;
