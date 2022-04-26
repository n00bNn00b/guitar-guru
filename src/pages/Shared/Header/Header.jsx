import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="header-color" as={Link} to="/">
          Guitar Guru
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="bg bg-dark text-white"
          id="responsive-navbar-nav"
        >
          <Nav className="me-auto">
            <Nav.Link className="header-color" href="home#overview">
              Overview
            </Nav.Link>
            <Nav.Link className="header-color" href="home#songs">
              Songs
            </Nav.Link>
            <Nav.Link className="header-color" href="home#courses">
              Courses
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="header-color" href="home#reviews">
              Reviews
            </Nav.Link>
            <Nav.Link className="header-color" as={Link} to="/about">
              About
            </Nav.Link>
            {user ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
