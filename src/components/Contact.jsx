import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://portflio-backend-1-vcyt.onrender.comgiyt ",
        form
      );
      setStatus({ type: "success", message: res.data.success });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        type: "danger",
        message: err.response?.data?.error || "Something went wrong!",
      });
    }
  };

  return (
    <section
      id="contact"
      className="contact-section animate__animated animate__fadeInUp"
    >
      <h2>Contact Me</h2>
      {status && (
        <div className={`alert alert-${status.type}`}>{status.message}</div>
      )}
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
