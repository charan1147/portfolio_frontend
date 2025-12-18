import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const sections = ["main", "about", "skills", "projects"];
  const [activeSection, setActiveSection] = useState("main");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          const scrollPos = window.scrollY + window.innerHeight / 2;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sec) => {
    const el = document.getElementById(sec);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sec);
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light", !darkMode);
    document.body.classList.toggle("dark", darkMode);
  };

  return (
    <header className="header animate__animated animate__fadeInDown">
      <div className="navbar-left">
        <a
          href="https://github.com/charan1147"
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon"
        >
          <FaGithub size={24} />
        </a>
      </div>

      <div className="navbar-center">
        {sections.map((sec) => (
          <span
            key={sec}
            onClick={() => scrollToSection(sec)}
            className={`nav-link ${activeSection === sec ? "active" : ""}`}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </span>
        ))}
      </div>

      <div className="navbar-right">
        <a href="#contact" className="contact-link">
          Contact Me
        </a>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
