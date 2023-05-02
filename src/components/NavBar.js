// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        key="md"
        expand="md"
        className="navBar mb-0"
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="navLogo">
              <h1>中文</h1>
              <h1>Let's Learn Chinese</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/" to="/" className="navLink">
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/lessonsIndex"
                  to="/lessonsIndex"
                  className="navLink"
                >
                  Lessons
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
