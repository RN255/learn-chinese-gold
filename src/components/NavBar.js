// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar key="md" bg="light" expand="md" className="mb-0">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
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
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item>
                    <Link to="/">Home</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/lessonOne">Lesson One</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/lessonTwo">Lesson Two</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/lessonThree">Lesson Three</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/lessonFour">Lesson Four</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/lessonFive">Lesson Five</Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
              </Nav>{" "}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
