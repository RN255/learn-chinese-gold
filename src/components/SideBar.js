import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export default function SideBar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nextLessonNum = parseInt(props.LessonText.lessonNumber) + 1;
  const prevLessonNum = parseInt(props.LessonText.lessonNumber) - 1;

  return (
    <div className="container">
      {typeof nextLessonNum}

      <p>{props.LessonText.lessonNumber}</p>

      <Button variant="primary" disabled={prevLessonNum < 1 ? true : false}>
        <Link
          to={`/lesson${prevLessonNum}`}
          className="text-decoration-none text-light"
        >
          Previous Lesson
        </Link>
      </Button>

      <Button variant="primary" onClick={handleShow}>
        Lesson Index
      </Button>

      <Button variant="primary" disabled={nextLessonNum > 5 ? true : false}>
        <Link
          to={`/lesson${nextLessonNum}`}
          className="text-decoration-none text-light"
        >
          Next Lesson
        </Link>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to="/lesson1" onClick={handleClose}>
            Lesson One
          </Link>
          <br></br>
          <Link to="/lesson2" onClick={handleClose}>
            Lesson Two
          </Link>
          <br></br>
          <Link to="/lesson3" onClick={handleClose}>
            Lesson Three
          </Link>
          <br></br>
          <Link to="/lesson4" onClick={handleClose}>
            Lesson Four
          </Link>
          <br></br>
          <Link to="/lesson5" onClick={handleClose}>
            Lesson Five
          </Link>
          <br></br>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
