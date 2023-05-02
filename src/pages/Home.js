import React from "react";
import "../styles/styles.css";
import boyImg from "../assets/images/boy.png";
import girlImg from "../assets/images/girl.png";

const Home = () => {
  return (
    <div id="homePage">
      <h1>Welcome to the homepage!</h1>
      <p>This is some example text for the homepage.</p>
      <div
        style={{
          width: "50%",
          margin: "auto",
          paddingTop: "5%",
          display: "flex",
        }}
      >
        <img
          src={boyImg}
          style={{ height: "6rem", borderRadius: "50%", marginRight: "5%" }}
        ></img>
        <p style={{ fontSize: "2rem", flexWrap: "wrap" }}>
          Hi! Come and learn Chinese with me!
        </p>
      </div>
      <div
        style={{
          width: "50%",
          margin: "auto",
          paddingTop: "5%",
          display: "flex",
        }}
      >
        <p style={{ fontSize: "2rem", flexWrap: "wrap" }}>
          And learn Chinese with me too!
        </p>
        <img
          src={girlImg}
          style={{ height: "6rem", borderRadius: "50%", marginRight: "5%" }}
        ></img>
      </div>
    </div>
  );
};

export default Home;
