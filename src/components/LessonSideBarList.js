import React from "react";

export default function LessonSideBarList(props) {
  return (
    <div className="LessonSideBarList">
      <p>{props.LessonText.lessonNumber}</p>
      <p>{props.LessonText.titleEnglish}</p>
    </div>
  );
}
