import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Aiimage from '../images/AI Conversation Illustration.jpg';

const BlogItems = () => {
  return (
    <div className="min-h-screen py-12 px-4" style={{ backgroundColor: '#000', color: '#fff' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#fff' }}>
            Revolutionizing Conversations with AI
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400 text-sm mb-2">
            <span>By Abhaya Bikram Shahi</span>
            <span>• January 16, 2025</span>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover how AI is reshaping communication across industries with intelligence and empathy.
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src={Aiimage}
            alt="AI Conversation Illustration"
            className="rounded-lg shadow-lg max-h-80 object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="text-gray-200 text-lg space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p>
            In today's rapidly evolving digital landscape, artificial intelligence (AI) is transforming the way we communicate and interact. From virtual assistants that schedule appointments to customer service chatbots that resolve issues instantly, AI has redefined conversational dynamics across various industries.
          </p>
          <p>
            These advancements are not just about efficiency—they're about creating more personalized, meaningful, and accessible interactions for everyone.
          </p>
          <p>
            One of the most significant breakthroughs in AI-driven conversations is natural language processing (NLP). This technology enables machines to understand, interpret, and respond to human language in ways that feel increasingly natural. Tools like ChatGPT exemplify this progress, allowing businesses and individuals to engage in seamless, human-like exchanges.
          </p>
          <p>
            AI-powered conversations also break barriers of accessibility. Voice recognition software allows people with disabilities to communicate effortlessly, while multilingual AI tools bridge linguistic divides.
          </p>
          <p>
            Moreover, as AI continues to advance, ethical considerations remain at the forefront. Developers and organizations are striving to balance innovation with transparency, ensuring AI systems respect user privacy and avoid biases. This commitment builds trust and paves the way for responsible AI adoption.
          </p>
          <p>
            In essence, AI is revolutionizing conversations by blending intelligence with empathy. It's reshaping the way we connect, collaborate, and communicate—bringing us closer to a future where technology enhances, rather than replaces, human interaction.
          </p>
        </motion.div>

        {/* Back to Blog List */}
        <div className="mt-12 text-center">
          <Link
            to="/blogs"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition font-semibold"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItems;
