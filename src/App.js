import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Realisations from './pages/Realisations';
import Service from './pages/Service';
import Mentions from './pages/Mentions';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="/service" element={<Service />} />
      <Route path="/Mentions" element={<Mentions/>} />
    </Routes>
    </Router>
  );
};

export default App;