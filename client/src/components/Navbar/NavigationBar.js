import React from "react"
import { Redirect } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import "./navbar.css"
import AuthService from "../../services/auth-service";

var user = AuthService.getCurrentUser();

export default function NavigationBar() {
  //super(props);
  //this.logoutUser = this.logoutUser.bind(this);

  const logoutUser = () => {
    AuthService.logout();
    return (
      <Redirect to="/" />
    );
  };

  //function NavigationBar() {
  return (
    <Navbar expand="lg" variant="light" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Logo Section          <Nav className="me-auto">
            <Navbar.Brand href="/">
       
            </Navbar.Brand>
          </Nav>*/}
 
          
          {/* Links Section */}
          <Nav>
            <Nav.Link className="nav-item" href="/cards">Cards</Nav.Link>
            {/* Conditional rendering of logged-in features             {!user && <Nav.Link className="nav-item" href="/login">Login page</Nav.Link>}
            {user && <Nav.Link className="nav-item" onClick={logoutUser}>Logout</Nav.Link>}*/}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
  //}
}

//export default NavigationBar