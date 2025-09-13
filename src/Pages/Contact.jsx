// src/pages/Contact.jsx
import React, { useState } from "react";
import { Phone, Mail, User, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSuccessMessage("Message sent successfully!");
    setFormData({ fullName: "", email: "", phone: "", message: "" });

    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Nepal Coding House - Get in Touch</title>
        <meta
          name="description"
          content="Contact Nepal Coding House for inquiries, feedback, or to join our free coding courses. Reach us via email or phone."
        />
        <meta
          name="keywords"
          content="Nepal Coding House Contact, Free Coding Courses Nepal, Web Development Classes, Python Classes Nepal"
        />
        <meta name="author" content="Nepal Coding House" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Nepal Coding House" />
        <meta
          property="og:description"
          content="Get in touch with Nepal Coding House for free coding courses, inquiries, and more."
        />
        <meta
          property="og:image"
          content="https://nepalcodinghousepvltd.netlify.app/assets/hero.png"
        />
        <meta
          property="og:url"
          content="https://nepalcodinghousepvltd.netlify.app/contact"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Nepal Coding House" />
        <meta
          name="twitter:description"
          content="Reach Nepal Coding House via email or phone for free coding courses and inquiries."
        />
        <meta
          name="twitter:image"
          content="https://nepalcodinghousepvltd.netlify.app/assets/hero.png"
        />
      </Helmet>

      {/* Contact Page */}
      <div className="min-h-screen bg-gray-50 py-16 px-6 lg:px-16">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-12">
          {/* LHS: Contact Info + Hero Text */}
          <div className="lg:w-1/2 flex flex-col justify-center gap-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800">
              Let’s <span className="text-blue-500">Get in Touch</span>
            </h1>
            <p className="text-gray-600">
              We’d love to hear from you. Fill out the form and we’ll get back as
              soon as possible. For urgent matters, call us directly.
            </p>

            <div className="flex flex-col gap-4 mt-6 items-center lg:items-start">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">
                    abhayabikramshahiofficial@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+977-9808370638</p>
                </div>
              </div>
            </div>
          </div>

          {/* RHS: Contact Form */}
          <div className="lg:w-1/2 bg-white border border-[#ccc] p-4 md:p-6 rounded-xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <User className="absolute top-2 left-2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-8 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute top-2 left-2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-8 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="relative">
                <Phone className="absolute top-2 left-2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-8 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="relative">
                <MessageCircle className="absolute top-2 left-2 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-8 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-400 transition"
              >
                Send Message
              </button>
            </form>

            {successMessage && (
              <p className="mt-3 text-green-600 font-medium text-center">
                {successMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
