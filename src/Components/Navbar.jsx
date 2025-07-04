import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="transition-all duration-300 ease-in-out" style={{ backgroundColor: '#000' }}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-semibold" style={{ color: '#fff' }}>
          Nepal Coding House Private Limited
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium transition-all duration-300" style={{ color: '#fff' }}>Home</Link>
          <Link to="/about" className="font-medium transition-all duration-300" style={{ color: '#fff' }}>About</Link>
          <Link to="/services" className="font-medium transition-all duration-300" style={{ color: '#fff' }}>Services</Link>
          <Link to="/blogs" className="font-medium transition-all duration-300" style={{ color: '#fff' }}>Blogs</Link>
          <Link to="/contact" className="font-medium transition-all duration-300" style={{ color: '#fff' }}>Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          style={{ color: '#fff' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          className="md:hidden border-t shadow-lg transform transition-all duration-500 ease-in-out opacity-100 translate-y-0"
          style={{ backgroundColor: '#000', borderColor: '#222' }}
        >
          <Link to="/" className="block px-6 py-4 transition-all duration-300" style={{ color: '#fff' }}>Home</Link>
          <Link to="/about" className="block px-6 py-4 transition-all duration-300 delay-100" style={{ color: '#fff' }}>About</Link>
          <Link to="/services" className="block px-6 py-4 transition-all duration-300 delay-200" style={{ color: '#fff' }}>Services</Link>
          <Link to="/contact" className="block px-6 py-4 transition-all duration-300 delay-300" style={{ color: '#fff' }}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
