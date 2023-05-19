import React from "react";
// import "../styles/styles.css";

export default function TitleSection(props) {
  return (
    <div className="container pt-2 pt-md-5 text-center">
      <div className="d-none d-md-block">
        <h2>
          {props.LessonText.lessonNumber}| {props.LessonText.titleEnglish} |{" "}
          {props.LessonText.titleChinese}
        </h2>
      </div>

      <div className="d-md-none">
        <h2>{props.LessonText.lessonNumber} </h2>
        <h2>{props.LessonText.titleEnglish}</h2>
        <h2>{props.LessonText.titleChinese}</h2>
      </div>
    </div>
  );
}
