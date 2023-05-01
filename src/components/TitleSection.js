import React from "react";
import "../styles/styles.css";

export default function TitleSection(props) {
  return (
    <div className="container pt-3 text-center">
      <h2>
        {props.LessonText.lessonNumber} | {props.LessonText.titleEnglish} <br></br>
        {props.LessonText.titleChinese}
      </h2>
    </div>
  );
}
