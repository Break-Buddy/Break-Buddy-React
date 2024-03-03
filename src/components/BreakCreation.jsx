import React, { useState } from "react";

function BreakCreation({ setIsConfirmationVisible, setIsPostBreakVisible, setActivateFakeActivity }) {
  const [selectActivity, setSelectActivity] = useState(null);
  const [selectPostPrivacy, setSelectPostPrivacy] = useState(null);
  const [activityOptionals, setActivityOptionals] = useState("");
  const [topicOfConversation, setTopicOfConversation] = useState("");
  const [isInviteEmailVisible, setIsInviteEmailVisible] = useState(false);
  const [sendAndPost, setSendAndPost] = useState(false);

  // Function to determine which button is selected
  const handleSelectActivity = (option) => {
    setSelectActivity(option);
  };

  // Function to determine which button is selected
  const handleSelectPrivacy = (option) => {
    setSelectPostPrivacy(option);
  };

  const handleClosePostbreakModal = () => {
    setIsPostBreakVisible(false);
  };

  const handleShowPostBreakConfirmation = () => {
    setIsPostBreakVisible(false);
    setIsConfirmationVisible(true);
    setActivateFakeActivity(true);
  };

  const handleActivityOptionals = (e) => {
    setActivityOptionals(e);
    console.log(activityOptionals);
  };

  const handleTopicOfConversation = (e) => {
    setTopicOfConversation(e);
  };

  const handleEmailReferral = (e) => {
    if (e.target.value.length > 0) {
      setSendAndPost(true);
    } else {
      setSendAndPost(false);
    }
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
              <option value="0300">3:00 am</option>
              <option value="0315">3:15 am</option>
              <option value="0330">3:30 am</option>
              <option value="0345">3:45 am</option>
              <option value="0400">4:00 am</option>
              <option value="0415">4:15 am</option>
              <option value="0430">4:30 am</option>
              <option value="0445">4:45 am</option>
              <option value="0500">5:00 am</option>
              <option value="0515">5:15 am</option>
              <option value="0530">5:30 am</option>
              <option value="0545">5:45 am</option>
              <option value="0600">6:00 am</option>
              <option value="0615">6:15 am</option>
              <option value="0630">6:30 am</option>
              <option value="0645">6:45 am</option>
              <option value="0700">7:00 am</option>
              <option value="0715">7:15 am</option>
              <option value="0730">7:30 am</option>
              <option value="0745">7:45 am</option>
              <option value="0800">8:00 am</option>
              <option value="0815">8:15 am</option>
              <option value="0830">8:30 am</option>
              <option value="0845">8:45 am</option>
              <option value="0900">9:00 am</option>
              <option value="0915">9:15 am</option>
              <option value="0930">9:30 am</option>
              <option value="0945">9:45 am</option>
              <option value="1000">10:00 am</option>
              <option value="1015">10:15 am</option>
              <option value="1030">10:30 am</option>
              <option value="1045">10:45 am</option>
              <option value="1100">11:00 am</option>
              <option value="1115">11:15 am</option>
              <option value="1130">11:30 am</option>
              <option value="1145">11:45 am</option>
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
              <option value="0300">3:00 am</option>
              <option value="0315">3:15 am</option>
              <option value="0330">3:30 am</option>
              <option value="0345">3:45 am</option>
              <option value="0400">4:00 am</option>
              <option value="0415">4:15 am</option>
              <option value="0430">4:30 am</option>
              <option value="0445">4:45 am</option>
              <option value="0500">5:00 am</option>
              <option value="0515">5:15 am</option>
              <option value="0530">5:30 am</option>
              <option value="0545">5:45 am</option>
              <option value="0600">6:00 am</option>
              <option value="0615">6:15 am</option>
              <option value="0630">6:30 am</option>
              <option value="0645">6:45 am</option>
              <option value="0700">7:00 am</option>
              <option value="0715">7:15 am</option>
              <option value="0730">7:30 am</option>
              <option value="0745">7:45 am</option>
              <option value="0800">8:00 am</option>
              <option value="0815">8:15 am</option>
              <option value="0830">8:30 am</option>
              <option value="0845">8:45 am</option>
              <option value="0900">9:00 am</option>
              <option value="0915">9:15 am</option>
              <option value="0930">9:30 am</option>
              <option value="0945">9:45 am</option>
              <option value="1000">10:00 am</option>
              <option value="1015">10:15 am</option>
              <option value="1030">10:30 am</option>
              <option value="1045">10:45 am</option>
              <option value="1100">11:00 am</option>
              <option value="1115">11:15 am</option>
              <option value="1130">11:30 am</option>
              <option value="1145">11:45 am</option>
            </select>
          </div>
        </div>
        {/* END FIRST LINE */}
        {/* SECOND LINE */}
        <div className="flex flex-col gap-3">
          <h3>Activity Type</h3>
          <div className="flex gap-6">
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
            onChange={(e) => handleActivityOptionals(e.target.value)}
            value={activityOptionals}
            type="text"
            className="rounded px-2 py-[5px] focus:outline-none cursor-pointer border-2 border-[#D6D6D6]"
          />
        </div>
        {/* END THIRD LINE */}
        {/* FOURTH LINE */}
        <div className="flex flex-col gap-3">
          <h3>Additional activity information (optional but recommended)</h3>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            className="rounded px-2 py-[5px] focus:outline-none cursor-pointer border-2 border-[#D6D6D6]"
            onChange={(e) => handleTopicOfConversation(e.target.value)}
            value={topicOfConversation}
          />
        </div>
        {/* END FOURTH LINE */}
        {/* FIFTH LINE */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            <h3>Post to</h3>
            <div className="flex gap-6">
              <button
                onClick={() => {
                  handleSelectPrivacy("option1");
                  setIsInviteEmailVisible(false);
                }}
                className={`text-[#007DE2] border border-[#007DE2] rounded px-3 py-1 ${
                  selectPostPrivacy === "option1"
                    ? "bg-[#007DE2] text-white"
                    : "bg-white"
                }`}
              >
                All
              </button>
              <button
                onClick={() => {
                  handleSelectPrivacy("option2");
                  setIsInviteEmailVisible(false);
                }}
                className={`text-[#007DE2] border border-[#007DE2] rounded px-3 py-1 ${
                  selectPostPrivacy === "option2"
                    ? "bg-[#007DE2] text-white"
                    : "bg-white"
                }`}
              >
                Public
              </button>
              <button
                onClick={() => {
                  handleSelectPrivacy("option3");
                  setIsInviteEmailVisible(true);
                }}
                className={`text-[#007DE2] border border-[#007DE2] rounded px-3 py-1 ${
                  selectPostPrivacy === "option3"
                    ? "bg-[#007DE2] text-white"
                    : "bg-white"
                }`}
              >
                Friends
              </button>
            </div>
          </div>

          {isInviteEmailVisible ? (
            <div className="flex flex-col gap-[10px]">
              <h3>Invite a friend?</h3>
              <input
                className="rounded-md px-2 py-[4px] focus:outline-none cursor-pointer border-2 border-[#D6D6D6]"
                placeholder="email"
                type="email"
                onChange={(e) => handleEmailReferral(e)}
              />
            </div>
          ) : null}
        </div>
        {/* END FIFTH LINE */}
        {/* SIXTH LINE */}
        <div className="flex gap-7 items-center justify-end">
          <h3 className="cursor-pointer" onClick={handleClosePostbreakModal}>
            Cancel
          </h3>
          <button
            onClick={handleShowPostBreakConfirmation}
            className="button-3 px-3 py-2 text-sm font-bold"
          >
            {sendAndPost ? "SEND AND POST" : "POST"}
          </button>
        </div>
        {/* END SIXTH LINE */}
      </div>
    </div>
  );
}

export default BreakCreation;
