import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import '../styles.css'; 

const NavbarElements = () => {
  return (
    <>
      <Navbar bg="dark" variant='dark'>
        <div className='posRight'>
          <Container>
              <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav> 
          </Container>
        </div>
      </Navbar>
    </>
  );
};
  
export default NavbarElements