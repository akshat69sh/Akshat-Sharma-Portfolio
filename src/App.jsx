import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/Sections/AboutMe";
import { Routes, Route } from "react-router-dom";
import Projects from "./Components/Sections/Projects";
import Contact from "./Components/Sections/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/Aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
