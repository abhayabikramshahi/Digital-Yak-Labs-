// src/pages/NodeJs.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NodeImg from "../assets/nodejs.png"; // replace with your Node.js image

function NodeJs() {
  const [showModal, setShowModal] = useState(false);

  const courseModules = [
    { title: "Node.js Basics", desc: "Learn about Node.js runtime, setup, and environment." },
    { title: "Modules & NPM", desc: "Understand Node modules, require, and npm packages." },
    { title: "File System & Events", desc: "Read/write files and work with event-driven architecture." },
    { title: "Express.js", desc: "Build scalable backend applications using Express." },
    { title: "APIs & REST", desc: "Create RESTful APIs for web and mobile apps." },
    { title: "Database Integration", desc: "Connect Node.js with MongoDB and other databases." },
    { title: "Authentication & Security", desc: "Implement login, JWT, and secure your apps." },
    { title: "Real Projects", desc: "Build real-world projects to strengthen your skills." },
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
            src={NodeImg}
            alt="Node.js Illustration"
            className="w-full max-w-sm rounded-xl shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-4 md:mt-0 text-center md:text-left">
            Node.js Development
          </h1>

          <ul className="text-gray-700 text-lg sm:text-xl list-disc list-inside space-y-2 text-center md:text-left">
            <li>Master server-side JavaScript with Node.js at Nepal Coding House.</li>
            <li>Learn to build fast, scalable backend applications.</li>
            <li>Understand Node.js basics, modules, and npm packages.</li>
            <li>Work with Express.js to build APIs and REST services.</li>
            <li>Integrate with MongoDB and other databases.</li>
            <li>Implement authentication, JWT, and security best practices.</li>
            <li>Hands-on real-world projects to solidify your skills.</li>
          </ul>

          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 mt-4"
          >
            Call Me
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

export default NodeJs;
