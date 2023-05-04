import React from "react";
import "../styles/styles.css";
import boyImg from "../assets/images/boy.png";
import girlImg from "../assets/images/girl.png";

const Home = () => {
  return (
    <div className="container homePage ">
      <div className="row align-items-center">
        <div className="col-lg-6 mx-auto mt-5 text-center">
          <h2 className="display-6 fw-bold">Learn Chinese from Zero</h2>
          <p>Join our lovely characters to learn Chinese conversation!</p>
        </div>

        <div className=" col-lg-6">
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
          <h2 className="display-6 fw-bold">Learn Chinese from Zero</h2>
          <p>Join our lovely characters to learn Chinese conversation!</p>
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
    </div>
  );
};

export default Home;
