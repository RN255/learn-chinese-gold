import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { arrayOfLessons } from "../modules/lessonText";

export default function SideBar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nextLessonNum = parseInt(props.LessonText.lessonNumber) + 1;
  const prevLessonNum = parseInt(props.LessonText.lessonNumber) - 1;

  return (
    <div className="container sideBar">
      <div className="row d-flex flex-row justify-content-center">
        <div className="col col-lg-2 col-xl-1 text-center p-0">
          {prevLessonNum < 1 ? (
            <Button
              variant="link"
              size="sm"
              className="lessonSelectButtons text-decoration-none"
              disabled
            >
              &lt; Previous
            </Button>
          ) : (
            <Link className="nextPrevLink" to={`/lesson${prevLessonNum}`}>
              <Button variant="link" size="sm" className="lessonSelectButtons">
                &lt; Previous
              </Button>
            </Link>
          )}
        </div>
        <div className="col col-lg-2 col-xl-2 text-center ">
          <Button
            variant="link"
            size="sm"
            className="lessonsIndexButton"
            onClick={handleShow}
          >
            Lesson Index
          </Button>
        </div>
        <div className="col col-lg-2 col-xl-1 text-center p-0">
          {nextLessonNum > 5 ? (
            <Button
              variant="link"
              size="sm"
              className="text-decoration-none"
              disabled
            >
              Next &gt;
            </Button>
          ) : (
            <Link to={`/lesson${nextLessonNum}`}>
              <Button variant="link" size="sm" className="lessonSelectButtons">
                Next &gt;
              </Button>
            </Link>
          )}
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <div className="container">
          <div className="row">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Lesson Index</Offcanvas.Title>
            </Offcanvas.Header>
          </div>
          <Offcanvas.Body>
            {arrayOfLessons.map((item) => (
              <div className="row">
                <Link
                  key={item}
                  to={`/lesson${item.lessonNumber}`}
                  onClick={handleClose}
                >
                  {item.lessonNumber} {item.titleEnglish}
                </Link>
              </div>
            ))}
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </div>
  );
}
