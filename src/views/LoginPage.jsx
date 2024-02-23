import React, { useState, useEffect } from "react";
import {
  CapslockOnIcon,
  GoogleIcon,
  PasswordInvisibleIcon,
  PasswordVisibleIcon,
} from "../components/Icons";
import { useNavigate, Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";

function LoginPage() {
  const [userCredentials, setUserCredentials] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isCapslockOn, setIsCapslockOn] = useState(false);
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const [displayErrorMessage, setDisplayErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleCredentials = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    console.log(userCredentials);
  };

  const handleLoginEmail = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((res) => {
        const user = res.user;
        console.log("user signed up");
        // If user exists:
        if (auth.currentUser) {
          // Redirect to "/home"
          navigate("/home");
        }
      })
      .catch((err) => {
        const errorMessage = err.message;
        const errorCode = err.code;
        console.log(errorMessage);
        console.log(errorCode);
        setDisplayErrorMessage("Invalid Credentials");
        setIsInputInvalid(true);
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      console.log("Signed up with Google successfully!");
    } catch (error) {
      console.error("Error signing up with Google:", error);
      setDisplayErrorMessage("Error signing up with Google");
    }
  };

  console.log(auth.currentUser);

  // Capslock function
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

  return (
    <div className="flex justify-center items-center h-screen bg-[#003F71] font-manrope">
      <form className="flex flex-col items-center px-14 py-8 gap-5 rounded-lg bg-white">
        <h2 className="font-medium text-2xl">Log in</h2>

        <div className="flex flex-col gap-3 relative">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              name="email"
              type="email"
              className={`pl-4 pr-4 py-1 w-80 h-9 rounded-xl bg-[#F2F2F2] ${
                isInputInvalid && "border border-[#EF4444]"
              }`}
              onChange={(e) => handleCredentials(e)}
            />
          </div>

          <div className="flex flex-col gap-1 relative">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              className={`pl-4 pr-16 py-1 w-80 h-9 rounded-xl bg-[#F2F2F2] ${
                isInputInvalid ? "border border-[#EF4444]" : null
              }`}
              onChange={(e) => handleCredentials(e)}
            />
            <div
              className="absolute right-3 bottom-2 cursor-pointer"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <PasswordVisibleIcon />
              ) : (
                <PasswordInvisibleIcon />
              )}
            </div>
            <div className="absolute right-10 bottom-[6px]">
              {isCapslockOn ? <CapslockOnIcon /> : null}
            </div>
          </div>
          <a
            className="absolute -bottom-6 right-0 text-sm underline cursor-pointer text-[#007DE2]"
            href="#"
          >
            forgot password
          </a>
          {displayErrorMessage && (
            <div className="absolute -bottom-6 text-[#EF4444] text-sm">
              {displayErrorMessage}
            </div>
          )}
        </div>

        <button
          className="bg-[#007DE2] rounded-md py-[9px] px-[16px] text-white mt-12"
          onClick={handleLoginEmail}
        >
          Log in
        </button>

        <h3>Or</h3>

        <div
          onClick={handleGoogleSignIn}
          className="flex gap-2 border-2 rounded-full px-10 py-3 cursor-pointer"
        >
          <GoogleIcon />
          <h3 className="">Sign in with Google</h3>
        </div>

        <div className="flex gap-1">
          <h3>Don't have an account?</h3>

          <Link to="/signup">
            <a href="#" className="text-[#007DE2] underline">
              Sign up
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
