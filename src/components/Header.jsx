import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap"


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="ms-5">JOHN DOE</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact className='mx-3'>ACCUEIL</Nav.Link>
          <Nav.Link as={NavLink} to="/service" exact className='mx-3'>SERVICES</Nav.Link>
          <Nav.Link as={NavLink} to="/realisations" exact className='mx-3'>RÉALISATIONS</Nav.Link>
          <Nav.Link as={NavLink} to="/blog" exact className='mx-3'>BLOG</Nav.Link>
          <Nav.Link as={NavLink} to="/contact" exact className='me-5'>ME CONTACTER</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
