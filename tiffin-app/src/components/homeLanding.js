import { Container, Row, Col } from 'react-bootstrap';
import '../styles/home.css'
import OrderNow from './orderNow';

function HomeLanding() {
    return (
      <div className="landing">
        <Container fluid>
            <Row className="justify-content-end align-items-center">
            <Col md={6}>
                <div className="content">
                    <p><span className='landHead'>Say goodbye to meal prep stress!</span></p>
                    <p>Join our monthly tiffin plan and enjoy  delicious, homemade rotis delivered straight to your door. </p>
                </div>

                <OrderNow/>
            </Col>
            
            </Row>
        </Container>
      </div>
    );
  }
  

  export default HomeLanding;
