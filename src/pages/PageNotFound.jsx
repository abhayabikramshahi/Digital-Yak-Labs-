// src/pages/PageNotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-6 text-center">
      <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;
