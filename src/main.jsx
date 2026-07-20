import { BrowserRouter, Routes, Route } from 'react-router';
import { createRoot } from 'react-dom/client';
import Home from "./views/Home/Home";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact";
import NotFound from "./Views/NotFound/NotFound";
import Navbar from "./../../Components/Navbar/Navbar";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  
)
