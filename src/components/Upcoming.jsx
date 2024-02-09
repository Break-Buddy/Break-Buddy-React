import React from "react";

function Upcoming() {
  return (
    <div className="flex flex-col gap-5 rounded-md bg-white px-7 py-7">
      <h3 className="font-semibold">UPCOMING</h3>
      <div className="flex justify-center bg-[#F2F2F2] px-4 py-3 rounded-md">
        <h5>No upcoming sessions today</h5>
      </div>
    </div>
  );
}

export default Upcoming;
