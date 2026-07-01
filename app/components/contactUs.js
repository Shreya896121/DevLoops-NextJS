"use client";
import { useState, useEffect } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [contactInfo, setContactInfo] = useState(null);
  useEffect(() => {
    fetch("https://api.jsonblob.com/019a968c-822f-7cba-b25a-7de5b2b074c5")
      .then((res) => res.json())
      .then((data) => setContactInfo(data))
      .catch((err) => console.error("Error fetching contact info:", err));
  }, []);
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
      console.log(data);
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  };
  if (!contactInfo) {
    return <p className="text-center text-white mt-10">Loading contact info...</p>;
  }
  return (
    <div className="bg-gray-800 p-10 md:p-20">
      <h1 className="text-5xl md:text-7xl font-bold text-center text-white mb-10">
        Contact Us
      </h1>
      <div className="container mx-auto flex flex-col md:flex-row gap-10">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-white p-8 md:p-10 rounded border border-gray-300"
        >
          <div className="mb-4">
            <label className="block font-bold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Message</label>
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows="4"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-800 text-white p-3 rounded hover:bg-gray-700 transition-colors"
          >
            Send Message
          </button>
        </form>
        <div className="w-full md:w-1/2 flex text-white items-center">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
              <h2 className="font-bold text-lg mb-2">Phone</h2>
              <p>{contactInfo.phone}</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
              <h2 className="font-bold text-lg mb-2">Email</h2>
              <p>{contactInfo.email}</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="font-bold text-lg mb-2">Address</h2>
              <p>{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
