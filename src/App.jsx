import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Services from "./Pages/Services"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Blogs from "./Pages/blogs"
import BlogItems from "./Blog/Revolutionizing-Conversations-with-AI"
import Privacypolicy from "./Pages/Privacypolicy"
import NotFound from "./Pages/NotFound"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/blog/Revolutionizing-Conversations-with-AI" element={<BlogItems />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
