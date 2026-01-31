import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = (e) => {
  e.preventDefault();

  const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
  );

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=charanc1147@gmail.com&su=${subject}&body=${body}`;

  window.open(gmailUrl, "_blank");
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
