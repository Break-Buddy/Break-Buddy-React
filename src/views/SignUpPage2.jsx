import React, { useState } from "react";
import {
  CapslockOnIcon,
  GoogleIcon,
  PasswordInvisibleIcon,
} from "../components/Icons";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../config/firebase";

function SignUpPage2() {
  const [userCredentials, setUserCredentials] = useState({});

  const handleCredentials = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    console.log(userCredentials);
  };

  const handleSocialSignUp = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      console.log(`Signed up with ${provider.providerId} successfully!`);
    } catch (error) {
      console.error(`Error signing up with ${provider.providerId}:`, error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#003F71] font-manrope">
      <form
        action=""
        className="flex flex-col items-center px-14 py-8 gap-5 rounded-lg bg-white"
      >
        <h2 className="font-medium text-2xl">Sign up</h2>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="pl-4 pr-4 py-1 w-80 h-9 rounded-xl bg-[#F2F2F2]"
              onChange={(e) => handleCredentials(e)}
            />
          </div>

          <div className="flex flex-col gap-1 relative">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="pl-4 pr-16 py-1 w-80 h-9 rounded-xl bg-[#F2F2F2]"
              onChange={(e) => handleCredentials(e)}
            />
            <div className="absolute right-3 bottom-2 cursor-pointer">
              <PasswordInvisibleIcon />
            </div>
            <div className="absolute right-10 bottom-[6px]">
              <CapslockOnIcon />
            </div>
          </div>

          <div className="flex flex-col gap-1 relative">
            <label htmlFor="confirmPassword" className="font-medium">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              className="pl-4 pr-16 py-1 w-80 h-9 rounded-xl bg-[#F2F2F2]"
              onChange={(e) => handleCredentials(e)}
            />
            <div className="absolute right-3 bottom-2 cursor-pointer">
              <PasswordInvisibleIcon />
            </div>
            <div className="absolute right-10 bottom-[6px]">
              <CapslockOnIcon />
            </div>
          </div>
        </div>

        <button className="bg-[#007DE2] rounded-md py-[9px] px-[16px] text-white mt-4">
          Sign up
        </button>

        <h3>Or</h3>

        <div
          onClick={() => handleSocialSignUp(new GoogleAuthProvider())}
          className="flex gap-2 border-2 rounded-full px-10 py-3 cursor-pointer"
        >
          <GoogleIcon />
          <h3 className="">Sign in with Google</h3>
        </div>

        <div className="flex gap-1">
          <h3>Already have an account?</h3>
          <a href="#" className="text-[#007DE2] underline">
            Sign In
          </a>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage2;
