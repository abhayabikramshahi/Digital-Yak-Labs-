// src/pages/Home.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";
import HeroImg from "../assets/hero.jpg";

function Home() {
  const testimonials = [
    {
      text: "The mentors here really helped me become a full-stack developer in 6 months!",
      name: "Sita Sharma",
    },
    {
      text: "Amazing coding environment and practical projects. Highly recommend!",
      name: "Ramesh Thapa",
    },
    {
      text: "Nepal Coding House is the best place to start your tech career.",
      name: "Anjali KC",
    },
  ];

  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const prevTestimonial = () =>
    setTestimonialIdx((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  const nextTestimonial = () =>
    setTestimonialIdx((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <main className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 gap-12 overflow-hidden">
        {/* Animated Background Accent */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />

        {/* Text Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 text-center md:text-left z-10"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
          >
            Nepal Coding House Pvt. Ltd
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0"
          >
            We provide innovative digital solutions, web development, and
            AI-powered products to empower your business.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="/services"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Explore Services
          </motion.a>
        </motion.div>

        {/* Hero Image with floating animation */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <motion.img
            src={HeroImg}
            alt="Nepal Coding House Hero"
            className="w-3/4 sm:w-2/3 md:w-full max-w-md rounded-2xl shadow-xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            About Us
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Nepal Coding House is a premier software and education company
            dedicated to teaching coding, software development, and digital
            skills. Our mission is to empower Nepali youth to build real-world
            projects and launch successful tech careers.
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Hands-on learning with real projects</li>
            <li>Mentorship from industry professionals</li>
            <li>Collaborative, innovative environment</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={HeroImg}
            alt="Nepal Coding House"
            className="w-3/4 sm:w-2/3 md:w-full max-w-md rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Courses
        </h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[
            {
              icon: (
                <FaLaptopCode className="text-blue-600 text-5xl mx-auto mb-4" />
              ),
              title: "Web Development",
              desc: "Master HTML, CSS, JavaScript, React, and backend technologies.",
            },
            {
              icon: (
                <FaGraduationCap className="text-indigo-600 text-5xl mx-auto mb-4" />
              ),
              title: "AI & Machine Learning",
              desc: "Explore Python, data science, and AI to create intelligent solutions.",
            },
            {
              icon: (
                <FaUsers className="text-green-600 text-5xl mx-auto mb-4" />
              ),
              title: "Team Projects",
              desc: "Collaborate on real projects and build a strong professional portfolio.",
            },
          ].map((course, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white shadow-xl rounded-2xl border p-8 text-center hover:scale-105 transform transition duration-300"
            >
              {course.icon}
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-700">{course.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Testimonials
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6"
        >
          <button
            onClick={prevTestimonial}
            className="text-2xl px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            &#60;
          </button>
          <div className="min-w-[280px] bg-white p-8 rounded-2xl shadow-xl border text-left">
            <p className="text-gray-700 mb-4 italic">
              “{testimonials[testimonialIdx].text}”
            </p>
            <h4 className="font-semibold text-blue-700">
              {testimonials[testimonialIdx].name}
            </h4>
          </div>
          <button
            onClick={nextTestimonial}
            className="text-2xl px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            &#62;
          </button>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white text-center px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to Transform Your Tech Career?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto"
        >
          Join Nepal Coding House and unlock your potential with expert
          mentorship, hands-on projects, and a vibrant tech community.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition"
        >
          Get Started
        </motion.a>
      </section>
    </main>
  );
}

export default Home;
