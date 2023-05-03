import React from "react";
import { Link } from "react-router-dom";
import { arrayOfLessons } from "../modules/lessonText";

export default function LessonsIndex() {
  return (
    <div className="container">
      {arrayOfLessons.map((item) => (
        <div className="row">
          <Link key={item} to={`/lesson${item.lessonNumber}`}>
            {item.lessonNumber} {item.titleEnglish}
          </Link>
        </div>
      ))}
    </div>
  );
}
