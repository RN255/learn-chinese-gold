import "./App.css";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lessonOne, lessonTwo } from "./props/lessonText";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/lesson"
          element={
            <Lesson
              chineseTitle={lessonOne.chineseTitle}
              englishTitle={lessonOne.englishTitle}
              lineOne={lessonOne.lineOne}
              lineTwo={lessonOne.lineTwo}
              lineThree={lessonOne.lineThree}
              lineFour={lessonOne.lineFour}
              lineFive={lessonOne.lineFive}
            />
          }
        />
        <Route
          path="/lessonTwo"
          element={
            <Lesson
              chineseTitle={lessonTwo.chineseTitle}
              englishTitle={lessonTwo.englishTitle}
              lineOne={lessonTwo.lineOne}
              lineTwo={lessonTwo.lineTwo}
              lineThree={lessonTwo.lineThree}
              lineFour={lessonTwo.lineFour}
              lineFive={lessonTwo.lineFive}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
