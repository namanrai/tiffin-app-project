import { Container, Row, Col, Button} from 'react-bootstrap';
import '../styles/home.css'
import { Link } from 'react-router-dom';

function OrderNow() {
    return (
      <div className="order">
        <Container fluid>
            <Row>
                <Col>
                    <div className='orderBox'>
                        <Button as={Link} to='/order' style= {{backgroundColor: 'var(--primary)', border: 'none'}}>Order Now</Button>
                        <span>Learn more about our services 
                                <svg width="20" height="20" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.2941 15.2555C32.0021 14.5474 32.0021 13.3994 31.2941 12.6913L19.7553 1.15255C19.0472 0.444477 17.8992 0.444477 17.1911 1.15255C16.4831 1.86063 16.4831 3.00864 17.1911 3.71672L27.4478 13.9734L17.1911 24.2301C16.4831 24.9381 16.4831 26.0861 17.1911 26.7942C17.8992 27.5023 19.0472 27.5023 19.7553 26.7942L31.2941 15.2555ZM0.976562 15.7865H30.012V12.1602H0.976562V15.7865Z" fill="#FF7A00"/>
                                </svg> 
                        </span>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  

  export default OrderNow;
