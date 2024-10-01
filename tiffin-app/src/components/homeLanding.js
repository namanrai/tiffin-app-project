import { Container, Row, Col } from 'react-bootstrap';
import '../styles/styles.css'
import OrderNow from './orderNow';
import bannerVideo  from '../assets/home/rotibanner.mp4'

function HomeLanding() {
    return (
      <div className="landing">

        {/* Background video */}
        <video autoPlay loop muted className="background-video">
          <source src={bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

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
