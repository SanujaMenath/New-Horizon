import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={< About/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact_us" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
