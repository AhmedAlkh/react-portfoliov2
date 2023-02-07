import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";

function CustomNavbar(props) {
  const { currentSection, setCurrentSection } = props;

  return (
    <Navbar collapseOnSelect expand="sm">
      <Container className="nav-cont">
        <Navbar.Brand>
          <p className="main-title">Ahmed's Portfolio</p>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link
              href="#"
              className={
                currentSection === "about"
                  ? "nav-link active"
                  : "nav-link unactive-link"
              }
              onClick={() => setCurrentSection("about")}
            >
              About
            </Nav.Link>

            <Nav.Link
              href="#"
              className={
                currentSection === "portfolio"
                  ? "nav-link active"
                  : "nav-link unactive-link"
              }
              onClick={() => setCurrentSection("portfolio")}
            >
              Portfolio
            </Nav.Link>

            <Nav.Link
              href="#"
              className={
                currentSection === "resume"
                  ? "nav-link active"
                  : "nav-link unactive-link"
              }
              onClick={() => setCurrentSection("resume")}
            >
              Resume
            </Nav.Link>

            <Nav.Link
              href="#"
              className={
                currentSection === "contact"
                  ? "nav-link active"
                  : "nav-link unactive-link"
              }
              onClick={() => setCurrentSection("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
