import landingImage1 from "../assets/landingImage1.png";
import landingImage2 from "../assets/landingImage2.png";
import headerphotoo from "../assets/headerphotoo.svg";

function LandingDisplay() {
  return (
    <div className="px-0 md:px-16 pt-20 flex flex-col justify-center">
      <div className="flex flex-col-reverse md:flex-row justify-center md:px-80 py-6 items-center gap-2">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4 px-20 md:px-0 lg:w-1/2">
          <div className="flex flex-col justify-start gap-2">
            <h1 className="text-3xl lg:text-5xl font-bold">Reward yourself.</h1>
            <h1 className="text-3xl lg:text-5xl font-bold">
              Take a social break
            </h1>
          </div>
          <h2 className="w-[420px]">
            Find an accountability buddy for taking that much needed break
          </h2>
          <button className="button-1 px-[18px] py-[12px]">Start</button>
        </div>
        {/* END LEFT SIDE */}
        {/* RIGHT SIDE */}
        <div className="px-8 w-full md:px-0 lg:w-1/2 h-full flex">
          <img src={headerphotoo} alt="" />
        </div>
        {/* END RIGHT SIDE */}
      </div>
    </div>
  );
}

export default LandingDisplay;
