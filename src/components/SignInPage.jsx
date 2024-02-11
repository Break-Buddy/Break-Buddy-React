import React from "react";
import { FacebookIcon, GoogleIcon, WindowsIcon } from "./Icons";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth"; // Update import to include OAuthProvider
import { auth } from "../config/firebase";

function SignInPage() {
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
      const provider = new OAuthProvider('microsoft.com'); // Create OAuthProvider for Microsoft
      await signInWithPopup(auth, provider); // Sign up with Microsoft pop-up
      console.log("Signed up with Microsoft successfully!");
    } catch (error) {
      console.error("Error signing up with Microsoft:", error);
    }
  };

  return (
    <header className="flex flex-col bg-white border-2 rounded-md">
        <form className="flex flex-col items-center self-center p-11 mt-9 max-w-full text-black bg-white rounded-xl w-[527px] max-md:px-5">
        <h2 className="text-2xl leading-5">Sign in</h2>
        <label className="self-stretch mt-8 max-md:max-w-full">Email</label>
        <input
          type="email"
          className="pl-3 shrink-0 self-stretch mt-1.5 rounded-lg border border-solid border-zinc-300 h-[42px] max-md:max-w-full"
          aria-label="email-input"
        />
        <label className="self-stretch mt-9 max-md:max-w-full">Password</label>
        <input
          type="password"
          className="pl-3 shrink-0 self-stretch mt-1.5 bg-white rounded-lg border border-solid border-zinc-300 h-[42px] max-md:max-w-full"
          aria-label="password-input"
        />
        <br />
        <button className="button-1 px-4 py-2" type="submit">
          Sign Up
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
    </header>
  );
}

export default SignInPage;
