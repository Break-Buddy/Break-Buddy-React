import landingImage1 from "../assets/landingImage1.png";
import landingImage2 from "../assets/landingImage2.png";

function LandingDisplay() {
  return (
    <div className="px-16 pt-20 flex flex-col justify-center">
      <div className="flex justify-center px-64 py-36 items-center gap-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text- font-bold">Reward yourself.</h1>
            <h1 className="font-bold">Take a social break</h1>
          </div>
          <h2 className="w-[420px]">
            Find an accountability buddy for taking that much needed break
          </h2>
          <button className="button-1 px-[18px] py-[12px]">Start</button>
        </div>
        <div className="w-1/2 h-full relative -top-56">
          <img
            className="w-[214px] h-[281px] absolute left-12 z-20"
            src={landingImage1}
            alt="Guy Cooking 1"
          />
          <img
            className="w-[253px] h-[256px] absolute left-40 top-36 z-10"
            src={landingImage2}
            alt="Guy Cooking 2"
          />
          <span className="landingCaption top-6 left-6">COOK</span>
          <span className="landingCaption top-14 left-52">TAKE A WALK</span>
          <span className="landingCaption top-52 left-1">EAT LUNCH</span>
          <span className="landingCaption top-72 left-[370px]">MAKE ART</span>
          <span className="py-3 px-7 text-base rounded-full absolute z-30 bg-[#FFF] top-[375px] left-56">
            TOGETHER
          </span>
        </div>
      </div>
    </div>
  );
}

export default LandingDisplay;
