import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/app.css';
import RestaurantIcon from '@mui/icons-material/Restaurant';


export const NavBar = () => {
  return (
    <>
    <Navbar collapseOnSelect className='navbar' data-bs-theme="light" expand='lg'>
      <Container>
        <Navbar.Brand className='navTitle' as={Link} to='/'><RestaurantIcon className='footer-logo'/>Roti Express</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/roti">Roti</Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/tiffin">Tiffin</Nav.Link>
            <Nav.Link eventKey="4" as={Link} to="/catering">Catering</Nav.Link>
          </Nav>
          <Button as={Link} to='/order' style= {{backgroundColor: 'var(--primary)', border: 'none'}}>Order Now</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}