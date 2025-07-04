import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
  // Blog data with initial view count
  const [views, setViews] = useState(1500); // Initial view count
  const blog = {
    id: 1,
    title: "Exploring the Power of ChatGPT: Revolutionizing Conversations with AI",
    image: "../uploads/ai-2025.png",
    link: "../blog/Revolutionizing-Conversations-with-AI",
    author: "Abhaya Bikram Shahi",
    date: "January 16, 2025",
  };

  // Increment the views when the blog is visited (simulate real-time views)
  useEffect(() => {
    setViews((prevViews) => prevViews + 1); // Increment view on page load
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000', color: '#fff' }}>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Blog Title */}
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {blog.title}
          </h2>
          
          {/* Blog Content */}
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="text-lg font-semibold text-gray-800">{blog.title}</div>
              {/* Author and Date */}
              <div className="mt-2 text-sm text-gray-500 flex justify-between items-center">
                <span className="italic">By {blog.author}</span>
                <span>{blog.date}</span>
              </div>

              <div className="mt-4 text-sm text-gray-500">
                {/* Real-Time View Count */}
                <span>{views} Views</span>
              </div>

              {/* Blog Content */}
              <div className="mt-4 text-gray-700">
                <p>
                  We created this blog to explore the fascinating world of
                  ChatGPT and how it revolutionizes conversations with AI. This
                  post covers the many applications of ChatGPT, from assisting in
                  daily tasks to enhancing productivity and creativity.
                </p>
              </div>

              {/* Link to the actual blog page */}
              <div className="mt-6">
                <Link
                  to={blog.link}
                  className="text-lg font-semibold text-purple-600 hover:text-purple-800 transition-colors duration-300 block"
                >
                  Continue Reading
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
