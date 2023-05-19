import React, { useState } from "react";
// import "../styles/styles.css";
import boyImg from "../assets/images/boy.png";
import girlImg from "../assets/images/girl.png";
import otherImg from "../assets/images/otherImg.png";

export default function MainConvoCustom(props) {
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
        <div
          className={
            "col " +
            (props.LessonText.convoLineOneCharacter === "other"
              ? "greenBackground"
              : "")
          }
        >
          <div>
            {props.LessonText.convoLineOneCharacter === "boy" ? (
              <img
                src={boyImg}
                alt="A Chinese man who will be a conversation partner"
              ></img>
            ) : props.LessonText.convoLineOneCharacter === "girl" ? (
              <img
                src={girlImg}
                alt="A Chinese woman who will be a conversation partner"
              ></img>
            ) : props.LessonText.convoLineOneCharacter === "other" ? (
              <img
                src={otherImg}
                alt="A person who will be a conversation partner"
              ></img>
            ) : null}
            <p>{props.LessonText.convoLineOne}</p>
          </div>
          {pinIsShown && <p>{props.LessonText.sentanceTranslationPinOne}</p>}
          {engIsShown && <p>{props.LessonText.sentanceTranslationEngOne}</p>}
        </div>
      </div>
      <div className="row">
        <div
          className={
            "col " +
            (props.LessonText.convoLineTwoCharacter === "other"
              ? "greenBackground"
              : "")
          }
        >
          <div>
            {props.LessonText.convoLineTwoCharacter === "boy" ? (
              <img
                src={boyImg}
                alt="A Chinese man who will be a conversation partner"
              ></img>
            ) : props.LessonText.convoLineTwoCharacter === "girl" ? (
              <img
                src={girlImg}
                alt="A Chinese woman who will be a conversation partner"
              ></img>
            ) : props.LessonText.convoLineTwoCharacter === "other" ? (
              <img
                src={otherImg}
                alt="A person who will be a conversation partner"
              ></img>
            ) : null}
            <p>{props.LessonText.convoLineTwo}</p>
          </div>
          {pinIsShown && <p>{props.LessonText.sentanceTranslationPinTwo}</p>}
          {engIsShown && <p>{props.LessonText.sentanceTranslationEngTwo}</p>}
        </div>
      </div>
      <div className="row">
        <div
          className={
            "col " +
            (props.LessonText.convoLineThreeCharacter === "other"
              ? "greenBackground"
              : "")
          }
        >
          <div>
            {props.LessonText.convoLineThreeCharacter === "boy" ? (
              <img
                src={boyImg}
                alt="A Chinese man who will be a conversation partner"
              ></img>
            ) : props.LessonText.convoLineThreeCharacter === "girl" ? (
              <img
                src={girlImg}
                alt="A Chinese woman who will be a conversation partner"
              ></img>
            ) : props.LessonText.convoLineThreeCharacter === "other" ? (
              <img
                src={otherImg}
                alt="A person who will be a conversation partner"
              ></img>
            ) : null}
            <p>{props.LessonText.convoLineThree}</p>
          </div>
          {pinIsShown && <p>{props.LessonText.sentanceTranslationPinThree}</p>}
          {engIsShown && <p>{props.LessonText.sentanceTranslationEngThree}</p>}
        </div>
      </div>
      <div className="row">
        <div
          className={
            "col " +
            (props.LessonText.convoLineFourCharacter === "other"
              ? "greenBackground"
              : "")
          }
        >
          <div>
            {props.LessonText.convoLineFourCharacter === "boy" ? (
              <img
                src={boyImg}
                alt="A Chinese man who will be a conversation partner"
              ></img>
            ) : props.LessonText.convoLineFourCharacter === "girl" ? (
              <img
                src={girlImg}
                alt="A Chinese woman who will be a conversation partner"
              ></img>
            ) : props.LessonText.convoLineFourCharacter === "other" ? (
              <img
                src={otherImg}
                alt="A person who will be a conversation partner"
              ></img>
            ) : null}
            <p>{props.LessonText.convoLineFour}</p>
          </div>
          {pinIsShown && <p>{props.LessonText.sentanceTranslationPinFour}</p>}
          {engIsShown && <p>{props.LessonText.sentanceTranslationEngFour}</p>}
        </div>
      </div>

      {props.LessonText.convoLineFive && (
        <div className="row">
          <div
            className={
              "col " +
              (props.LessonText.convoLineFiveCharacter === "other"
                ? "greenBackground"
                : "")
            }
          >
            <div>
              {props.LessonText.convoLineFiveCharacter === "boy" ? (
                <img
                  src={boyImg}
                  alt="A Chinese man who will be a conversation partner"
                ></img>
              ) : props.LessonText.convoLineFiveCharacter === "girl" ? (
                <img
                  src={girlImg}
                  alt="A Chinese woman who will be a conversation partner"
                ></img>
              ) : props.LessonText.convoLineFiveCharacter === "other" ? (
                <img
                  src={otherImg}
                  alt="A person who will be a conversation partner"
                ></img>
              ) : null}
              <p>{props.LessonText.convoLineFive}</p>
            </div>
            {pinIsShown && <p>{props.LessonText.sentanceTranslationPinFive}</p>}
            {engIsShown && <p>{props.LessonText.sentanceTranslationEngFive}</p>}
          </div>
        </div>
      )}

      {props.LessonText.convoLineSix && (
        <div className="row">
          <div
            className={
              "col " +
              (props.LessonText.convoLineSixCharacter === "other"
                ? "greenBackground"
                : "")
            }
          >
            <div>
              {props.LessonText.convoLineSixCharacter === "boy" ? (
                <img
                  src={boyImg}
                  alt="A Chinese man who will be a conversation partner"
                ></img>
              ) : props.LessonText.convoLineSixCharacter === "girl" ? (
                <img
                  src={girlImg}
                  alt="A Chinese woman who will be a conversation partner"
                ></img>
              ) : props.LessonText.convoLineSixCharacter === "other" ? (
                <img
                  src={otherImg}
                  alt="A person who will be a conversation partner"
                ></img>
              ) : null}
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
          <div
            className={
              "col " +
              (props.LessonText.convoLineSevenCharacter === "other"
                ? "greenBackground"
                : "")
            }
          >
            <div>
              {props.LessonText.convoLineSevenCharacter === "boy" ? (
                <img
                  src={boyImg}
                  alt="A Chinese man who will be a conversation partner"
                ></img>
              ) : props.LessonText.convoLineSevenCharacter === "girl" ? (
                <img
                  src={girlImg}
                  alt="A Chinese woman who will be a conversation partner"
                ></img>
              ) : props.LessonText.convoLineSevenCharacter === "other" ? (
                <img
                  src={otherImg}
                  alt="A person who will be a conversation partner"
                ></img>
              ) : null}
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
          <div
            className={
              "col " +
              (props.LessonText.convoLineEightCharacter === "other"
                ? "greenBackground"
                : "")
            }
          >
            <div>
              {props.LessonText.convoLineEightCharacter === "boy" ? (
                <img
                  src={boyImg}
                  alt="A Chinese man who will be a conversation partner"
                ></img>
              ) : props.LessonText.convoLineEightCharacter === "girl" ? (
                <img
                  src={girlImg}
                  alt="A Chinese woman who will be a conversation partner"
                ></img>
              ) : props.LessonText.convoLineEightCharacter === "other" ? (
                <img
                  src={otherImg}
                  alt="A person who will be a conversation partner"
                ></img>
              ) : null}
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

      {props.LessonText.convoLineNine && (
        <div className="row">
          <div
            className={
              "col " +
              (props.LessonText.convoLineNineCharacter === "other"
                ? "greenBackground"
                : "")
            }
          >
            <div>
              {props.LessonText.convoLineNineCharacter === "boy" ? (
                <img
                  src={boyImg}
                  alt="A Chinese man who will be a conversation partner"
                ></img>
              ) : props.LessonText.convoLineNineCharacter === "girl" ? (
                <img
                  src={girlImg}
                  alt="A Chinese woman who will be a conversation partner"
                ></img>
              ) : props.LessonText.convoLineNineCharacter === "other" ? (
                <img
                  src={otherImg}
                  alt="A person who will be a conversation partner"
                ></img>
              ) : null}
              <p>{props.LessonText.convoLineNine}</p>
            </div>

            {props.LessonText.sentanceTranslationPinNine && pinIsShown && (
              <p>{props.LessonText.sentanceTranslationPinNine}</p>
            )}
            {props.LessonText.sentanceTranslationEngNine && engIsShown && (
              <p>{props.LessonText.sentanceTranslationEngNine}</p>
            )}
          </div>
        </div>
      )}

      {props.LessonText.convoLineTen && (
        <div className="row">
          <div
            className={
              "col " +
              (props.LessonText.convoLineTenCharacter === "other"
                ? "greenBackground"
                : "")
            }
          >
            <div>
              {props.LessonText.convoLineTenCharacter === "boy" ? (
                <img
                  src={boyImg}
                  alt="A Chinese man who will be a conversation partner"
                ></img>
              ) : props.LessonText.convoLineTenCharacter === "girl" ? (
                <img
                  src={girlImg}
                  alt="A Chinese woman who will be a conversation partner"
                ></img>
              ) : props.LessonText.convoLineTenCharacter === "other" ? (
                <img
                  src={otherImg}
                  alt="A person who will be a conversation partner"
                ></img>
              ) : null}
              <p>{props.LessonText.convoLineTen}</p>
            </div>

            {props.LessonText.sentanceTranslationPinTen && pinIsShown && (
              <p>{props.LessonText.sentanceTranslationPinTen}</p>
            )}
            {props.LessonText.sentanceTranslationEngTen && engIsShown && (
              <p>{props.LessonText.sentanceTranslationEngTen}</p>
            )}
          </div>
        </div>
      )}

      {props.LessonText.convoLineEleven && (
        <div className="row">
          <div
            className={
              "col" +
              (props.LessonText.convoLineElevenCharacter === "other"
                ? "greenBackground"
                : "")
            }
          >
            <div>
              {props.LessonText.convoLineElevenCharacter === "boy" ? (
                <img
                  src={boyImg}
                  alt="A Chinese man who will be a conversation partner"
                ></img>
              ) : props.LessonText.convoLineElevenCharacter === "girl" ? (
                <img
                  src={girlImg}
                  alt="A Chinese woman who will be a conversation partner"
                ></img>
              ) : props.LessonText.convoLineElevenCharacter === "other" ? (
                <img
                  src={otherImg}
                  alt="A person who will be a conversation partner"
                ></img>
              ) : null}
              <p>{props.LessonText.convoLineEleven}</p>
            </div>

            {props.LessonText.sentanceTranslationPinEleven && pinIsShown && (
              <p>{props.LessonText.sentanceTranslationPinEleven}</p>
            )}
            {props.LessonText.sentanceTranslationEngEleven && engIsShown && (
              <p>{props.LessonText.sentanceTranslationEngEleven}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
