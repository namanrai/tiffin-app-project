import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import '../styles/styles.css'; 
import roti from '../assets/home/roti-alt.png';

// Product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$10.00',
    details: 'Delicious roti made with whole wheat flour and cooked to perfection.',
    image: roti,
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$12.00',
    details: 'A delightful combination of wheat and multi-grain flour for a healthy meal.',
    image: roti,
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$15.00',
    details: 'Fluffy and soft roti made with ghee, perfect for any meal.',
    image: roti,
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$11.00',
    details: 'Our signature Punjabi-style roti, packed with flavor and health benefits.',
    image: roti,
  },
  {
    id: 5,
    name: 'Product 5',
    price: '$14.00',
    details: 'A traditional Gujarati roti with a perfect blend of softness and crisp.',
    image: roti,
  },
  {
    id: 6,
    name: 'Product 6',
    price: '$16.00',
    details: 'A wholesome and nutritious roti, great for everyday meals.',
    image: roti,
  },
];

const Menu = () => {
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
            <Col xs={12} md={4} className="mb-4" key={product.id}>
              <div
                className="product-container"
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
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                {/* Left side: Product details */}
                <Col xs={12} md={6} className="modal-left">
                  <h3>{selectedProduct.name}</h3>
                  <p><strong>Price:</strong> {selectedProduct.price}</p>
                  <p>{selectedProduct.details}</p>
                  <Button variant="primary">Order Now</Button>
                </Col>
                {/* Right side: Product image */}
                <Col xs={12} md={6}>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="img-fluid"
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
