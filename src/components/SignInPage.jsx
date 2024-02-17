import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CloseButton, FacebookIcon, GoogleIcon, WindowsIcon } from "./Icons";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
} from "firebase/auth"; // Update import to include OAuthProvider
import { auth } from "../config/firebase";

function SignInPage({ handleCloseModal, setIsLoginVisible }) {
  // User email and password
  const [loginCredentials, setLoginCredentials] = useState({});
  const navigate = useNavigate();

  const handleLoginCredentials = (e) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });
    // console.log(loginCredentials);
  };

  // Function to login user with email and password
  const handleLogin = (e) => {
    e.preventDefault();
    // Initialize signInWithEmailAndPassword function
    signInWithEmailAndPassword(
      auth,
      loginCredentials.email,
      loginCredentials.password
    )
      .then((res) => {
        const user = res.user;
        console.log(user);
        console.log("user signed up");
        setIsLoginVisible(false);
        if (auth.currentUser) {
          // Redirect to "/home"
          navigate("/home");
        }
      })
      .catch((err) => {
        const errorMessage = err.message;
        const errorCode = err.code;
        console.log(errorMessage);
      });
  };
  console.log(auth.currentUser);
  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      console.log("Signed up with Google successfully!");
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  const handleFacebookSignUp = async () => {
    try {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
      console.log("Signed up with Facebook successfully!");
    } catch (error) {
      console.error("Error signing up with Facebook:", error);
    }
  };

  const handleMicrosoftSignUp = async () => {
    try {
      const provider = new OAuthProvider("microsoft.com"); // Create OAuthProvider for Microsoft
      await signInWithPopup(auth, provider); // Sign up with Microsoft pop-up
      console.log("Signed up with Microsoft successfully!");
    } catch (error) {
      console.error("Error signing up with Microsoft:", error);
    }
  };

  return (
    <header className="flex flex-col bg-white border-2 rounded-md relative">
      <div
        onClick={handleCloseModal}
        className="absolute right-5 top-5 cursor-pointer"
      >
        <CloseButton />
      </div>
      <form className="flex flex-col items-center self-center p-11 pb-5 mt-4 max-w-full text-black bg-white rounded-xl w-[527px] max-md:px-5">
        {/* EMAIL */}
        <div className="flex flex-col w-full">
          <h2 className="text-2xl leading-5 font-medium self-center">Log in</h2>
          <label className="self-stretch mt-8 max-md:max-w-full font-medium">
            Email
          </label>
          <input
            onChange={(e) => {
              handleLoginCredentials(e);
            }}
            name="email"
            type="email"
            className="pl-3 shrink-0 self-stretch mt-1.5 rounded-xl h-[42px] focus:outline-none max-md:max-w-full bg-[#F2F2F2] focus:bg-[#F2F2F2]"
          />
        </div>
        {/* END EMAIL */}
        {/* PASSWORD */}
        <div className="flex flex-col w-full">
          <label className="self-stretch mt-9 max-md:max-w-full font-medium">
            Password
          </label>
          <input
            onChange={(e) => {
              handleLoginCredentials(e);
            }}
            name="password"
            type="password"
            className="pl-3 shrink-0 self-stretch mt-1.5 rounded-xl bg-[#F2F2F2] focus:bg-[#F2F2F2] h-[42px] max-md:max-w-full focus:outline-none"
            aria-label="password-input"
          />
        </div>
        {/* END PASSWORD */}
        <div className="text-[#007DE2] my-2 underline flex justify-end w-full">
          <a href="#">forgot password</a>
        </div>

        <button
          className="button-1 px-4 py-2 mt-3"
          type="submit"
          onClick={(e) => handleLogin(e)}
        >
          Log In
        </button>
        <div className="mt-7">Or</div>
        <div
          className="flex gap-4 justify-center px-4 py-4 mt-7 max-w-full tracking-tight rounded-full border-2 border-solid border-slate-200 leading-[150%] text-slate-800 w-[280px] max-md:px-5 cursor-pointer"
          onClick={handleGoogleSignUp}
        >
          <GoogleIcon />
          <div>Continue with Google</div>
        </div>
        <div
          className="flex gap-4 justify-center px-4 py-4 mt-7 max-w-full tracking-tight rounded-full border-2 border-solid border-slate-200 leading-[150%] text-slate-800 w-[280px] max-md:px-5 cursor-pointer"
          onClick={handleFacebookSignUp}
        >
          <FacebookIcon />
          <div>Sign up with Facebook</div>
        </div>
        <div
          className="flex gap-4 justify-center px-4 py-4 mt-7 max-w-full tracking-tight rounded-full border-2 border-solid border-slate-200 leading-[150%] text-slate-800 w-[280px] max-md:px-5 cursor-pointer"
          onClick={handleMicrosoftSignUp}
        >
          <WindowsIcon />
          <div>Sign up with Microsoft</div>
        </div>
      </form>
      <div className="flex gap-2 justify-center mt-3 mb-12">
        <h3>Don't have an account?</h3>
        <h3 className="text-[#007DE2] underline cursor-pointer">Sign Up</h3>
      </div>
    </header>
  );
}

export default SignInPage;
