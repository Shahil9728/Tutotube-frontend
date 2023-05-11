import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About'
import Pricing from './Components/Pricing'
import Contact from './Components/Contact'
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
