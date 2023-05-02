import "./App.css";
import Home from "./pages/Home";
import LessonsIndex from "./pages/LessonsIndex";
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
        <Route path="/lessonsIndex" element={<LessonsIndex />} />
        <Route path="/lesson1" element={<Lesson LessonText={lessonOne} />} />
        <Route path="/lesson2" element={<Lesson LessonText={lessonTwo} />} />
        <Route
          path="/lesson3"
          element={<Lesson LessonText={lessonThree} />}
        />
        <Route
          path="/lesson4"
          element={<Lesson LessonText={lessonFour} />}
        />
        <Route
          path="/lesson5"
          element={<Lesson LessonText={lessonFive} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
