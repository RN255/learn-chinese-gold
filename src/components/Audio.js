import React from "react";
import audioList from "../modules/audioList";

export default function Audio(props) {
  return (
    <div>
      {/* <audio src={audioList.audio3} controls /> */}
      <audio src={audioList[`audio${props.LessonText.lessonNumber}`]} controls />

      <p>{audioList.audio1}</p>
      <p>{props.LessonText.lessonNumber}</p>
    </div>
  );
}
