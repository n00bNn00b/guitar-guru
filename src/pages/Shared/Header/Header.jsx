import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="header-color" href="#home">
          Guitar Guru
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="bg bg-dark text-white"
          id="responsive-navbar-nav"
        >
          <Nav className="me-auto">
            <Nav.Link className="header-color" href="#features">
              Overview
            </Nav.Link>
            <Nav.Link className="header-color" href="#pricing">
              Songs
            </Nav.Link>
            <Nav.Link className="header-color" href="#pricing">
              Courses
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="header-color" href="#deets">
              Reviews
            </Nav.Link>
            <Nav.Link className="header-color" eventKey={2} href="#memes">
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
