import React, { useState } from "react";
import "../styles/styles.css";

export default function MainConvo(props) {
  const [engIsShown, setEngIsShown] = useState(false);
  const handleClickEng = () => {
    setEngIsShown(!engIsShown);
  };

  const [pinIsShown, setPinIsShown] = useState(false);
  const handleClickPin = () => {
    setPinIsShown(!pinIsShown);
  };

  return (
    <div className="mainConversation container pt-3">
      <div className="row justify-content-center mb-4">
        <div className="col col-md-3">
          <button
            type="button"
            className="btn btn-light w-100"
            onClick={handleClickEng}
          >
            Show English
          </button>
        </div>
        <div className="col col-md-3">
          <button
            type="button"
            className="btn btn-light w-100"
            onClick={handleClickPin}
          >
            Show Pinyin
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>{props.LessonText.convoLineOne}</p>
          {pinIsShown && <p>{props.LessonText.sentanceTranslationPinOne}</p>}
          {engIsShown && <p>{props.LessonText.sentanceTranslationEngOne}</p>}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>{props.LessonText.convoLineTwo}</p>
          {pinIsShown && <p>{props.LessonText.sentanceTranslationPinTwo}</p>}
          {engIsShown && <p>{props.LessonText.sentanceTranslationEngTwo}</p>}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>{props.LessonText.convoLineThree}</p>
          {pinIsShown && <p>{props.LessonText.sentanceTranslationPinThree}</p>}
          {engIsShown && <p>{props.LessonText.sentanceTranslationEngThree}</p>}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>{props.LessonText.convoLineFour}</p>
          {pinIsShown && <p>{props.LessonText.sentanceTranslationPinFour}</p>}
          {engIsShown && <p>{props.LessonText.sentanceTranslationEngFour}</p>}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>{props.LessonText.convoLineFive}</p>
          {pinIsShown && <p>{props.LessonText.sentanceTranslationPinFive}</p>}
          {engIsShown && <p>{props.LessonText.sentanceTranslationEngFive}</p>}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {props.LessonText.convoLineSix && (
            <p>{props.LessonText.convoLineSix}</p>
          )}
          {props.LessonText.sentanceTranslationPinSix && pinIsShown &&(
            <p>{props.LessonText.sentanceTranslationPinSix}</p>
          )}
          {props.LessonText.sentanceTranslationEngSix && engIsShown && (
            <p>{props.LessonText.sentanceTranslationEngSix}</p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {props.LessonText.convoLineSeven && (
            <p>{props.LessonText.convoLineSeven}</p>
          )}
          {props.LessonText.sentanceTranslationPinSeven && pinIsShown &&(
            <p>{props.LessonText.sentanceTranslationPinSeven}</p>
          )}
          {props.LessonText.sentanceTranslationEngSeven && engIsShown && (
            <p>{props.LessonText.sentanceTranslationEngSeven}</p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {props.LessonText.convoLineEight && (
            <p>{props.LessonText.convoLineEight}</p>
          )}
          {props.LessonText.sentanceTranslationPinEight && pinIsShown &&(
            <p>{props.LessonText.sentanceTranslationPinEight}</p>
          )}
          {props.LessonText.sentanceTranslationEngEight && engIsShown && (
            <p>{props.LessonText.sentanceTranslationEngEight}</p>
          )}
        </div>
      </div>
    </div>
  );
}
