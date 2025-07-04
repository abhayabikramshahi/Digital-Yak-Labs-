import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#000', color: '#fff' }}>
    <motion.h1
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="text-7xl font-extrabold mb-4"
      style={{ color: '#3b82f6' }}
    >
      404
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-2xl mb-8 text-center"
    >
      Oops! The page you are looking for does not exist.
    </motion.p>
    <Link
      to="/"
      className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition"
    >
      Go Home
    </Link>
  </div>
);

export default NotFound; 