import React from "react";
import audioList from "../modules/audioList";
import "../styles/styles.css";

export default function Audio(props) {
  return (
    <div className="container mt-4">
      <div className="row px-2">
        <audio
          src={audioList[`audio${props.LessonText.lessonNumber}`]}
          controls
          className={
            "p-0 m-0" +
            (props.Flashing ? "homePageBorderElement flashingBorder" : "")
          }
        />
      </div>
    </div>
  );
}
