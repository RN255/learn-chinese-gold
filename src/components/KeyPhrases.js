import React, { useState } from "react";

export default function KeyPhrases(props) {
  const [engIsShown, setEngIsShown] = useState(false);
  const handleClickEng = () => {
    setEngIsShown(!engIsShown);
  };

  const [pinIsShown, setPinIsShown] = useState(false);
  const handleClickPin = () => {
    setPinIsShown(!pinIsShown);
  };

  return (
    <div className="keyPhrases container pt-5 pb-5">
      <div className="row mb-3 text-center">
        <h2>Key Phrases</h2>
      </div>

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

      <div className="row justify-content-center">
        <div className="col col-md-6 text-center">
          <p>{props.LessonText.keyPhraseChinOne}</p>
          {pinIsShown && <p>{props.LessonText.keyPhrasePinOne}</p>}
          {engIsShown && <p>{props.LessonText.keyPhraseEngOne}</p>}
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col col-md-6 text-center">
          <p>{props.LessonText.keyPhraseChinTwo}</p>
          {pinIsShown && <p>{props.LessonText.keyPhrasePinTwo}</p>}
          {engIsShown && <p>{props.LessonText.keyPhraseEngTwo}</p>}
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col col-md-6 text-center">
          <p>{props.LessonText.keyPhraseChinThree}</p>
          {pinIsShown && <p>{props.LessonText.keyPhrasePinThree}</p>}
          {engIsShown && <p>{props.LessonText.keyPhraseEngThree}</p>}
        </div>
      </div>

      {props.LessonText.keyPhraseChinFour && (
        <div className="row justify-content-center">
          <div className="col col-md-6 text-center">
            <p>{props.LessonText.keyPhraseChinFour}</p>
            {pinIsShown && <p>{props.LessonText.keyPhrasePinFour}</p>}
            {engIsShown && <p>{props.LessonText.keyPhraseEngFour}</p>}
          </div>
        </div>
      )}

      {props.LessonText.keyPhraseChinFive && (
        <div className="row justify-content-center">
          <div className="col col-md-6 text-center">
            <p>{props.LessonText.keyPhraseChinFive}</p>
            {pinIsShown && <p>{props.LessonText.keyPhrasePinFive}</p>}
            {engIsShown && <p>{props.LessonText.keyPhraseEngFive}</p>}
          </div>
        </div>
      )}

      {props.LessonText.keyPhraseChinSix && (
        <div className="row justify-content-center">
          <div className="col col-md-6 text-center">
            <p>{props.LessonText.keyPhraseChinSix}</p>
            {pinIsShown && <p>{props.LessonText.keyPhrasePinSix}</p>}
            {engIsShown && <p>{props.LessonText.keyPhraseEngSix}</p>}
          </div>
        </div>
      )}

      {props.LessonText.keyPhraseChinSeven && (
        <div className="row justify-content-center">
          <div className="col col-md-6 text-center">
            <p>{props.LessonText.keyPhraseChinSeven}</p>
            {pinIsShown && <p>{props.LessonText.keyPhrasePinSeven}</p>}
            {engIsShown && <p>{props.LessonText.keyPhraseEngSeven}</p>}
          </div>
        </div>
      )}

      {props.LessonText.keyPhraseChinEight && (
        <div className="row justify-content-center">
          <div className="col col-md-6 text-center">
            <p>{props.LessonText.keyPhraseChinEight}</p>
            {pinIsShown && <p>{props.LessonText.keyPhrasePinEight}</p>}
            {engIsShown && <p>{props.LessonText.keyPhraseEngEight}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
