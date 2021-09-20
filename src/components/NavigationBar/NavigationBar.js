import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect variant="light" className="container justify-content-between">

      <Nav className="ms-auto pe-5">
        <Nav.Link href="/home" className="active mr-5">Home</Nav.Link>
        <Nav.Link href="/about" className="active mr-5">About</Nav.Link>
        <Nav.Link href="/service-and-package" className="active mr-5">Service & Package</Nav.Link>
        <Nav.Link href="/gallery" className="active mr-5">Gallery</Nav.Link>
        <Nav.Link href="/package" className="active mr-5">Package</Nav.Link>
        <Nav.Link href="/faq" className="active mr-5">FAQ</Nav.Link>
        <Nav.Link href="/contact" className="active mr-5">Contact</Nav.Link>
      </Nav>

    </Navbar>
  );
};

export default NavigationBar;