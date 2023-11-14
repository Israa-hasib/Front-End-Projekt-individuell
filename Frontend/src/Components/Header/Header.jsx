// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import "bootstrap/dist/css/bootstrap.min.css";
// import './header.css';

// function Header() {
//   return (
//     <Navbar expand="lg" className="header">
//       <Container>
//         <Navbar.Brand href="/">DevBnb</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/About">About</Nav.Link>
//             <Nav.Link href="/Booking">Bookings</Nav.Link>
//             <Nav.Link href="/Support">Support</Nav.Link>
//             <NavDropdown title="Login" id="basic-nav-dropdown" className='dropdown'>
//               <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
//               <NavDropdown.Item href="/Register"> Register</NavDropdown.Item>
              
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useUser } from '../../Context/UserContext'; // Importera useUser-hooket
import "bootstrap/dist/css/bootstrap.min.css";
import './header.css';


function BasicExample() {
  const user = useUser(); // Använd useUser-hooket för att få åtkomst till användartoken

  const handleLogout = () => {
    // Rensa användartoken vid utloggning
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
              
              <NavDropdown title="Login" id="basic-nav-dropdown" className='dropdown'>
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
