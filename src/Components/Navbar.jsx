import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="transition-all duration-300 ease-in-out shadow-lg border-b border-[#222] sticky top-0 z-50"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight font-sans"
          style={{ color: "#fff", letterSpacing: "-1px" }}
        >
          Nepal Coding House Private Limited
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/blogs", label: "Blogs" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-medium transition-all duration-300 relative group"
              style={{ color: "#fff" }}
            >
              {item.label}
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"
                style={{ transition: "width 0.3s" }}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          style={{ color: "#fff" }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-40 transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backdropFilter: "blur(2px)" }}
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
            { to: "/blogs", label: "Blogs" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-2xl font-semibold transition-all duration-300 relative group"
              style={{ color: "#fff" }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"
                style={{ transition: "width 0.3s" }}
              ></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
