import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      name: "Library Management",
      desc: "Organizes and enables all library operations online",
      live: "https://app-like-library-management.netlify.app",
      image: "https://via.placeholder.com/800x400?text=Library+Management",
      frontendcode:
        "https://github.com/charan1147/project-library-management--frontend.git",
      backendcode:
        "https://github.com/charan1147/project1-backend-library-management.git",
    },
    {
      name: "Coding Quiz",
      desc: "Interactive coding quiz with real-time scoring.",
      live: "https://app-like-quiz.netlify.app",
      image: "https://via.placeholder.com/800x400?text=Coding+Quiz",
      frontendcode: "https://github.com/charan1147/project-quiz-frontend.git",
      backendcode:
        "https://github.com/charan1147/charan1147-project-quiz-backend-.git",
    },
    {
      name: "Expense Tracker",
      desc: "Track group and personal expenses effectively.",
      live: "https://app-like-expenses.netlify.app",
      image: "https://via.placeholder.com/800x400?text=Expense+Tracker",
      frontendcode:
        "https://github.com/charan1147/project-expense-tracker--frontend.git",
      backendcode: "https://github.com/charan1147/project-expenses-tracker.git",
    },
    {
      name: "Chat App",
      desc: "Real-time messaging with video and audio calls.",
      live: "https://app-like-chat1.netlify.app",
      image: "https://via.placeholder.com/800x400?text=Chat+App",
      frontendcode:
        "https://github.com/charan1147/project-chat-app-frontend.git",
      backendcode: "https://github.com/charan1147/project-chatting-app.git",
    },
    {
      name: "Hotel Booking",
      desc: "Book hotel rooms online easily with modern UI.",
      live: "https://app-like-hotel-booking.netlify.app",
      image: "https://via.placeholder.com/800x400?text=Hotel+Booking",
      frontendcode:
        "https://github.com/charan1147/project-hotel-booking-frontend.git",
      backendcode: "https://github.com/charan1147/Project-Hotel-Bookings.git",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="project-slider">
        <button className="nav-btn prev-btn" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="project-card">
          <h3>{projects[current].name}</h3>
          <p>{projects[current].desc}</p>

          <div className="project-preview">
            <iframe
              src={projects[current].live}
              title={projects[current].name}
              className="live-frame"
            ></iframe>
          </div>

          <div className="project-links">
            <a href={projects[current].live} target="_blank" rel="noreferrer">
              Live
            </a>
            <a
              href={projects[current].frontendcode}
              target="_blank"
              rel="noreferrer"
            >
              Frontend
            </a>
            <a
              href={projects[current].backendcode}
              target="_blank"
              rel="noreferrer"
            >
              Backend
            </a>
          </div>
        </div>

        <button className="nav-btn next-btn" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="dots">
        {projects.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${current === idx ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Projects;
