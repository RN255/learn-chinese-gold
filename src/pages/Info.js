import React from "react";
import "../styles/styles.css";
import Footer from "../components/Footer";

export default function Info() {
  return (
    <div className="infoPage container">
      <div className="row mb-4">
        <div className="col">
          <h2>About</h2>
          <p>
            Dan Dan Chinese is a free online Chinese conversation course for
            beginners. There are currently 51 simple dialogue lessons for you to
            use. <br></br>More features and lessons will be added in the
            future...
          </p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <h2>Contact</h2>
          <p>
            If you have any questions, complaints, suggestions or comments
            please contact us:{" "}
            <a href="mailto:info@dandanchinese.com">info@dandanchinese.com</a>
          </p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <h2>Links</h2>
          <ul>
            <li>
              <p>
                <em>Useful resources to help you learn Chinese</em>
              </p>
            </li>
            <li>
              <p>
                <a
                  href="https://www.mdbg.net/chinese/dictionary"
                  target="_blank"
                  rel="noreferrer"
                >
                  MDBG Chinese-English dictionary
                </a>{" "}
                - Free online Chinese dictionary with flashcards, quizzes, text
                annotation, Chinese text input and more.
              </p>
            </li>
            <li>
              <p>
                <a
                  href="https://omniglot.com/chinese/mandarin.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Omniglot - Mandarin
                </a>{" "}
                - Online encyclopedia of writing systems & languages - Extensive
                guide to Mandarin Chinese, lessons, useful links and more.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
