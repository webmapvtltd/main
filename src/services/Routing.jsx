import React from 'react'
import { HashRouter  as Router, Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Packages from '../pages/Packages';
import Templates from '../pages/Templates';
import NotFound from '../pages/NotFound';
import Contact from '../pages/Contact';

export default function Routing() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
    </div>
  )
}
