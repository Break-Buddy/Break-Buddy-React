import BBLogo from "../assets/BBLogo1.png";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

function Navbar({ handleLogIn, isLoginVisible, handleSignUp }) {
  // Function to log user out
  const handleLogout = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="absolute flex justify-between items-center w-full py-3 px-5 md:px-12 xl:px-40 bg-white">
      <div>
        <Link to="/">
          <img src={BBLogo} className="w-28" alt="Break Buddy Logo" />
        </Link>
      </div>

      {isLoginVisible ? (
        <div className="flex gap-5">
          <div>Sign Up</div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="flex gap-6 items-center">
          <h3 onClick={handleLogIn} className="text-[#007DE2] cursor-pointer">
            Log In
          </h3>
          <h3 onClick={handleSignUp} className="button-1 px-4 py-2">
            Join for Free
          </h3>
        </div>
      )}
    </div>
  );
}

export default Navbar;
