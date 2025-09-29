// src/pages/About.jsx
import React from "react";
import { FaLaptopCode, FaGraduationCap, FaUsers } from "react-icons/fa";

function About() {
  return (
    <main className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="py-16 text-center bg-white border-b">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">About Nepal Coding House</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Nepal Coding House is a leading software company specializing in innovative digital solutions, custom software development, and technology consulting. We help businesses transform ideas into scalable, high-impact products.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <p className="text-gray-700 text-lg mb-4">
            To empower organizations and startups with world-class software, seamless user experiences, and reliable technology partnerships. We believe in building solutions that drive growth, efficiency, and digital transformation.
          </p>
          <ul className="list-disc pl-6 text-gray-600 text-base mb-4">
            <li>Custom software & web application development</li>
            <li>Cloud, AI, and automation solutions</li>
            <li>Long-term technology consulting & support</li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Optionally add a company illustration or logo here */}
        </div>
      </section>

      {/* Highlights / Stats */}
      <section className="py-24 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
            <FaLaptopCode className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Proven Expertise</h3>
            <p className="text-gray-600">Years of experience delivering robust, scalable software for global clients.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
            <FaGraduationCap className="text-indigo-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Innovation & Quality</h3>
            <p className="text-gray-600">Cutting-edge technology, agile processes, and a focus on quality at every step.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
            <FaUsers className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Client Partnership</h3>
            <p className="text-gray-600">Collaborative approach, transparent communication, and long-term support.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center px-6 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Build with Us?</h2>
        <p className="text-gray-700 mb-6">
          Partner with Nepal Coding House for your next software project and experience the difference of working with a passionate, professional team.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}

export default About;
