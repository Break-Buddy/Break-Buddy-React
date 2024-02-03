import BBLogo from "../assets/BBLogo1.png";

function Navbar() {
  return (
    <div className="absolute flex justify-between items-center w-full py-4 px-5">
      <div>
        <img src={BBLogo} className="w-28" alt="Break Buddy Logo" />
      </div>
      <div className="flex gap-6 items-center">
        <h5 className="font-semibold">Sign In</h5>
        <h5 className="border px-4 py-2 rounded-xl hover:bg-gray-400 cursor-pointer font-semibold transition-all duration-200">
          Join for Free
        </h5>
      </div>
    </div>
  );
}

export default Navbar;
