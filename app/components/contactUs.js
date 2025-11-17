"use client";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <>
      <h1 className="font-bold text-center text-gray-800 text-5xl">Contact Us</h1>

      <div className="container mx-auto my-10 p-5 flex flex-row items-center gap-50">

        <form onSubmit={handleSubmit} className="border p-5 mb-5 w-full max-w-md border-gray-300 rounded bg-gray-400">

          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 m-2 bg-white w-full"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 m-2 bg-white w-full"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            placeholder="Your Message"
            className="border p-2 m-2 bg-white w-full"
            rows="4"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
          <button
            type="submit"
            className="bg-gray-800 text-white p-2 m-2 rounded"
          >
            Send Message
          </button>
        </form>

        <div>
          <h1>Phone:</h1>
          <h1>Email:</h1>
          <h1>Location:</h1>
        </div>

      </div>
    </>
  );
}
