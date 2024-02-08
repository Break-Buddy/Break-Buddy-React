import BBLogo from "../assets/BBLogo1.png";

function Navbar() {
  return (
    <div className="absolute flex justify-between items-center w-full py-3 px-40">
      <div>
        <img src={BBLogo} className="w-28" alt="Break Buddy Logo" />
      </div>
      <div className="flex gap-6 items-center">
        <h3 className="text-[#007DE2]">Sign In</h3>
        <h3 className="border text-white px-4 py-2 rounded-[4px] bg-[#007DE2] hover:bg-gray-400 cursor-pointer  transition-all duration-200">
          Join for Free
        </h3>
      </div>
    </div>
  );
}

export default Navbar;
