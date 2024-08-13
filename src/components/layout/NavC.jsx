import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";

function NavC() {
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="linkNav-Brand" to="/" onClick={handleHomeClick}>
          <img
            src={require("./uLogo.png")}
            width="50"
            height="50"
            className="uLogo"
            alt="Ugit Logo"
          />
          <h1 className="brand">UGIT</h1>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link className="linkNav" to="/" onClick={handleHomeClick}>
              Home
            </Link>
            <Link className="linkNav" to="/about">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavC;
