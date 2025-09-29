// src/pages/Home.jsx
import React, { useState } from "react";
import { FaLaptopCode, FaUsers, FaGraduationCap, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import HeroImg from "../assets/hero.jpg";

function Home() {
  const testimonials = [
    { text: "The mentors here really helped me become a full-stack developer in 6 months!", name: "Sita Sharma" },
    { text: "Amazing coding environment and practical projects. Highly recommend!", name: "Ramesh Thapa" },
    { text: "Nepal Coding House is the best place to start your tech career.", name: "Anjali KC" },
  ];
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const prevTestimonial = () => setTestimonialIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextTestimonial = () => setTestimonialIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <main className="font-sans text-gray-900 bg-white">

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 bg-white gap-10 md:gap-0">
        <div className="w-full md:w-1/2 text-center md:text-left z-10 mt-10 md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">Nepal Coding House</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
            Building Next-Gen Software Solutions for a Digital Nepal
          </p>
          <a
            href="/services"
            className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Explore Services
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={HeroImg}
            alt="Nepal Coding House Hero"
            className="w-3/4 sm:w-2/3 md:w-full max-w-xs md:max-w-md lg:max-w-lg rounded-xl"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">About Us</h2>
          <p className="text-gray-700 text-base sm:text-lg mb-4">
            Nepal Coding House is a premier software and education company dedicated to teaching coding, software development, and digital skills. Our mission is to empower Nepali youth to build real-world projects and launch successful tech careers.
          </p>
          <ul className="list-disc pl-6 text-gray-600 text-sm sm:text-base mb-4">
            <li>Hands-on learning with real projects</li>
            <li>Mentorship from industry professionals</li>
            <li>Collaborative, innovative environment</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={HeroImg}
            alt="Nepal Coding House"
            className="rounded-xl shadow-lg w-3/4 sm:w-2/3 md:w-full max-w-xs md:max-w-md lg:max-w-lg border border-blue-100"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-gray-900">Our Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FaLaptopCode className="text-blue-600 text-4xl sm:text-5xl mx-auto mb-4" />,
              title: "Web Development",
              desc: "Master HTML, CSS, JavaScript, React, and backend technologies to build modern web applications.",
            },
            {
              icon: <FaGraduationCap className="text-indigo-600 text-4xl sm:text-5xl mx-auto mb-4" />,
              title: "AI & Machine Learning",
              desc: "Explore Python, data science, and AI to create intelligent, real-world solutions.",
            },
            {
              icon: <FaUsers className="text-green-600 text-4xl sm:text-5xl mx-auto mb-4" />,
              title: "Team Projects",
              desc: "Collaborate on real projects, gain experience, and build a strong professional portfolio.",
            },
          ].map((course, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 text-center border hover:scale-105 transform transition duration-300"
            >
              {course.icon}
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">{course.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{course.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-gray-900">Testimonials</h2>
        <div className="flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            onClick={prevTestimonial}
            className="text-2xl px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            &#60;
          </button>
          <div className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px] bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border text-left">
            <p className="text-gray-700 mb-4 italic text-sm sm:text-base">“{testimonials[testimonialIdx].text}”</p>
            <h4 className="font-semibold text-blue-700 text-base sm:text-lg">{testimonials[testimonialIdx].name}</h4>
          </div>
          <button
            aria-label="Next testimonial"
            onClick={nextTestimonial}
            className="text-2xl px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            &#62;
          </button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white text-center px-4 sm:px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Tech Career?</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Join Nepal Coding House and unlock your potential with expert mentorship, hands-on projects, and a vibrant tech community.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>

      

    </main>
  );
}

export default Home;
