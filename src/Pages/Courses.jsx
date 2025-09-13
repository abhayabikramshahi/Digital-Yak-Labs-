// src/pages/Courses.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Sample courses data
const courses = [
  {
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, and React. Build real projects.",
    path: "/courses/web-development",
  },
  {
    title: "Python Programming",
    description: "Master Python for automation, data analysis, and AI.",
    path: "/courses/python-programming",
  },
  {
    title: "NODE JS | Backend",
    description: "Build logic and functions for your websites and make them dynamic.",
    path: "/courses/node-js-backend",
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" },
};

function Courses() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Nepal Coding House - Free Coding Courses</title>
        <meta
          name="description"
          content="Explore free courses in Web Development, Python, and Node JS at Nepal Coding House. Learn practical skills and boost your tech career."
        />
        <meta
          name="keywords"
          content="Nepal Coding House Courses, Free Coding Courses Nepal, Web Development, Python Classes Nepal, Node JS Tutorial"
        />
        <meta name="author" content="Nepal Coding House" />

        {/* Open Graph */}
        <meta property="og:title" content="Nepal Coding House - Free Coding Courses" />
        <meta
          property="og:description"
          content="Join Nepal Coding House and learn Web Development, Python, and Node JS courses for free. Start building real projects today!"
        />
        <meta property="og:image" content="https://nepalcodinghousepvltd.netlify.app/assets/hero.png" />
        <meta property="og:url" content="https://nepalcodinghousepvltd.netlify.app/courses" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nepal Coding House - Free Coding Courses" />
        <meta
          name="twitter:description"
          content="Learn Web Development, Python, and Node JS for free at Nepal Coding House. Practical courses to boost your career."
        />
        <meta name="twitter:image" content="https://nepalcodinghousepvltd.netlify.app/assets/hero.png" />
      </Helmet>

      {/* Page Header */}
      <div className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Our Free Courses
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Learn modern tech skills for free and boost your career.
          </motion.p>
        </div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col justify-between cursor-pointer border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">{course.title}</h2>
                <p className="text-gray-600 mb-5">{course.description}</p>
              </div>
              <div className="flex justify-end mt-auto">
                <Link
                  to={course.path}
                  className="text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full font-medium transition-all duration-300"
                >
                  Enroll Free
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Courses;
