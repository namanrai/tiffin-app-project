import { Container, Row, Col} from 'react-bootstrap';
import '../styles/home.css'
import OrderNow from './orderNow';

function callToAction() {
    return (
      <div className='action-section'>
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
      </div>
    );
  }
  

  export default callToAction;
