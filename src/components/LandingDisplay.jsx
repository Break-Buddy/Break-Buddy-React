import headerphotoo from "../assets/headerphotoo.svg";
import { Link } from "react-router-dom";

function LandingDisplay() {
  return (
    <div className="px-2 pt-20 pb-5 flex justify-center items-center lg:px-20">
      <div className="flex flex-col lg:flex-row justify-center py-6 md:items-center gap-10 lg:gap-1">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4 w-full px-14 md:px-5 order-2 lg:order-1 lg:w-1/2">
          <div className="flex flex-col justify-start gap-2">
            <h1 className="text-[29px] md:text-[43px] font-bold">
              Reward yourself.
            </h1>
            <h1 className="text-[29px] md:text-[43px] font-bold">
              Take a social break
            </h1>
          </div>
          <h2 className=" md:w-[420px] text-base md:text-xl">
            Find an accountability buddy for taking that much needed break
          </h2>
          <Link to="/signup">
            <button className="button-1 text-base px-[18px] py-[12px]">
              Start
            </button>
          </Link>
        </div>
        {/* END LEFT SIDE */}
        {/* RIGHT SIDE */}
        <div className="px-8 h-full flex justify-center lg:order-2 lg:w-1/2">
          <img src={headerphotoo} alt="" />
        </div>
        {/* END RIGHT SIDE */}
      </div>
    </div>
  );
}

export default LandingDisplay;
