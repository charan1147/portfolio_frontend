import React from "react";

const Main = () => {
  return (
    <section id="main" className="main-section">
      <h1 className="animate__animated animate__slideInLeft">
        Hello, I'm Charan Chandu
      </h1>
      <p className="animate__animated animate__slideInRight">
        MERN Stack Developer
      </p>
      <button
        className="animate__animated animate__zoomIn"
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Contact Me
      </button>
    </section>
  );
};

export default Main;
