import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Privacypolicy from "./Pages/Privacypolicy";
import Blog from "./Pages/Blog";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/blog" element={<Blog />} />

        {/* Blog Routes */}

        {/* Fallback 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
