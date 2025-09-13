// src/pages/WebDevelopment.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WebDevImg from "../assets/wdb.avif"; // make sure the image exists

function WebDevelopment() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Hero Section */}
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Web Development
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl mb-6">
            Learn the essential skills to become a full-stack web developer. Start with HTML, CSS, and JavaScript, then progress to React and build real-world projects.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
          >
            Call Me
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <motion.img
            src={WebDevImg}
            alt="Web Development Illustration"
            className="w-full max-w-sm rounded-xl shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* Course Modules Section */}
      <motion.div
        className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {[
          { title: "HTML & CSS", desc: "Learn structure and styling for websites." },
          { title: "JavaScript", desc: "Add interactivity and logic to your apps." },
          { title: "React.js", desc: "Build modern, component-based applications." },
        ].map((module, index) => (
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

      {/* Modal Popup */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm"
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

export default WebDevelopment;
