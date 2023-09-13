import React from "react";
import Nav from "react-bootstrap/Nav";

export default function Footer() {
  return (
    <>
      <div className="container">
        <footer className="d-md-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-center text-md-start">
            © 2023 Dan Dan Chinese
          </p>

          <div className="text-center col-md-4 p-3 p-md-0">
            <p className="my-0">
              Like this content?<br></br>
              Please <a href="https://ko-fi.com/dandanchinese" target="_blank" rel="noreferrer">donate</a> and support us!
            </p>
          </div>

          <ul className="nav col-md-4 justify-content-center justify-content-md-end">
            <li className="nav-item">
              <Nav.Link className="nav-link px-2 footerLink" href="/" to="/">
                Home
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link
                className="nav-link px-2 text-body-secondary footerLink"
                href="/lessonsIndex"
                to="/lessonsIndex"
              >
                Lessons
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link
                className="nav-link px-2 text-body-secondary footerLink"
                href="/info"
                to="/info"
              >
                Info
              </Nav.Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
