import React from "react";
import arrowImage from "../assets/images/arrow-dark.png";

export default function ScrollToTopButton() {
  const handleClick = () => {
    // window.scrollTo({ top: 0, behavior: "auto" });
    window.scrollTo(0, 0);
  };

  return (
    <div className="scrollUpArrow">
      <a href="#" onClick={handleClick}>
        <img src={arrowImage}></img>
      </a>
    </div>
  );
}
