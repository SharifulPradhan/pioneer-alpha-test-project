import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="m-5 justify-content-between">
      <Navbar.Brand href="/home"><img src="" alt=""/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto bg-info w-100">
          <Nav.Link href="/home" className="active mr-5">Home</Nav.Link>
          <Nav.Link href="/about" className="mr-5">About</Nav.Link>
          <Nav.Link href="/service-and-package" className="mr-5">Service & Package</Nav.Link>
          <Nav.Link href="/gallery" className="mr-5">Gallery</Nav.Link>
          <Nav.Link href="/package" className="mr-5">Package</Nav.Link>
          <Nav.Link href="/faq" className="mr-5">FAQ</Nav.Link>
          <Nav.Link href="/contact" className="mr-5">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;