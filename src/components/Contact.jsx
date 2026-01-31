import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${form.name}`;
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0AMessage:%0A${form.message}`;

    window.location.href = `mailto:yourgmail@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="contact-section animate__animated animate__fadeInUp"
    >
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          required
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
