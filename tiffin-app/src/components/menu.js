import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import '../styles/styles.css'; 
import roti from '../assets/home/roti-alt.png';
import { useNavigate } from 'react-router-dom';

// Product data
const products = [
  {
    id: 1,
    name: 'Punjabi Roti',
    price: '0.50c',
    details: 'Made using a robust blend of Sher Atta, canola oil, ghee, and salt, this roti is crafted for those who love a hearty and satisfying meal.\nNo Maida\nNo Artificial Colors\nNo Artificial Flavors\nNo Preservatives\nBulk discount pricing available for pickup orders.\n\nPlease call 437-215-4881 for pricing.\n\nShipping Details: We provide local deliveries for bulk orders, however, pick up is preferred from our location.',
    image: roti,
  },
  {
    id: 2,
    name: 'Gujrati Roti',
    price: '0.50c',
    details: 'Prepared with a perfect mix of Sher Atta, canola oil, ghee, and salt, this roti is soft and light, ideal for daily meals.\nNo Maida\nNo Artificial Colors\nNo Artificial Flavors\nNo Preservatives\nBulk discount pricing available for pickup orders.\n\nPlease call 437-215-4881 for pricing.\n\nShipping Details: We provide local deliveries for bulk orders, however, pick up is preferred from our location.',
    image: roti,
  },
  {
    id: 3,
    name: 'Jain Roti',
    price: '0.60c',
    details: 'Crafted with mill-fresh flour, canola oil, ghee, and salt, this roti adheres strictly to Jain dietary principles, ensuring purity and adherence to tradition..\nNo Maida\nNo Artificial Colors\nNo Artificial Flavors\nNo Preservatives\nBulk discount pricing available for pickup orders.\n\nPlease call 437-215-4881 for pricing.\n\nShipping Details: We provide local deliveries for bulk orders, however, pick up is preferred from our location.',
    image: roti,
  },
  {
    id: 4,
    name: 'Whole Wheat Roti',
    price: '0.60c',
    details: 'Made with 100% Sher Atta, canola oil, ghee, and salt, this roti is a healthy choice for those who prefer whole grains.\nNo Maida\nNo Artificial Colors\nNo Artificial Flavors\nNo Preservatives\nBulk discount pricing available for pickup orders.\n\nPlease call 437-215-4881 for pricing.\n\nShipping Details: We provide local deliveries for bulk orders, however, pick up is preferred from our location.',
    image: roti,
  },
  {
    id: 5,
    name: 'Parathas Roti',
    price: '$1.0',
    details: 'Our parathas are made with Sher Atta, canola oil, ghee, and salt, offering a flaky, flavorful alternative to traditional rotis.\nNo Maida\nNo Artificial Colors\nNo Artificial Flavors\nNo Preservatives\nBulk discount pricing available for pickup orders.\n\nPlease call 437-215-4881 for pricing.\n\nShipping Details: We provide local deliveries for bulk orders, however, pick up is preferred from our location.',
    image: roti,
  },
  {
    id: 6,
    name: 'Custom Roti',
    price: '$0.5-1.0',
    details: 'Custom-made with Sher Atta, canola oil, ghee, and salt to suit your unique taste preferences or dietary needs.\nNo Maida\nNo Artificial Colors\nNo Artificial Flavors\nNo Preservatives\nBulk discount pricing available for pickup orders.\n\nPlease call 437-215-4881 for pricing.\n\nShipping Details: We provide local deliveries for bulk orders, however, pick up is preferred from our location.',
    image: roti,
  },
];



const Menu = () => {

  const navigate = useNavigate();
  const handleOrderNow = () => {
    navigate('/order'); // Navigate to the order page
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle opening modal
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="menu-section">
      <Container>
        <h2 className="text-center my-5">Our Menu</h2>
        <Row>
          {products.map((product) => (
            <Col xs={12} md={6} lg={4} className="mb-4" key={product.id}>
              <div
                className="product-container-menu"
                onClick={() => handleOpenModal(product)}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className="product-details">
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                  </div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
              </div>

              
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for product details */}
      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title className='modal-head'>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                {/* Left side: Product details */}
                <Col xs={12} md={6} className="modal-left">
                  <h3>{selectedProduct.name}</h3>
                  <p><strong>Price:</strong> {selectedProduct.price}</p>
                  <p>{selectedProduct.details.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}</p>
                  <Button variant="primary" onClick={handleOrderNow}>Order Now</Button>
                </Col>
                {/* Right side: Product image */}
                <Col xs={12} md={6}>
                  <img 
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="img-fluid modal-img"
                  />
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Menu;
