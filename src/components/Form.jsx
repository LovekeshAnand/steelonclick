import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      const formDataEncoded = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      await fetch(
        `${import.meta.env.VITE_GOOGLE_SCRIPT_URL}?${formDataEncoded}`,
        {
          method: "GET",
          mode: "no-cors",
        }
      );

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Need a <span className="text-sky-400">Quote?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tell us what you need and we'll get you sorted
          </p>
        </div>

        <div className="bg-linear-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="What are you looking for?"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 resize-none"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                loading
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-sky-500 text-white hover:bg-sky-400"
              }`}
            >
              {loading ? "Sending..." : "Send It"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default LeadForm;