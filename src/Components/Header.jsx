// src/components/Header.jsx
import React from "react";
import { Phone, Mail, Facebook, Instagram, X as Twitter } from "lucide-react";

function Header() {
  return (
    <header className="bg-white text-gray-800 w-full text-sm border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        
        {/* Contact Info */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-blue-500" />
            <span className="text-sm">+977 980-8370638</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-blue-500" />
            <span className="text-sm">nepalcodinghouse@gmail.com</span>
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-500 transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
