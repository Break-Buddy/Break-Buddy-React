import React from "react";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
