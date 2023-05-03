import React from "react";
import { Link } from "react-router-dom";
import { arrayOfLessons } from "../modules/lessonText";

export default function LessonsIndex() {
  return (
    <div className="container lessonIndex mt-3">
      <div className="row">
        <div className="col-auto me-3"></div>
        <div className="col col-lg-4 col-xl-3">English title</div>
        <div className="col">Chinese title</div>
      </div>
      {arrayOfLessons.map((item) => (
        <div className="row border-bottom py-2">
          <div className="col-auto me-2">{item.lessonNumber}</div>
          <div className="col col-lg-4 col-xl-3">
            <Link
              key={item}
              to={`/lesson${item.lessonNumber}`}
              className="text-decoration-none"
            >
              {item.titleEnglish}
            </Link>
          </div>
          <div className="col">
            <Link
              key={item}
              to={`/lesson${item.lessonNumber}`}
              className="text-decoration-none"
            >
              {item.titleChinese}
            </Link>
          </div>
        </div>
      ))}

    </div>
  );
}
