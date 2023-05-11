import React from "react";
import "../styles/styles.css";
import TitleSection from "../components/TitleSection";
import MainConvo from "../components/MainConvo";
import TranslatedWords from "../components/TranslatedWords";
import Audio from "../components/Audio";
import KeyPhrases from "../components/KeyPhrases";
import SideBar from "../components/SideBar";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";

export default function Lesson(props) {
  return (
    <div id="lesson">
      <SideBar LessonText={props.LessonText}></SideBar>
      <TitleSection LessonText={props.LessonText}></TitleSection>
      <Audio LessonText={props.LessonText}></Audio>
      <MainConvo LessonText={props.LessonText}></MainConvo>
      <TranslatedWords LessonText={props.LessonText}></TranslatedWords>
      <KeyPhrases LessonText={props.LessonText}></KeyPhrases>
      <ScrollToTopButton></ScrollToTopButton>
      <Footer></Footer>
    </div>
  );
}
