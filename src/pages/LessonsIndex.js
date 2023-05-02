import React from "react";
import { Link } from "react-router-dom";

export default function LessonsIndex() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/lesson1">Lesson One</Link>
          <br></br>
          <Link to="/lesson2">Lesson Two</Link>
          <br></br>
          <Link to="/lesson3">Lesson Three</Link>
          <br></br>
          <Link to="/lesson4">Lesson Four</Link>
          <br></br>
          <Link to="/lesson5">Lesson Five</Link>
          <br></br>
        </div>
      </div>
    </div>
  );
}
