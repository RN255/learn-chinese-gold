import React from "react";
import audioList from "../modules/audioList";
import "../styles/styles.css";


export default function Audio(props) {
  return (
    <div className="container pt-3">
      <audio src={audioList[`audio${props.LessonText.lessonNumber}`]} controls />
    </div>
  );
}
