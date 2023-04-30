import React from "react";
import "../styles/styles.css";
import MainConvo from "../components/MainConvo";

export default function Lesson(props) {
  return (
    <div id="lesson">
      <MainConvo LessonText={props.LessonText}></MainConvo>
    </div>
  );
}
