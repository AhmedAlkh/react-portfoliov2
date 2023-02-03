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
            <Nav.Link href="#" className={currentSection === "about"}>
              <span
                className="unactive-link"
                onClick={() => setCurrentSection("about")}
              >
                About
              </span>
            </Nav.Link>
            <Nav.Link href="#" className={currentSection === "portfolio"}>
              <span
                className="unactive-link"
                onClick={() => setCurrentSection("portfolio")}
              >
                Portfolio
              </span>
            </Nav.Link>
            <Nav.Link href="#" className={currentSection === "resume"}>
              <span
                className="unactive-link"
                onClick={() => setCurrentSection("resume")}
              >
                Resume
              </span>
            </Nav.Link>
            <Nav.Link href="#" className={currentSection === "contact"}>
              <span
                className="unactive-link"
                onClick={() => setCurrentSection("contact")}
              >
                Contact
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
