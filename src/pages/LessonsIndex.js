import React from "react";
import { Link } from "react-router-dom";

export default function LessonsIndex() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/lessonOne">Lesson One</Link>
          <br></br>
          <Link to="/lessonTwo">Lesson Two</Link>
          <br></br>
          <Link to="/lessonThree">Lesson Three</Link>
          <br></br>
          <Link to="/lessonFour">Lesson Four</Link>
          <br></br>
          <Link to="/lessonFive">Lesson Five</Link>
          <br></br>
        </div>
      </div>
    </div>
  );
}
