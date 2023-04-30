import React from "react";
import NavBar from "../components/NavBar";
import "../styles/styles.css";
import Lesson from "../components/Lesson";
import { text, text2 } from "../props/lessonText";

const Home = () => {
  return (
    <div id="homePage">
      <NavBar></NavBar>
      <h1>Welcome to the homepage!</h1>
      <p>This is some example text for the homepage.</p>
      <Lesson name={text.name} age={text.age} date={text.date}></Lesson>
      <Lesson name={text2.name} age={text2.age} date={text2.date}></Lesson>
    </div>
  );
};

export default Home;
