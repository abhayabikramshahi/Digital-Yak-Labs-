// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Nepal Coding House</h2>
          <p className="text-gray-400">
            Building next-gen software solutions for businesses and startups in Nepal and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-gray-400">Kathmandu, Nepal</p>
          <p className="text-gray-400">Email: info@nepalcodinghouse.com</p>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Nepal Coding House. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
