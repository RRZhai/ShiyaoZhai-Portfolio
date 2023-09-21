import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
function App() {
  document.cookie =
    "LAST_RESULT_ENTRY_KEY=value; samesite=strict; path=/; domain=.www.youtube.com";
  document.cookie =
    "remote_sid=value; samesite=strict; path=/; domain=.youtube.com";
  document.cookie = "PREF=value; samesite=strict; path=/; domain=.youtube.com";

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
