import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="py-8 border-t border-[#222] mt-12 text-sm bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start divide-y md:divide-y-0 md:divide-x divide-[#222]">
        {/* About Section */}
        <div className="pb-6 md:pb-0 md:pr-8 flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-2 tracking-tight">Nepal Coding House Private Limited</h2>
          <p className="text-gray-400 max-w-xs text-center md:text-left">
            Innovative digital solutions for modern businesses. Empowering your ideas with technology and creativity.
          </p>
        </div>
        {/* Quick Links */}
        <div className="py-6 md:py-0 md:px-8 flex flex-col items-center">
          <h3 className="text-md font-semibold mb-2 tracking-tight">Quick Links</h3>
          <nav className="flex flex-col space-y-1 items-center">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/services" className="hover:text-blue-400 transition">Services</Link>
            <Link to="/blogs" className="hover:text-blue-400 transition">Blogs</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            <Link to="/privacypolicy" className="hover:text-blue-400 transition">Privacy Policy</Link>
          </nav>
        </div>
        {/* Social Links */}
        <div className="pt-6 md:pt-0 md:pl-8 flex flex-col items-center md:items-end">
          <h3 className="text-md font-semibold mb-2 tracking-tight">Connect</h3>
          <div className="flex space-x-4">
            {/* Replace # with your social links and add real icons if desired */}
            <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition">FB</a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">TW</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition">IN</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        <p>&copy; {new Date().getFullYear()} Nepal Coding House Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;