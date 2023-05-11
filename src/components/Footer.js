import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-body-secondary">© 2023</p>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <Nav.Link
                class="nav-link px-2 text-body-secondary footerLink"
                href="/"
                to="/"
              >
                {" "}
                Home{" "}
              </Nav.Link>
            </li>
            <li class="nav-item">
              <Nav.Link
                class="nav-link px-2 text-body-secondary footerLink"
                href="/lessonsIndex"
                to="/lessonsIndex"
              >
                {" "}
                Lessons{" "}
              </Nav.Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
