import React from "react";
import "../styles/styles.css";
import MainConvo from "../components/MainConvo";
import TranslatedWords from "../components/TranslatedWords";

export default function Lesson(props) {
  return (
    <div id="lesson">
      <MainConvo LessonText={props.LessonText}></MainConvo>
      <TranslatedWords LessonText={props.LessonText}></TranslatedWords>
    </div>
  );
}
