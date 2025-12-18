import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import "animate.css";
import "./App.css";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`app ${theme}`}>
      <ErrorBoundary>
        <header className="header animate__animated animate__fadeInDown">
          <a
            href="https://github.com/charan1147"
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon"
          >
            <FaGithub size={30} />
          </a>
          <Navbar />
          <div className="nav-right">
            <span
              onClick={() => scrollToSection("contact")}
              className="contact-link"
            >
              Contact Me
            </span>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
          </div>
        </header>

        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </ErrorBoundary>
    </div>
  );
};

export default App;
