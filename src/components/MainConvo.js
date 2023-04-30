import React from "react";

export default function MainConvo(props) {
  return (
    <>
      <h2>
        Main Conversation
        {props.LessonText.titleChinese}
        {props.LessonText.titleEnglish}
      </h2>
      <p>{props.LessonText.convoLineOne}</p>
      <p>{props.LessonText.convoLineTwo}</p>
      <p>{props.LessonText.convoLineThree}</p>
      <p>{props.LessonText.convoLineFour}</p>
      <p>{props.LessonText.convoLineFive}</p>
      {props.LessonText.convoLineSix && <p>{props.LessonText.convoLineSix}</p>}
      {/* above will render lineSix if exists, but is maybe not needed anyway... */}
      {props.LessonText.convoLineSeven && (
        <p>{props.LessonText.convoLineSeven}</p>
      )}
      {props.LessonText.convoLineEight && (
        <p>{props.LessonText.convoLineEight}</p>
      )}
    </>
  );
}
