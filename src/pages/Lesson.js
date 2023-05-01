import React from "react";
import "../styles/styles.css";
import TitleSection from "../components/TitleSection";
import MainConvo from "../components/MainConvo";
import TranslatedWords from "../components/TranslatedWords";
import Audio from "../components/Audio";

export default function Lesson(props) {
  return (
    <div id="lesson">
      <TitleSection LessonText={props.LessonText}></TitleSection>
      <Audio LessonText={props.LessonText}></Audio>
      <MainConvo LessonText={props.LessonText}></MainConvo>
      <TranslatedWords LessonText={props.LessonText}></TranslatedWords>
    </div>
  );
}
