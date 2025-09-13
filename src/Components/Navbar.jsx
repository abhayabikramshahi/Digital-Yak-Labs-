// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Courses", path: "/courses" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.4 },
    }),
    exit: { opacity: 0, y: 20 },
  };

  return (
    <nav className="bg-white shadow-sm w-full sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:py-4">
        {/* Logo */}
        <motion.div
          className="text-lg md:text-xl font-bold text-gray-900"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nepal Coding House Pvt. Ltd.
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-base font-medium">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={item.path}
                className="relative text-gray-800 transition-colors duration-200
                           after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                           after:bg-blue-500 after:transition-all after:duration-300 
                           hover:text-blue-600 hover:after:w-full"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 z-[60]"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </motion.button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    to={item.path}
                    className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
