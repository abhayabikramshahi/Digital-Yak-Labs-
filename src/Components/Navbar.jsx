import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaSearch } from 'react-icons/fa';
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/contact', label: 'Contact' }
  ];

  const getTextColor = () => {
    if (isHomePage) {
      return scrolled ? 'text-gray-700' : 'text-white';
    }
    return 'text-gray-700';
  };

  const getHoverColor = () => {
    if (isHomePage) {
      return scrolled ? 'hover:text-blue-600' : 'hover:text-gray-300';
    }
    return 'hover:text-blue-600';
  };

  const getBackgroundColor = () => {
    if (isHomePage) {
      return scrolled ? 'bg-white' : 'bg-transparent';
    }
    return 'bg-white';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${getBackgroundColor()} ${scrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar */}
      <div className={`text-sm hidden md:block transform transition-transform duration-300 ${
        isHomePage ? (scrolled ? 'bg-gray-100 text-gray-700' : 'bg-transparent text-white') : 'bg-gray-100 text-gray-700'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
          <div className="flex items-center space-x-6">
            <span className={`flex items-center transition-colors duration-200 ${getHoverColor()}`}>
              <FaPhoneAlt className="mr-1" />
              +977-9808370638
            </span>
            <span className={`flex items-center transition-colors duration-200 ${getHoverColor()}`}>
              <FaEnvelope className="mr-1" />
             nepalcodinghouse@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className={`transform hover:scale-110 transition-all duration-200 ${getHoverColor()}`}><FaTwitter /></a>
            <a href="#" className={`transform hover:scale-110 transition-all duration-200 ${getHoverColor()}`}><FaFacebookF /></a>
            <a href="#" className={`transform hover:scale-110 transition-all duration-200 ${getHoverColor()}`}><FaInstagram /></a>
            <a href="#" className={`transform hover:scale-110 transition-all duration-200 ${getHoverColor()}`}><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <img src={Logo} alt="Logo" className="h-10 w-10 mr-3" />
              <span className={`text-3xl font-extrabold transition-colors duration-300 ${
                isHomePage 
                  ? (scrolled ? 'text-black group-hover:text-blue-600' : 'text-white group-hover:text-gray-300')
                  : 'text-black group-hover:text-blue-600'
              }`}>Nepal Coding House</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-base font-medium transition-all duration-300 relative group ${
                  isHomePage
                    ? (scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-300')
                    : 'text-gray-700 hover:text-blue-600'
                } ${
                  location.pathname === link.path 
                    ? isHomePage 
                      ? (scrolled ? 'text-blue-600' : 'text-white')
                      : 'text-blue-600'
                    : ''
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  isHomePage ? (scrolled ? 'bg-blue-600' : 'bg-white') : 'bg-blue-600'
                } ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <button className={`p-2 focus:outline-none transform hover:scale-110 transition-all duration-200 ${
              isHomePage
                ? (scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-300')
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              <FaSearch className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-200 ${
                isHomePage
                  ? (scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-300')
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${
          isHomePage 
            ? (scrolled ? 'bg-white' : 'bg-black bg-opacity-90')
            : 'bg-white'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isHomePage
                  ? (scrolled 
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' 
                      : 'text-white hover:text-gray-300 hover:bg-white hover:bg-opacity-10')
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              } ${
                location.pathname === link.path 
                  ? isHomePage
                    ? (scrolled ? 'text-blue-600 bg-gray-50' : 'text-white bg-white bg-opacity-10')
                    : 'text-blue-600 bg-gray-50'
                  : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;