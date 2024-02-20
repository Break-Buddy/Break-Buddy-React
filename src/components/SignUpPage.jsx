import React, { useState, useEffect } from "react";
import {
  CapslockOnIcon,
  CloseButton,
  FacebookIcon,
  GoogleIcon,
  PasswordInvisibleIcon,
  PasswordVisibleIcon,
  WindowsIcon,
} from "./Icons";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import { auth } from "../config/firebase";

function SignUpPage({
  handleCloseModal,
  setIsCreateAccountVisible,
  setIsSignUpVisible,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isCapslockOn, setIsCapslockOn] = useState(false);
  const [userCredentials, setUserCredentials] = useState({});
  const [passwordDontMatch, setPasswordDontMatch] = useState(false);
  const [accountAlreadyExist, setAccountAlreadyExist] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const capsLockEnabled =
        event.getModifierState && event.getModifierState("CapsLock");
      setIsCapslockOn(capsLockEnabled);
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleCredentials = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (userCredentials.password === userCredentials.confirmPassword) {
      setPasswordDontMatch(false);

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          userCredentials.email,
          userCredentials.password
        );

        const user = userCredential.user;
        console.log(user.displayName);
        setIsSignUpVisible(false);
        setIsCreateAccountVisible(true);
      } catch (error) {
        const errorMessage = error.message;
        const errorCode = error.code;

        if (errorCode === "auth/email-already-in-use") {
          setAccountAlreadyExist(true);
        }

        console.error(errorCode, errorMessage);
      }
    } else {
      setPasswordDontMatch(true);
      console.log("Password did not match");
    }
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
    <header className="flex flex-col bg-white border-2 rounded-md relative">
      <div
        onClick={handleCloseModal}
        className="absolute right-5 top-5 cursor-pointer"
      >
        <CloseButton />
      </div>
      <form className="flex flex-col items-center self-center p-11 pb-5 mt-4 max-w-full text-black bg-white rounded-xl w-[527px] max-md:px-5">
        <div className="flex flex-col w-full">
          <h2 className="text-2xl leading-5 font-medium self-center">
            Sign Up
          </h2>
          <label className="self-stretch mt-8 max-md:max-w-full font-medium">
            Email
          </label>
          <input
            onChange={(e) => handleCredentials(e)}
            type="email"
            name="email"
            className={`pl-3 shrink-0 self-stretch mt-1.5 rounded-xl h-[42px] focus:outline-none max-md:max-w-full bg-[#F2F2F2] focus:bg-[#F2F2F2] ${
              accountAlreadyExist && "border border-[#EF4444]"
            } `}
          />
        </div>
        <div className="flex flex-col w-full relative">
          <label className="self-stretch mt-9 max-md:max-w-full font-medium">
            Password
          </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            onChange={(e) => handleCredentials(e)}
            name="password"
            className={`pl-3 shrink-0 self-stretch mt-1.5 rounded-xl bg-[#F2F2F2] focus:bg-[#F2F2F2] h-[42px] max-md:max-w-full focus:outline-none ${
              passwordDontMatch ? "border border-[#EF4444]" : null
            }`}
          />
          <div
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute bottom-[9px] right-6 cursor-pointer"
          >
            {isPasswordVisible ? (
              <PasswordVisibleIcon />
            ) : (
              <PasswordInvisibleIcon />
            )}
          </div>
          <div
            onClick={() => setIsCapslockOn(!isCapslockOn)}
            className="absolute bottom-[8px] right-14"
          >
            {isCapslockOn && <CapslockOnIcon />}
          </div>
        </div>
        <div className="flex flex-col w-full relative">
          <label className="self-stretch mt-9 max-md:max-w-full font-medium">
            Confirm Password
          </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            onChange={(e) => handleCredentials(e)}
            name="confirmPassword"
            className={`pl-3 pr-14 shrink-0 self-stretch mt-1.5 rounded-xl bg-[#F2F2F2] focus:bg-[#F2F2F2] h-[42px] max-md:max-w-full focus:outline-none ${
              passwordDontMatch ? "border border-[#EF4444]" : null
            }`}
          />
          <div
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute bottom-[9px] right-6 cursor-pointer"
          >
            {isPasswordVisible ? (
              <PasswordVisibleIcon />
            ) : (
              <PasswordInvisibleIcon />
            )}
          </div>
          <div
            onClick={() => setIsCapslockOn(!isCapslockOn)}
            className="absolute bottom-[8px] right-14"
          >
            {isCapslockOn && <CapslockOnIcon />}
          </div>
        </div>
        {accountAlreadyExist && (
          <div className="text-[#EF4444]">That account is already in use</div>
        )}
        {passwordDontMatch && (
          <div className="text-[#EF4444]">
            Oops! Seems those passwords don’t match
          </div>
        )}
        <button
          onClick={(e) => handleSignup(e)}
          className="button-1 px-4 py-2 mt-7"
          type="submit"
        >
          Sign Up
        </button>
        <div className="mt-7">Or</div>
        <div
          className="flex gap-4 justify-center px-4 py-4 mt-7 max-w-full tracking-tight rounded-full border-2 border-solid border-slate-200 leading-[150%] text-slate-800 w-[280px] max-md:px-5 cursor-pointer"
          onClick={() => handleSocialSignUp(new GoogleAuthProvider())}
        >
          <GoogleIcon />
          <div>Continue with Google</div>
        </div>
        <div
          className="flex gap-4 justify-center px-4 py-4 mt-7 max-w-full tracking-tight rounded-full border-2 border-solid border-slate-200 leading-[150%] text-slate-800 w-[280px] max-md:px-5 cursor-pointer"
          onClick={() => handleSocialSignUp(new FacebookAuthProvider())}
        >
          <FacebookIcon />
          <div>Sign up with Facebook</div>
        </div>
        <div
          className="flex gap-4 justify-center px-4 py-4 mt-7 max-w-full tracking-tight rounded-full border-2 border-solid border-slate-200 leading-[150%] text-slate-800 w-[280px] max-md:px-5 cursor-pointer"
          onClick={() => handleSocialSignUp(new OAuthProvider("microsoft.com"))}
        >
          <WindowsIcon />
          <div>Sign up with Microsoft</div>
        </div>
      </form>
      <div className="flex gap-2 justify-center mt-3 mb-12">
        <h3>Already have an account?</h3>
        <h3 className="text-[#007DE2] underline cursor-pointer">Log In</h3>
      </div>
    </header>
  );
}

export default SignUpPage;
