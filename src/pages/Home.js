import React from "react";
import "../styles/styles.css";
import boyImg from "../assets/images/boy.png";
import girlImg from "../assets/images/girl.png";
import MainConvo from "../components/MainConvo";
import TitleSection from "../components/TitleSection";
import TranslatedWords from "../components/TranslatedWords";
import Audio from "../components/Audio";
import KeyPhrases from "../components/KeyPhrases";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <div className="container homePage ">
        <div className="row align-items-center">
          <div className="col-lg-6 mx-auto mt-5 text-center">
            <h2 className="display-6 fw-bold">
              Learn to speak Mandarin Chinese
            </h2>
            <p>Join us and learn Chinese conversation!</p>
          </div>

          <div className="col-lg-6">
            <div className="mainPageConvoSample d-flex align-items-center rounded mx-auto mt-5">
              <div className="p-4">
                <img src={boyImg}></img>
              </div>
              <div className="px-5 pt-3">
                <p>你好。</p>
                <p>Nǐ hǎo.</p>
                <p>Hello.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center flex-lg-row-reverse">
          <div className="col-lg-6 mx-auto mt-5 text-center">
            <h2 className="display-6 fw-bold">
              Improve daily Chinese conversation
            </h2>
            <p>Simple lessons for easy learning!</p>
          </div>

          <div className=" col-lg-6">
            <div className="mainPageConvoSample d-flex align-items-center rounded mx-auto mt-5">
              <div className="p-4">
                <img src={girlImg}></img>
              </div>
              <div className="px-4 pt-3">
                <p>你叫什么名字？</p>
                <p>Nǐ jìao shénme míngzi?</p>
                <p>What is your name?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center mt-5">
          <p className="display-6 fw-bold">
            Let's have a look at a sample lesson!
          </p>
          <p className="pt-3 homePageInstructions">
            <span className="fw-bold">Step 1: </span>Listen to the dialogue and
            read the conversation!
          </p>
        </div>
      </div>

      {/* <TitleSection LessonText={props.LessonText}></TitleSection> */}
      <Audio LessonText={props.LessonText}></Audio>

      <div className="container mt-4">
        <div className="row text-center">
          <p className="homePageInstructions">
            <span className="fw-bold">Step 2: </span> Press "Show English" for
            English translation, and "Show PinYin" for pronunciation!
          </p>
        </div>
      </div>

      <MainConvo LessonText={props.LessonText}></MainConvo>

      <div className="container mt-5">
        <div className="row text-center">
          <p className="homePageInstructions">
            <span className="fw-bold">Step 3: </span> Get help from the word
            list!
          </p>
        </div>
      </div>

      <TranslatedWords LessonText={props.LessonText}></TranslatedWords>

      <div className="container mt-5">
        <div className="row text-center">
          <p className="homePageInstructions">
            <span className="fw-bold">Step 4: </span> Test your knowledge of key
            phrases!
          </p>
        </div>
      </div>

      <KeyPhrases LessonText={props.LessonText}></KeyPhrases>

      <div className="container mt-4 mb-5">
        <div className="row text-center display-6 fw-bold mb-4">
          <p>Are you ready to start learning?</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-3 pb-4">
            <Link to="/lesson1">
              <Button
                variant="link"
                className="w-100 HomeCtaButton text-dark text-decoration-none"
              >
                Start lesson One
              </Button>
            </Link>
          </div>
          <div className="col-12 col-md-3 pb-4">
            <Link to="/lessonsIndex">
              <Button
                variant="link"
                className="w-100 HomeCtaButton text-dark text-decoration-none"
              >
                Lesson Index
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
