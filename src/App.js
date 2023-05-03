import "./App.css";
import Home from "./pages/Home";
import LessonsIndex from "./pages/LessonsIndex";
import Lesson from "./pages/Lesson";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { arrayOfLessons } from "./modules/lessonText";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessonsIndex" element={<LessonsIndex />} />

        {arrayOfLessons.map((item) => (
          <Route
            key={item}
            path={`/lesson${item.lessonNumber}`}
            element={<Lesson LessonText={item} />}
          />
        ))}

        {/* [`audio${props.LessonText.lessonNumber}`] */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
