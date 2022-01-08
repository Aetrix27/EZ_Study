import React from "react"
// import { NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import "./navbar.css"
//import Logo from '../../static/images/logo.png'
import { Component } from "react"
import AuthService from "../../services/auth-service";

export default class NavigationBar extends Component{
  constructor(props) {
    super(props);
    this.user = AuthService.getCurrentUser();
}

  //function NavigationBar() {
  render(){
    return (
      <Navbar expand="lg" variant="light" className="navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Logo Section    <img
                  src={Logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="OmniConnx Logo"
                /> */}
            <Nav className="me-auto">
              <Navbar.Brand href="/">
             
              </Navbar.Brand>
            </Nav>
            
            {/* Links Section */}
            <Nav>
              <Nav.Link className="nav-item" href="/cards">Cards</Nav.Link>
              {/* Conditional rendering of logged-in features */}
              {!this.user && <Nav.Link className="nav-item" href="/register">Register</Nav.Link>}
              {!this.user && <Nav.Link className="nav-item" href="/login">Login page</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
  //}
}

//export default NavigationBar