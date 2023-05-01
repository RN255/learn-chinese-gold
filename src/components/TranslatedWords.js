import React from "react";
import "../styles/styles.css";

export default function TranslatedWords(props) {
  return (
    <div className="translatedWords container pt-3 pb-5">
      <div className="row mb-3">
        <h2>Word list</h2>
      </div>
      <div className="row ms-md-1">
        <div className="col translationChinWord">
          <p>{props.LessonText.translationChinWordOne}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationPinWordOne}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationEngWordOne}</p>
        </div>
      </div>

      <div className="row ms-md-1">
        <div className="col translationChinWord">
          <p>{props.LessonText.translationChinWordTwo}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationPinWordTwo}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationEngWordTwo}</p>
        </div>
      </div>

      <div className="row ms-md-1">
        <div className="col translationChinWord">
          <p>{props.LessonText.translationChinWordThree}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationPinWordThree}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationEngWordThree}</p>
        </div>
      </div>

      <div className="row ms-md-1">
        <div className="col translationChinWord">
          <p>{props.LessonText.translationChinWordFour}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationPinWordFour}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationEngWordFour}</p>
        </div>
      </div>

      <div className="row ms-md-1">
        <div className="col translationChinWord">
          <p>{props.LessonText.translationChinWordFive}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationPinWordFive}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationEngWordFive}</p>
        </div>
      </div>

      <div className="row ms-md-1">
        <div className="col translationChinWord">
          <p>{props.LessonText.translationChinWordSix}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationPinWordSix}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationEngWordSix}</p>
        </div>
      </div>

      <div className="row ms-md-1">
        <div className="col translationChinWord">
          <p>{props.LessonText.translationChinWordSeven}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationPinWordSeven}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationEngWordSeven}</p>
        </div>
      </div>

      <div className="row ms-md-1">
        <div className="col translationChinWord">
          <p>{props.LessonText.translationChinWordEight}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationPinWordEight}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationEngWordEight}</p>
        </div>
      </div>

      <div className="row ms-md-1">
        <div className="col translationChinWord">
          <p>{props.LessonText.translationChinWordNine}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationPinWordNine}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationEngWordNine}</p>
        </div>
      </div>

      <div className="row ms-md-1">
        <div className="col translationChinWord">
          <p>{props.LessonText.translationChinWordTen}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationPinWordTen}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationEngWordTen}</p>
        </div>
      </div>

      <div className="row ms-md-1">
        <div className="col translationChinWord">
          <p>{props.LessonText.translationChinWordEleven}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationPinWordEleven}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationEngWordEleven}</p>
        </div>
      </div>

      <div className="row ms-md-1">
        <div className="col translationChinWord">
          <p>{props.LessonText.translationChinWordTwelve}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationPinWordTwelve}</p>
        </div>
        <div className="col">
          <p>{props.LessonText.translationEngWordTwelve}</p>
        </div>
      </div>
    </div>
  );
}
