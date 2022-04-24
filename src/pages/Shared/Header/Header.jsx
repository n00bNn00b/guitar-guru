import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Guitar Guru</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="bg bg-dark text-white"
          id="responsive-navbar-nav"
        >
          <Nav className="me-auto">
            <Nav.Link href="#features">Overview</Nav.Link>
            <Nav.Link href="#pricing">Songs</Nav.Link>
            <NavDropdown title="Courses" id="collasible-nav-dropdown">
              <NavDropdown.Item
                className="bg bg-dark text-white"
                href="#action/3.1"
              >
                Beginner
              </NavDropdown.Item>
              <NavDropdown.Item
                className="bg bg-dark text-white"
                href="#action/3.2"
              >
                Advanced
              </NavDropdown.Item>
              <NavDropdown.Item
                className="bg bg-dark text-white"
                href="#action/3.3"
              >
                Bass
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="bg bg-dark text-white"
                href="#action/3.4"
              >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Reviews</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              About
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
