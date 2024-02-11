import landingImage1 from "../assets/landingImage1.png";
import landingImage2 from "../assets/landingImage2.png";
import headerphotoo from "../assets/headerphotoo.svg";

function LandingDisplay() {
  return (
    <div className="px-5 md:px-16 pt-20 flex flex-col justify-center items-center">
      <div className="flex flex-col-reverse md:flex-row justify-center md:px-80 py-6 md:items-center gap-2">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4 px-14 md:px-0 lg:w-1/2">
          <div className="flex flex-col justify-start gap-2">
            <h1 className="text-[26px] lg:text-5xl font-bold">
              Reward yourself.
            </h1>
            <h1 className="text-[26px] lg:text-5xl font-bold">
              Take a social break
            </h1>
          </div>
          <h2 className=" md:w-[420px] text-base md:text-2xl">
            Find an accountability buddy for taking that much needed break
          </h2>
          <button className="button-1 text-base px-[18px] py-[12px]">
            Start
          </button>
        </div>
        {/* END LEFT SIDE */}
        {/* RIGHT SIDE */}
        <div className="px-8 w-full md:px-0 lg:w-1/2 h-full flex justify-center px-">
          <img src={headerphotoo} alt="" />
        </div>
        {/* END RIGHT SIDE */}
        
      </div>
    </div>
  );
}

export default LandingDisplay;
