import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";
import Courses from "./pages/Courses";
import WebDev from "./Courses/WebDev";
import Python from "./Courses/Python";
import NodeJs from "./Courses/NodeJs";

// Blog
import Tailwind from "./blog/Tailwind";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/courses/web-development" element={<WebDev />} />
        <Route path="/courses/python-programming" element={<Python />} />
        <Route path="/courses/node-js-backend" element={<NodeJs />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog/tailwind-vite-setup" element={<Tailwind />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
