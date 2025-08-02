import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-200 bg-white text-sm text-gray-700">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {/* About Section */}
        <div className="pb-6 md:pb-0 md:pr-8 flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-2 text-gray-900 tracking-tight">
            Nepal Coding House Pvt. Ltd.
          </h2>
          <p className="text-gray-600 max-w-xs text-center md:text-left leading-relaxed">
            Innovative digital solutions for modern businesses. Empowering your
            ideas with technology and creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div className="py-6 md:py-0 md:px-8 flex flex-col items-center">
          <h3 className="text-md font-semibold mb-2 text-gray-900 tracking-tight">
            Quick Links
          </h3>
          <nav className="flex flex-col space-y-1 items-center">
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
            <Link to="/blogs" className="hover:text-blue-600 transition">
              Blogs
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
            <Link
              to="/privacypolicy"
              className="hover:text-blue-600 transition"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>

        {/* Social Links */}
        <div className="pt-6 md:pt-0 md:pl-8 flex flex-col items-center md:items-end">
          <h3 className="text-md font-semibold mb-2 text-gray-900 tracking-tight">
            Connect with us
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-600 hover:text-blue-400 transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-blue-700 transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 mt-8 text-xs">
        <p>
          &copy; {new Date().getFullYear()} Nepal Coding House Pvt. Ltd. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
