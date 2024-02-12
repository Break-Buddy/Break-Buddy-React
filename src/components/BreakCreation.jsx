import React, { useState } from "react";

function BreakCreation({ setIsConfirmationVisible, setIsPostBreakVisible }) {
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
            <button className="text-[#007DE2] border border-[#007DE2] rounded px-3 py-1">
              Just Chat
            </button>
            <button className="text-[#007DE2] border border-[#007DE2] rounded px-3 py-1">
              At Home
            </button>
            <button className="text-[#007DE2] border border-[#007DE2] rounded px-3 py-1">
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
            <button className="text-[#007DE2] border border-[#007DE2] rounded px-3 py-1">
              All
            </button>
            <button className="text-[#007DE2] border border-[#007DE2] rounded px-3 py-1">
              Public
            </button>
            <button className="text-[#007DE2] border border-[#007DE2] rounded px-3 py-1">
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
