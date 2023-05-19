import React from "react";
import "../styles/styles.css";

export default function TranslatedWords(props) {
  return (
    <div className="translatedWords container pt-5">
      <div className="row mb-3 text-center">
        <h2>Word list</h2>
      </div>

      {props.LessonText.translationChinWordOne && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordOne}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordOne}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordOne}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordTwo && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordTwo}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordTwo}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordTwo}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordThree && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordThree}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordThree}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordThree}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordFour && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordFour}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordFour}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordFour}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordFive && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordFive}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordFive}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordFive}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordSix && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordSix}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordSix}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordSix}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordSeven && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordSeven}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordSeven}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordSeven}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordEight && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordEight}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordEight}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordEight}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordNine && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordNine}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordNine}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordNine}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordTen && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordTen}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordTen}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordTen}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordEleven && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordEleven}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordEleven}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordEleven}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordTwelve && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordTwelve}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordTwelve}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordTwelve}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordThirteen && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordThirteen}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordThirteen}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordThirteen}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordFourteen && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordFourteen}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordFourteen}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordFourteen}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordFifteen && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordFifteen}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordFifteen}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordFifteen}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordSixteen && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordSixteen}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordSixteen}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordSixteen}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordSeventeen && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordSeventeen}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordSeventeen}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordSeventeen}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordEighteen && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordEighteen}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordEighteen}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordEighteen}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordNineteen && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordNineteen}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordNineteen}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordNineteen}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}

      {props.LessonText.translationChinWordTwenty && (
        <>
          <div className="row">
            <div className="col d-flex translationChinWord">
              <p className="my-auto">
                {props.LessonText.translationChinWordTwenty}
              </p>
            </div>
            <div className="col d-flex">
              <p className="my-auto">
                {props.LessonText.translationPinWordTwenty}
              </p>
            </div>
            <div className="col d-flex translationEngWord">
              <p className="my-auto">
                {props.LessonText.translationEngWordTwenty}
              </p>
            </div>
          </div>
          <div className="row border-bottom mx-1"></div>
        </>
      )}
    </div>
  );
}
