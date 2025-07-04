import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogImage from '../uploads/ai-2025.png';

const blogs = [
  {
    id: 1,
    title: "Exploring the Power of ChatGPT: Revolutionizing Conversations with AI",
    image: blogImage,
    link: "/blog/Revolutionizing-Conversations-with-AI",
    author: "Abhaya Bikram Shahi",
    date: "January 16, 2025",
    excerpt:
      "Discover how ChatGPT and AI are transforming conversations, productivity, and creativity across industries.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

function Blogs() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#000", color: "#fff" }}>
      <section className="py-16 px-4 lg:px-0">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Blog
        </motion.h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              className="bg-[#111] rounded-2xl shadow-lg overflow-hidden border border-[#222] flex flex-col"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 * idx }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px #3b82f6" }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#fff" }}>{blog.title}</h3>
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <span className="italic mr-2">By {blog.author}</span>
                  <span>• {blog.date}</span>
                </div>
                <p className="text-gray-300 mb-4 flex-1">{blog.excerpt}</p>
                <Link
                  to={blog.link}
                  className="inline-block mt-auto px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition font-semibold"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blogs;
