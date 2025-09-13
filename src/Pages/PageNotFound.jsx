// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      {/* Illustration / Image first */}

      {/* 404 Text */}
      <h1 className="mt-8 text-9xl font-extrabold text-gray-300">404</h1>

      {/* Message */}
      <h2 className="mt-4 text-3xl font-bold text-gray-800 text-center">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 text-center">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-400 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
