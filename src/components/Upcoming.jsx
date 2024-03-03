import React from "react";
import friend1 from "../assets/friendAvatar1.png";
import videoChat from "../assets/video_chat.png";

function Upcoming({ activateFakeActivity }) {
  return (
    <div className="flex flex-col gap-5 rounded-md bg-white px-7 py-7">
      <h3 className="font-bold">UPCOMING</h3>
      <div className="flex justify-center bg-[#F2F2F2] px-4 py-3 rounded-md">
        {activateFakeActivity ? (
          <div className="flex gap-7 items-center">
            <div className="flex items-start h-full">
              <img className="w-7 h-fit" src={friend1} alt="" />
            </div>
            <h3 className="w-[170px]">
              <span className="font-semibold">Tasha W.</span> is joining you at{" "}
              <span className="font-semibold">1:15</span> in{" "}
              <span className="font-semibold">hiking in the woods</span>
            </h3>
            <div className="flex gap-2 w-fit h-fit bg-[#85E0A3] px-2 py-2 rounded-lg cursor-pointer">
              <img className="w-fit h-fit" src={videoChat} alt="" />
              <h3 className="font-semibold">Join</h3>
            </div>
          </div>
        ) : (
          <h5>No upcoming sessions today</h5>
        )}
      </div>
    </div>
  );
}

export default Upcoming;
