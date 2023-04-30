import React from "react";
import "../styles/styles.css";

export default function Lesson(props) {
  return (
    <div id="lesson">
      <p>{props.chineseTitle}</p>
      <p>{props.englishTitle}</p>
      <p>{props.lineOne}</p>
      <p>{props.lineTwo}</p>
      <p>{props.lineThree}</p>
      <p>{props.lineFour}</p>
      <p>{props.lineFive}</p>
    </div>
  );
}
