import React, { useState } from "react";

function BreakCreation({ setIsConfirmationVisible, setIsPostBreakVisible }) {
  const [selectActivity, setSelectActivity] = useState(null);
  const [selectPostPrivacy, setSelectPostPrivacy] = useState(null);

  // Function to determine which button is selected
  const handleSelectActivity = (option) => {
    setSelectActivity(option);
  };

  // Function to determine which button is selected
  const handleSelectPrivacy = (option) => {
    setSelectPostPrivacy(option);
  };

  const handleShowPostBreakConfirmation = () => {
    setIsPostBreakVisible(false);
    setIsConfirmationVisible(true);
  };

  return (
    <div className="py-9 px-9 flex border rounded-2xl bg-white">
      <div className="flex flex-col gap-8">
        <h2 className="font-medium">Post a Break</h2>
        {/* FIRST LINE */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-3">
            <h3>Date</h3>
            <input
              type="date"
              className="rounded px-2 py-[4px] focus:outline-none cursor-pointer border-2 border-[#D6D6D6]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3>Start Time</h3>
            <select
              name="startTime"
              id=""
              className="rounded px-2 py-[5px] focus:outline-none cursor-pointer border-2 border-[#D6D6D6]"
            >
              <option value=""></option>
              <option value="0100">1:00 am</option>
              <option value="0115">1:15 am</option>
              <option value="0130">1:30 am</option>
              <option value="0145">1:45 am</option>
              <option value="0200">2:00 am</option>
              <option value="0215">2:15 am</option>
              <option value="0230">2:30 am</option>
              <option value="0245">2:45 am</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <h3>End Time</h3>
            <select
              name="startTime"
              id=""
              className="rounded px-2 py-[5px] focus:outline-none cursor-pointer border-2 border-[#D6D6D6]"
            >
              <option value=""></option>
              <option value="0100">1:00 am</option>
              <option value="0115">1:15 am</option>
              <option value="0130">1:30 am</option>
              <option value="0145">1:45 am</option>
              <option value="0200">2:00 am</option>
              <option value="0215">2:15 am</option>
              <option value="0230">2:30 am</option>
              <option value="0245">2:45 am</option>
            </select>
          </div>
        </div>
        {/* END FIRST LINE */}
        {/* SECOND LINE */}
        <div className="flex flex-col gap-3">
          <h3>Activity Type</h3>
          <div className="flex gap-6">
            <button
              onClick={() => handleSelectActivity("option1")}
              className={`text-[#007DE2] border border-[#007DE2] rounded px-3 py-1 ${
                selectActivity === "option1"
                  ? "bg-[#007DE2] text-white"
                  : "bg-white"
              }`}
            >
              Just Chat
            </button>
            <button
              onClick={() => handleSelectActivity("option2")}
              className={`text-[#007DE2] border border-[#007DE2] rounded px-3 py-1 ${
                selectActivity === "option2"
                  ? "bg-[#007DE2] text-white"
                  : "bg-white"
              }`}
            >
              At Home
            </button>
            <button
              onClick={() => handleSelectActivity("option3")}
              className={`text-[#007DE2] border border-[#007DE2] rounded px-3 py-1 ${
                selectActivity === "option3"
                  ? "bg-[#007DE2] text-white"
                  : "bg-white"
              }`}
            >
              Outdoors
            </button>
          </div>
        </div>
        {/* END SECOND LINE */}
        {/* THIRD LINE */}
        <div className="flex flex-col gap-3">
          <h3>Activity (optional but recommended)</h3>
          <input
            type="text"
            className="rounded px-2 py-[5px] focus:outline-none cursor-pointer border-2 border-[#D6D6D6]"
          />
        </div>
        {/* END THIRD LINE */}
        {/* FOURTH LINE */}
        <div className="flex flex-col gap-3">
          <h3>Post to</h3>
          <div className="flex gap-6">
            <button
              onClick={() => handleSelectPrivacy("option1")}
              className={`text-[#007DE2] border border-[#007DE2] rounded px-3 py-1 ${
                selectPostPrivacy === "option1"
                  ? "bg-[#007DE2] text-white"
                  : "bg-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleSelectPrivacy("option2")}
              className={`text-[#007DE2] border border-[#007DE2] rounded px-3 py-1 ${
                selectPostPrivacy === "option2"
                  ? "bg-[#007DE2] text-white"
                  : "bg-white"
              }`}
            >
              Public
            </button>
            <button
              onClick={() => handleSelectPrivacy("option3")}
              className={`text-[#007DE2] border border-[#007DE2] rounded px-3 py-1 ${
                selectPostPrivacy === "option3"
                  ? "bg-[#007DE2] text-white"
                  : "bg-white"
              }`}
            >
              Private
            </button>
          </div>
        </div>
        {/* END FOURTH LINE */}
        {/* FIFTH LINE */}
        <div className="flex gap-7 items-center justify-end">
          <h3 className="cursor-pointer">Cancel</h3>
          <button
            onClick={handleShowPostBreakConfirmation}
            className="button-3 px-3 py-2 text-sm font-bold"
          >
            POST
          </button>
        </div>
        {/* END FIFTH LINE */}
      </div>
    </div>
  );
}

export default BreakCreation;
