import React, { useState } from "react";
import { Menu, X, Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div className="bg-gray-100 text-sm text-gray-700 border-b border-gray-200 py-2 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Mail size={16} />
              <span>abhayabikramshahiofficial@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={16} />
              <span>9808370638</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Nepal Coding House Pvt. Ltd.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/blog", label: "Blogs" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-gray-700 font-medium relative group transition"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{ backdropFilter: "blur(3px)", paddingTop: "100px" }}
          onClick={() => setIsOpen(false)}
        >
          <nav
            className={`flex flex-col items-center justify-center h-full space-y-8 transform transition-transform duration-500 ${
              isOpen ? "translate-y-0" : "-translate-y-10"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/blog", label: "Blogs" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-2xl text-gray-800 font-semibold relative group transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
