// src/pages/Blog.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import BlogImg from "../assets/blog1.png"; // your blog image

const blogPosts = [
  {
    tag: "Tailwind",
    title: "How to integrate Tailwind CSS Version 4 in React Vite Project",
    description:
      "Struggling with setting up Tailwind CSS in your Vite + React project? Don’t worry! I’ve simplified the official Tailwind CSS docs into easy, digestible steps — no fluff, just action.",
    date: "Sep 10, 2025",
    image: BlogImg,
    author: "Abhaya Bikram Shahi",
    time: "1 min read",
    path: "/blog/tailwind-vite-setup",
  },
];

export default function Blog() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Nepal Coding House Blog - Coding Tutorials & Tech News</title>
        <meta
          name="description"
          content="Stay updated with coding tutorials, tips, and tech news from Nepal Coding House. Learn Web Development, Python, AI, and more."
        />
        <meta
          name="keywords"
          content="Nepal Coding House Blog, Coding Tutorials Nepal, Web Development Blog, Python Tutorials, AI Tutorials, Tech News Nepal"
        />
        <meta name="author" content="Nepal Coding House" />

        {/* Open Graph */}
        <meta property="og:title" content="Nepal Coding House Blog" />
        <meta
          property="og:description"
          content="Latest coding tutorials, tips, and tech news from Nepal Coding House. Build your skills in Web, Python, AI, and more."
        />
        <meta property="og:image" content={BlogImg} />
        <meta property="og:url" content="https://nepalcodinghousepvltd.netlify.app/blog" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nepal Coding House Blog" />
        <meta
          name="twitter:description"
          content="Stay updated with coding tutorials, tips, and tech news from Nepal Coding House."
        />
        <meta name="twitter:image" content={BlogImg} />
      </Helmet>

      {/* Page Header */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Nepal Coding House <span className="text-blue-500">Blog</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Stay updated with the latest coding tips, tutorials, and tech news.
        </p>
      </motion.div>

      {/* Blog Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          >
            <Link to={post.path} className="flex flex-col flex-1">
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {post.tag}
                </span>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 flex-1">{post.description}</p>
                <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
                  <span>{post.author}</span>
                  <span>{post.time}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
