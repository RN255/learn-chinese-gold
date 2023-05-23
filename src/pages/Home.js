import React from "react";
import "../styles/styles.css";
import boyImgHome from "../assets/images/boyHome.png";
import girlImgHome from "../assets/images/girlHome.png";
import MainConvo from "../components/MainConvo";
import TranslatedWords from "../components/TranslatedWords";
import Audio from "../components/Audio";
import KeyPhrases from "../components/KeyPhrases";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <div className="homePage">
      <div className="container ">
        <div className="row align-items-center mb-4">
          <div className="col-lg-6 mx-auto mt-5 text-center">
            <h1 className="display-6 fw-bold">
              Mandarin Chinese dialogues for beginners
            </h1>
            <p>Learn Chinese online for free with conversation dialogues</p>
          </div>

          <div className="col-lg-6">
            <div className="mainPageConvoSample d-flex align-items-center rounded mx-auto mt-5">
              <div className="p-4">
                <img
                  src={boyImgHome}
                  alt="A Chinese man who will be a conversation partner"
                ></img>
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
            <h2 className="display-6 fw-bold">Chinese daily conversation</h2>
            <p>
              Learn by yourself! Listen to the dialogue, read the script, follow
              our simple lessons!
            </p>
          </div>

          <div className=" col-lg-6">
            <div className="mainPageConvoSample d-flex align-items-center rounded mx-auto mt-5">
              <div className="p-4">
                <img
                  src={girlImgHome}
                  alt="A Chinese woman who will be a conversation partner"
                ></img>
              </div>
              <div className="px-4 pt-3">
                <p>你叫什么名字？</p>
                <p>Nǐ jìao shénme míngzi?</p>
                <p>What is your name?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-5 mt-5">
          <p className="display-6 fw-bold border-bottom pb-3">
            Example lesson:
          </p>
          <p className="mt-5 pt-3 homePageInstructions text-center">
            <span className="fw-bold">Step 1: </span>Listen to the dialogue and
            read the conversation!
          </p>
        </div>
      </div>

      <Audio LessonText={props.LessonText} Flashing={true}></Audio>

      <div className="container homeItemCustomMargin">
        <div className="row text-center">
          <p className="homePageInstructions">
            <span className="fw-bold">Step 2: </span> Press "Show English" for
            English translation, and "Show PinYin" for pronunciation!
          </p>
        </div>
      </div>

      <MainConvo LessonText={props.LessonText} Flashing={true}></MainConvo>

      <div className="container homeItemCustomMargin">
        <div className="row text-center">
          <p className="homePageInstructions">
            <span className="fw-bold">Step 3: </span> Get help from the word
            list!
          </p>
        </div>
      </div>

      <TranslatedWords LessonText={props.LessonText}></TranslatedWords>

      <div className="container homeItemCustomMargin">
        <div className="row text-center">
          <p className="homePageInstructions">
            <span className="fw-bold">Step 4: </span> Test your knowledge of key
            phrases!
          </p>
        </div>
      </div>

      <KeyPhrases LessonText={props.LessonText} Flashing={true}></KeyPhrases>

      <div className="container mt-4 mb-5">
        <div className="row text-center  mb-4">
          <p className="display-6 fw-bold">Are you ready to start learning?</p>
          <p>
            Start learning Chinese for free with our online conversation course!
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-3 pb-4">
            <Link to="/lesson1">
              <Button
                variant="link"
                className="w-100 HomeCtaButton text-dark text-decoration-none homePageBorderElement flashingBorder"
              >
                Start lesson One
              </Button>
            </Link>
          </div>
          <div className="col-12 col-md-3 pb-4">
            <Link to="/lessonsIndex">
              <Button
                variant="link"
                className="w-100 HomeCtaButton text-dark text-decoration-none homePageBorderElement flashingBorder"
              >
                Lesson Index
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
