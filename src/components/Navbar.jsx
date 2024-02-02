function Navbar() {
  return (
    <div className="absolute flex justify-between items-center w-full py-4 px-5 border">
      <div>
        <img src="" alt="Break Buddy Logo" />
      </div>
      <div className="flex gap-6 items-center">
        <h5 className="">Sign In</h5>
        <h5 className="border px-4 py-2 rounded-lg cursor-pointer">Join for Free</h5>
      </div>
    </div>
  );
}

export default Navbar;
