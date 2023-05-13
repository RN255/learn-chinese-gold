import React from "react";
import { Link } from "react-router-dom";
import { arrayOfLessons } from "../modules/lessonText";
import Footer from "../components/Footer";

export default function LessonsIndex() {
  return (
    <div className="container lessonIndex">
      <div className="row">
        <div className="col-1"></div>
        <div className="col col-lg-4 col-xl-3">English title</div>
        <div className="col">Chinese title</div>
      </div>
      {arrayOfLessons.map((item) => (
        <Link
          key={item.lessonNumber}
          to={`/lesson${item.lessonNumber}`}
          className="text-decoration-none"
        >
          <div className="row border-bottom py-2 LessonItem">
            <div className="col-1">{item.lessonNumber}</div>
            <div className="col col-lg-4 col-xl-3">{item.titleEnglish}</div>
            <div className="col">{item.titleChinese}</div>
          </div>
        </Link>
      ))}
      <Footer></Footer>
    </div>
  );
}
