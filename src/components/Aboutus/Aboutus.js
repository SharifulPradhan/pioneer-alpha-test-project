import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutUsShowcase from '../../assets/about-us-showcase.png';
import './Aboutus.css'

const Aboutus = () => {
  return (
    <Container className='mt-5 p-5 aboutus-container'>
      <Row>

        <Col className="text-center">
          <img src={AboutUsShowcase} alt="" className="img-1" />
          <img src={AboutUsShowcase} alt="" className="img-2" />
          <img src={AboutUsShowcase} alt="" className="img-3" />
        </Col>

        <Col>
          <h1 className="text-center mb-5">About Us</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil, voluptates quasi hic mollitia voluptate aut eligendi et laborum, nobis eius doloremque! Esse, libero voluptas doloremque ut veritatis excepturi voluptatibus.</p>
        </Col>
        
      </Row>
    </Container>
  );
};

export default Aboutus;