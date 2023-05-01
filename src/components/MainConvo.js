import React from "react";
import "../styles/styles.css";

export default function MainConvo(props) {
  return (
    <div className="mainConversation container pt-3">
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
    </div>
  );
}
