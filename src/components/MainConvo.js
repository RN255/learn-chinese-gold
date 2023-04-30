import React from "react";

export default function MainConvo(props) {

  return (
    <>
      <p>{props.LessonText.lineOne}</p>
      <p>{props.LessonText.lineTwo}</p>
      <p>{props.LessonText.lineThree}</p>
      <p>{props.LessonText.lineFour}</p>
      <p>{props.LessonText.lineFive}</p>
    </>
  );
}
