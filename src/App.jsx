import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import Course from "./pages/Course";



export default function App() {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.background = "#fff";
    document.body.style.fontFamily = "Poppins, sans-serif";
    document.body.style.color = "#10234b";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/course/2-day-cpr-first-aid" element={<CourseDetail />} />
      </Routes>
    </>
  );
}
