// components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    }
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-black">
            <span className="cursor-pointer" onClick={handleLogoClick}>Nepal Coding House</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-red-600 hover:underline transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with smooth animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="bg-white border-t border-gray-200 px-4 pt-4 pb-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-700 hover:text-red-600 hover:underline transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
