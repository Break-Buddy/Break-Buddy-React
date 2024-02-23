import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./views/Dashboard";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import AccountCreation from "./components/AccountCreation";
import { auth } from "./config/firebase";
import SignUpPage2 from "./views/SignUpPage2";
import LoginPage from "./views/LoginPage";

function App() {
  const handleLogIn = () => {
    setIsLoginVisible(true);
    setIsSignUpVisible(false);
  };

  const handleSignUp = () => {
    setIsSignUpVisible(true);
    setIsLoginVisible(false);
  };

  const handleCloseModal = () => {
    setIsSignUpVisible(false);
    setIsLoginVisible(false);
    setIsCreateAccountVisible(false);
  };

  const handleCreateAccount = () => {
    setIsSignUpVisible(false);
    setIsCreateAccountVisible(true);
  };

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isCreateAccountVisible, setIsCreateAccountVisible] = useState(false);

  const isUserAuthenticated = auth.currentUser;
  console.log(isUserAuthenticated);

  // Function to check if the user is logged in
  const handleUserLoggedIn = (e) => {
    e.preventDefault();
    console.log(auth);
  };

  // useEffect to handle overflow property
  useEffect(() => {
    // Update body overflow property when isLoginVisible changes
    document.body.style.overflow =
      isLoginVisible || isSignUpVisible || isCreateAccountVisible
        ? "hidden"
        : "auto";

    // Cleanup function to reset overflow property when component unmounts or isLoginVisible changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoginVisible, isSignUpVisible, isCreateAccountVisible]);

  return (
    <div className="overflow-hidden">
      {isLoginVisible ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-2xl">
          <SignInPage
            handleCloseModal={handleCloseModal}
            setIsLoginVisible={setIsLoginVisible}
          />
        </div>
      ) : isSignUpVisible ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-2xl">
          <SignUpPage
            handleCloseModal={handleCloseModal}
            handleCreateAccount={handleCreateAccount}
            setIsSignUpVisible={setIsSignUpVisible}
            setIsCreateAccountVisible={setIsCreateAccountVisible}
          />
        </div>
      ) : isCreateAccountVisible ? (
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl">
          <AccountCreation
            handleCloseModal={handleCloseModal}
            setIsCreateAccountVisible={setIsCreateAccountVisible}
          />
        </div>
      ) : null}

      <div
        className={`h-screen overflow-y-scroll opacity-${
          isLoginVisible || isSignUpVisible || isCreateAccountVisible ? 30 : 100
        }`}
      >
        <Navbar handleLogIn={handleLogIn} handleSignUp={handleSignUp} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="signup" element={<SignUpPage2 />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
