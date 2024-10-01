import { Container, Row, Col } from 'react-bootstrap';
import '../styles/styles.css'; 
import roti from '../assets/roti-alt.svg';
import OrderNow from "../components/orderNow";
import Menu from "../components/menu";
import Footer from '../components/footer';


function Roti() {
    return (
      <div>
          <div className="Roti">
            <Container>
                    <Row className="align-items-center my-5">
                        {/* Left side: Heading and Text */}
                        <Col xs={12} md={6} className="text-left">
                            <h2 className="roti-heading">Roti Orders</h2>
                            <p className="roti-text">
                            At Roti Xpress, we pride ourselves on delivering freshly made rotis in  bulk to restaurants, tiffin, and catering businesses. Our rotis are  crafted using the finest Durum sher atta and ghee, ensuring a taste and  texture that your customers will love. Whether you prefer traditional  styles or have specific preferences like wheat, Punjabi, or Gujarati  rotis, we customize our offerings to meet your needs. <br></br><br></br> Contact us today to place your order and experience the  Roti Xpress difference.
                            </p>
                        </Col>
                        {/* Right side: Floating Images */}
                        <Col xs={12} md={6} className="d-flex justify-content-around flex-wrap">
                            <div className="floating-img mb-4">
                                <img src={roti} alt="Service 1" className="img1" />
                            </div>
                            <div className="floating-img mb-4">
                                <img src={roti} alt="Service 2" className="img3" />
                            </div>
                            <div className="floating-img mb-4">
                                <img src={roti} alt="Service 3" className="img2" />
                            </div>
                        </Col>
                    </Row>
              </Container>

              <Menu/>

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
  
  export default Roti;