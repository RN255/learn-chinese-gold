import React from "react";
import "../styles/styles.css";
import MainConvo from "../components/MainConvo";
import TranslatedWords from "../components/TranslatedWords";
import Audio from "../components/Audio";

export default function Lesson(props) {
  return (
    <div id="lesson">
      <MainConvo LessonText={props.LessonText}></MainConvo>
      <TranslatedWords LessonText={props.LessonText}></TranslatedWords>
      <Audio LessonText={props.LessonText}></Audio>
    </div>
  );
}
