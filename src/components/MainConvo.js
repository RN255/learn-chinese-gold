import React, { useState } from "react";
import "../styles/styles.css";
import boyImg from "../assets/images/boy.png";
import girlImg from "../assets/images/girl.png";

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
          <button type="button" className="btn w-100" onClick={handleClickEng}>
            {!engIsShown ? "Show English" : "Hide English"}
          </button>
        </div>
        <div className="col col-md-3">
          <button type="button" className="btn w-100" onClick={handleClickPin}>
            {!pinIsShown ? "Show PinYin" : "Hide PinYin"}
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>
            {props.LessonText.firstSpeakerMale ? (
              <img src={boyImg}></img>
            ) : (
              <img src={girlImg}></img>
            )}
            <p>{props.LessonText.convoLineOne}</p>
          </div>
          {pinIsShown && <p>{props.LessonText.sentanceTranslationPinOne}</p>}
          {engIsShown && <p>{props.LessonText.sentanceTranslationEngOne}</p>}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>
            {props.LessonText.firstSpeakerMale ? (
              <img src={girlImg}></img>
            ) : (
              <img src={boyImg}></img>
            )}
            <p>{props.LessonText.convoLineTwo}</p>
          </div>
          {pinIsShown && <p>{props.LessonText.sentanceTranslationPinTwo}</p>}
          {engIsShown && <p>{props.LessonText.sentanceTranslationEngTwo}</p>}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>
            {props.LessonText.firstSpeakerMale ? (
              <img src={boyImg}></img>
            ) : (
              <img src={girlImg}></img>
            )}
            <p>{props.LessonText.convoLineThree}</p>
          </div>
          {pinIsShown && <p>{props.LessonText.sentanceTranslationPinThree}</p>}
          {engIsShown && <p>{props.LessonText.sentanceTranslationEngThree}</p>}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>
            {props.LessonText.firstSpeakerMale ? (
              <img src={girlImg}></img>
            ) : (
              <img src={boyImg}></img>
            )}
            <p>{props.LessonText.convoLineFour}</p>
          </div>
          {pinIsShown && <p>{props.LessonText.sentanceTranslationPinFour}</p>}
          {engIsShown && <p>{props.LessonText.sentanceTranslationEngFour}</p>}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>
            {props.LessonText.firstSpeakerMale ? (
              <img src={boyImg}></img>
            ) : (
              <img src={girlImg}></img>
            )}
            <p>{props.LessonText.convoLineFive}</p>
          </div>
          {pinIsShown && <p>{props.LessonText.sentanceTranslationPinFive}</p>}
          {engIsShown && <p>{props.LessonText.sentanceTranslationEngFive}</p>}
        </div>
      </div>

      {props.LessonText.convoLineSix && (
        <div className="row">
          <div className="col">
            <div>
              {props.LessonText.firstSpeakerMale ? (
                <img src={girlImg}></img>
              ) : (
                <img src={boyImg}></img>
              )}
              <p>{props.LessonText.convoLineSix}</p>
            </div>

            {props.LessonText.sentanceTranslationPinSix && pinIsShown && (
              <p>{props.LessonText.sentanceTranslationPinSix}</p>
            )}
            {props.LessonText.sentanceTranslationEngSix && engIsShown && (
              <p>{props.LessonText.sentanceTranslationEngSix}</p>
            )}
          </div>
        </div>
      )}

      {props.LessonText.convoLineSeven && (
        <div className="row">
          <div className="col">
            <div>
              {props.LessonText.firstSpeakerMale ? (
                <img src={boyImg}></img>
              ) : (
                <img src={girlImg}></img>
              )}
              <p>{props.LessonText.convoLineSeven}</p>
            </div>
            {props.LessonText.sentanceTranslationPinSeven && pinIsShown && (
              <p>{props.LessonText.sentanceTranslationPinSeven}</p>
            )}
            {props.LessonText.sentanceTranslationEngSeven && engIsShown && (
              <p>{props.LessonText.sentanceTranslationEngSeven}</p>
            )}
          </div>
        </div>
      )}

      {props.LessonText.convoLineEight && (
        <div className="row">
          <div className="col">
            <div>
              {props.LessonText.firstSpeakerMale ? (
                <img src={girlImg}></img>
              ) : (
                <img src={boyImg}></img>
              )}
              <p>{props.LessonText.convoLineEight}</p>
            </div>

            {props.LessonText.sentanceTranslationPinEight && pinIsShown && (
              <p>{props.LessonText.sentanceTranslationPinEight}</p>
            )}
            {props.LessonText.sentanceTranslationEngEight && engIsShown && (
              <p>{props.LessonText.sentanceTranslationEngEight}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
