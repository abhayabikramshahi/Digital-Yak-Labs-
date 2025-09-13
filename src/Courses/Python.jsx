// src/pages/Python.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WebDevImg from "../assets/python.png"; // your image

function Python() {
  const [showModal, setShowModal] = useState(false);

  const courseModules = [
    { title: "Python Basics", desc: "Variables, data types, loops, and functions." },
    { title: "Object-Oriented Programming", desc: "Learn OOP for real-world projects." },
    { title: "Data Analysis", desc: "Work with Pandas and NumPy for data manipulation." },
    { title: "Web Development", desc: "Build apps using Flask or Django." },
    { title: "Automation & Scripting", desc: "Save time with Python scripts." },
    { title: "Practical Projects", desc: "Strengthen skills with hands-on projects." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* LHS: Image on Top + Title + Description */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start gap-6">
          <motion.img
            src={WebDevImg}
            alt="Python Illustration"
            className="w-full max-w-sm rounded-xl shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-4 md:mt-0 text-center md:text-left">
            Python Programming
          </h1>

          <ul className="text-gray-700 text-lg sm:text-xl list-disc list-inside space-y-2 text-center md:text-left">
            <li>Master the world’s most versatile programming language with Nepal Coding House.</li>
            <li>Dive into Python and learn to build everything from scripts to complex apps.</li>
            <li>Python basics: variables, data types, loops, and functions.</li>
            <li>Object-oriented programming (OOP) for real-world projects.</li>
            <li>Data analysis with Pandas and NumPy.</li>
            <li>Web development using Flask or Django.</li>
            <li>Automation and scripting to save time on daily tasks.</li>
            <li>Practical projects to strengthen your coding skills.</li>
          </ul>

          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 mt-4"
          >
            ENROLL
          </button>
        </div>

        {/* RHS: Course Modules */}
        <motion.div className="md:w-1/2 grid grid-cols-1 gap-6">
          {courseModules.map((module, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
              <p className="text-gray-600">{module.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-semibold mb-4">Call Me</h2>
              <p className="text-gray-700 mb-6">You can reach me directly at:</p>
              <a
                href="tel:+9779808370638"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 inline-block"
              >
                +977 9808370638
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Python;
