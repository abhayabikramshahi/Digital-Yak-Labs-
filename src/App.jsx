import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Courses from "./pages/Courses.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

// Courses
import WebDev from "./courses/WebDev.jsx";
import Python from "./courses/Python.jsx";
import NodeJs from "./courses/NodeJs.jsx";

// Blog
import Tailwind from "./blog/Tailwind.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/tailwind-vite-setup" element={<Tailwind />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/web-development" element={<WebDev />} />
        <Route path="/courses/python-programming" element={<Python />} />
        <Route path="/courses/node-js-backend" element={<NodeJs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
