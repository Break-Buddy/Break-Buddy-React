import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./views/Dashboard";
import { auth } from "./config/firebase";
import SignUpPage2 from "./views/SignUpPage2";
import LoginPage from "./views/LoginPage";
import AccountCreation2 from "./views/AccountCreation2";

function App() {
  const isUserAuthenticated = auth.currentUser;

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="signup" element={<SignUpPage2 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createaccount" element={<AccountCreation2 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
