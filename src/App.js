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
        <Route path="/lesson" element={<Lesson LessonText={lessonOne} />} />
        <Route path="/lessonTwo" element={<Lesson LessonText={lessonTwo} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
