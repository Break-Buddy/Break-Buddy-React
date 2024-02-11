import React from "react";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./views/Dashboard";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage"; // Corrected import name

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Dashboard />} /> {/* Route for Dashboard */}
        <Route path="/signin" element={<SignInPage />} /> {/* Route for SignInPage */}
        <Route path="/signup" element={<SignUpPage />} /> {/* Route for SignUpPage */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

