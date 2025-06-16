import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import Faq from "./pages/FAQ";
import Blog from "./pages/Blog";
import Approach from "./pages/Approach";
import BlogBody from "./pages/BlogBody";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogBody />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<Faq />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
