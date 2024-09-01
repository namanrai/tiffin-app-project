import { Container, Row, Col } from 'react-bootstrap';
import '../styles/styles.css';
import OrderNow from "../components/orderNow";
import Footer from '../components/footer';

function Catering() {
    return (
      <div className="catering-page">
            <Container>
                <Row className="catering-section my-5">
                    <Col xs={12} className="text-left">
                        <h2 className="catering-heading">Catering</h2>
                        <p className="catering-text">
                        Let Roti Xpress take the stress out of your event planning with our  professional catering services. Whether it's a wedding reception,  birthday celebration, anniversary, or any special occasion, we offer a  diverse menu of both vegetarian and non-vegetarian dishes. From freshly  prepared rotis and naans to flavorful sabzis and pakoras, trust Roti  Xpress to deliver delicious cuisine while you focus on enjoying your  event. <br>
                        </br>Contact us to book your personalized consultation today.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                          <Row className="call-to-action-section-catering">
                                    <Col xs={12} className="d-flex justify-content-center">
                                        <div className="cta-container text-left">
                                            <h1 className="cta-heading">Select from our excellent services and <span className='cta-span'>enjoy an amazing meal</span></h1>
                                            <div className="order-now-wrapper d-flex justify-content-center">
                                                    <OrderNow />
                                                </div>
                                      </div>
                              </Col>
                          </Row>
            </Container>
            <Footer/>
        </div>
    );
  }
  
  export default Catering;