import "./App.css";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  lessonOne,
  lessonTwo,
  lessonThree,
  lessonFour,
  lessonFive,
} from "./modules/lessonText";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessonOne" element={<Lesson LessonText={lessonOne} />} />
        <Route path="/lessonTwo" element={<Lesson LessonText={lessonTwo} />} />
        <Route
          path="/lessonThree"
          element={<Lesson LessonText={lessonThree} />}
        />
        <Route
          path="/lessonFour"
          element={<Lesson LessonText={lessonFour} />}
        />
        <Route
          path="/lessonFive"
          element={<Lesson LessonText={lessonFive} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
