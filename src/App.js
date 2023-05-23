import "./App.css";
import Home from "./pages/Home";
import LessonsIndex from "./pages/LessonsIndex";
import Lesson from "./pages/Lesson";
import Info from "./pages/Info";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { arrayOfLessons } from "./modules/lessonText";
import ScrollToTopFunction from "./components/ScrollToTopFunction";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopFunction></ScrollToTopFunction>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home LessonText={arrayOfLessons[0]} />} />
        <Route path="/lessonsIndex" element={<LessonsIndex />} />
        <Route path="/info" element={<Info />} />

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
