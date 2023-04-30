import React from "react";
import "../styles/styles.css";

export default function TranslatedWords(props) {
  return (
    <div>
      <h2>Word list</h2>
      <div className="translatedListBox">
        <p>{props.LessonText.translationChinWordOne}</p>
        <p>{props.LessonText.translationPinWordOne}</p>
        <p>{props.LessonText.translationEngWordOne}</p>
      </div>
      <div className="translatedListBox">
        <p>{props.LessonText.translationChinWordTwo}</p>
        <p>{props.LessonText.translationPinWordTwo}</p>
        <p>{props.LessonText.translationEngWordTwo}</p>
      </div>
    </div>
  );
}
