import React from 'react';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white text-gray-700 shadow-md mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Nepal Coding House</h2>
          <p className="text-gray-600">
            We are dedicated to teaching coding, web development, and modern tech skills to students across Nepal. Learn, create, and grow with us!
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/courses" className="hover:text-blue-500">Courses</a></li>
            <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
        
        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Email: <a href="mailto:info@nepalcodinghouse.com" className="hover:text-blue-500">nepalcodinghouse@gmail.com</a></p>
          <p>Phone: <a href="tel:+9779808370638" className="hover:text-blue-500">+977-9808370638</a></p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="hover:text-blue-500"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-500"><Twitter size={20} /></a>
            <a href="#" className="hover:text-blue-500"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-blue-500"><Github size={20} /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-200 mt-6 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Nepal Coding House. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
