import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useUser } from '../../Context/UserContext';
import "bootstrap/dist/css/bootstrap.min.css";
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


function BasicExample() {
  const user = useUser(); 

  const handleLogout = () => {

    localStorage.removeItem("TOKEN");
    user.setToken(null);
  };

  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand href="/">DevBnb</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Booking">Booking</Nav.Link>
            <Nav.Link href="/Support">Support</Nav.Link>

            {user.token ? (

              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (

            <NavDropdown className='hamburger' title={<span><FontAwesomeIcon icon={faHamburger} style={{ color: '#000000' }} /> <FontAwesomeIcon icon={faCircleUser} style={{ color: '#000000' }} /></span>}>
            <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
            <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
          </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
