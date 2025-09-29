// src/pages/Services.jsx
import React from "react";
import { FaLaptopCode, FaGraduationCap, FaProjectDiagram, FaChalkboardTeacher } from "react-icons/fa";


function Services() {
  const services = [
    {
      icon: <FaLaptopCode className="text-gray-900 text-5xl mb-4" />,
      title: "Web Development",
      desc: "Learn HTML, CSS, JavaScript, React, and backend technologies to build real websites and applications.",
    },
    {
      icon: <FaGraduationCap className="text-gray-900 text-5xl mb-4" />,
      title: "AI & Machine Learning",
      desc: "Explore Python, data science, and AI concepts to create intelligent applications and solve real-world problems.",
    },
    {
      icon: <FaProjectDiagram className="text-gray-900 text-5xl mb-4" />,
      title: "Team Projects",
      desc: "Collaborate on real-world projects with other students, gain hands-on experience, and build a strong portfolio.",
    },
    {
      icon: <FaChalkboardTeacher className="text-gray-900 text-5xl mb-4" />,
      title: "Mentorship",
      desc: "Get guidance from experienced professionals to accelerate your learning and career growth.",
    },
  ];

  return (
    <main className="font-sans text-gray-900">

      {/* Hero Section Removed */}
      <section className="py-16 text-center bg-gray-900">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Our Services</h1>
        <p className="text-lg md:text-xl text-white mt-2">
          Learn, grow, and innovate with our wide range of coding and tech services.
        </p>
      </section>

      {/* Services Cards */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transform transition duration-300"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-gray-50 py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to start your coding journey?</h2>
        <p className="text-gray-700 mb-6">
          Join Nepal Coding House and take your skills to the next level with expert mentorship and hands-on projects.
        </p>
        <a
          href="/contact"
          className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}

export default Services;
