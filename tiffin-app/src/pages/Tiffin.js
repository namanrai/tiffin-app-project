import { Container, Row, Col } from 'react-bootstrap';
import '../styles/styles.css'; 
import tiffinImage from '../assets/home/tiffin-img.png';
import OrderNow from "../components/orderNow";
import Footer from '../components/footer';

function Tiffin() {
    return (
      <div className="Tiffin">
        <div className="tiffin-page">
            <Container>
                {/* Heading and Paragraph */}
                <Row>
                    <Col xs={12} className="text-left">
                        <h2 className="roti-heading">Tiffin Services</h2>
                        <p className="tiffin-paragraph">
                        Roti Xpress is dedicated to bringing you the best in convenient,  home-cooked meals through our reliable tiffin services. We are proud to  partner with Healthy Homemade, ensuring that our clients receive nutritious  and delicious meals every day. Our monthly tiffin plans are designed to  fit your lifestyle, offering a variety of wholesome dishes delivered  straight to your doorstep.
                        </p>
                    </Col>
                </Row>

                {/* Rectangular Container with rounded borders */}
                <Row className="product-container my-5">
                    {/* Left side: Product description and price options */}
                    <Col xs={12} md={6} className="product-details">
                        <h3 className="product-title">Regular is Just Right</h3>
                        <p className="product-description">
                          Dry Sabzi [8oz container] <br></br>
                          Dal or Curry [8oz container]<br></br>
                          Side [salad, pickle, chutney,  dahi or dessert]
                        </p>

                        {/* Small container with price options */}
                        <div className="price-container">
                            <p className="price-option">4 Roti + Rice: <span>$230</span></p>
                            <p className="price-option">6 Roti without Rice: <span>$240</span></p>
                        </div>
                    </Col>

                    {/* Right side: Product image */}
                    <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end">
                        <img src={tiffinImage} alt="Tiffin" className="tiffin-image img-fluid" />
                    </Col>
                </Row>

                <Row className="product-container my-5">
                    {/* Left side: Product description and price options */}
                    <Col xs={12} md={6} className="product-details">
                        <h3 className="product-title">Large is Generously Satisfying</h3>
                        <p className="product-description">
                          Dry Sabzi [12oz container]<br></br>
                          Dal or Curry [12oz container]<br></br>
                          Side [salad, pickle, chutney,  dahi or dessert]
                        </p>

                        {/* Small container with price options */}
                        <div className="price-container">
                            <p className="price-option">4 Roti + Rice: <span>$260</span></p>
                            <p className="price-option">6 Roti without Rice: <span>$270</span></p>
                        </div>
                    </Col>

                    {/* Right side: Product image */}
                    <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end">
                        <img src={tiffinImage} alt="Tiffin" className="tiffin-image img-fluid" />
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                            <Row className="call-to-action-section my-5">
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
        
      </div>
    );
  }
  
  export default Tiffin;