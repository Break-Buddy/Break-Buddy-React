import React, { useState, useEffect } from "react";
import CameraIcon from "../assets/CameraIcon.png";
import { useNavigate } from "react-router-dom";

function AccountCreation2() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isOver18, setIsOver18] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [bio, setBio] = useState(""); // Added state for bio field
  const [isInfoFilledout, setIsInfoFilledout] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsInfoFilledout(
      firstName && lastName && timezone && isOver18 && agreeTerms
    );
  }, [firstName, lastName, timezone, isOver18, agreeTerms]);

  const handleStoreInformation = () => {
    localStorage.setItem("firstName", firstName);
  };

  // If all fields are filled, enable the button
  const handleIsAllInfoFilled = (e) => {
    e.preventDefault();

    if (isInfoFilledout) {
      localStorage.setItem("firstName", firstName);
      navigate("/home");
      console.log("successfully created an account");
    } else {
      console.log("button disabled");
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleTimezoneChange = (e) => {
    setTimezone(e.target.value);
  };

  const handleIsOver18Change = (e) => {
    setIsOver18(e.target.checked);
  };

  const handleAgreeTermsChange = (e) => {
    setAgreeTerms(e.target.checked);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  return (
    <div className="flex items-center justify-center rounded-md h-screen w-full bg-[#003F71] font-manrope">
      <form
        onSubmit={(e) => {
          handleIsAllInfoFilled(e);
        }}
        className="flex flex-col gap-4 border px-14 py-3 rounded-lg bg-white"
      >
        <div className="w-20 p-6 bg-[#D0D5DD] mx-auto my-7 h-20 rounded-full border-3 border-black relative cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="w-20 h-20 border rounded-full absolute z-10 top-0 left-0 opacity-0"
          />
          <img className="w-8 absolute" src={CameraIcon} alt="Camera Icon" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex gap-8">
            <div className="flex flex-col items-start">
              <label htmlFor="firstName" className="text-black mb-1">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                className="rounded-md h-[40px] pl-2 bg-white border focus:bg-[#F2F2F2] focus:outline-none"
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="lastName" className="text-black mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                className="rounded-md h-[40px] pl-2 bg-white border focus:bg-[#F2F2F2] focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start pt-4">
          <label htmlFor="timezone" className="text-black mb-1">
            Timezone
          </label>
          <select
            id="timezone"
            value={timezone}
            onChange={handleTimezoneChange}
            className="border w-full h-[40px] pl-2 rounded-md bg-white focus:bg-[#F2F2F2] focus:outline-none"
          >
            <option value="AKST">Alaska Time - US</option>
            <option value="AST">Atlantic Time - Canada</option>
            <option value="CST">Central Time - US & Canada</option>
            <option value="EST">Eastern Time - US & Canada</option>
            <option value="HST">Hawaii Time - US</option>
            <option value="MST">Mountain Time - US & Canada</option>
            <option value="NST">Newfoundland Time - Canada</option>
            <option value="PST">Pacific Time - US & Canada </option>
          </select>
        </div>
        <div className="flex flex-col items-start pt-4">
          <label htmlFor="bio" className="text-black mb-1">
            Bio (optional)
          </label>
          <textarea
            onChange={handleBioChange}
            value={bio}
            name=""
            id="bio"
            cols="30"
            rows="4"
            className="py-2 border w-full px-3 rounded-md bg-white focus:bg-[#F2F2F2] focus:outline-none"
          ></textarea>
        </div>
        <div className="pl-5">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isOver18}
              onChange={handleIsOver18Change}
              className="mr-2"
            />
            <span className="text-black">I am over 18 years old</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={handleAgreeTermsChange}
              className="mr-2"
            />
            <span className="text-black">
              I have read Break Buddy's{" "}
              <span className="text-[#007DE2]">Terms</span> and{" "}
              <span className="text-[#007DE2]">Privacy Policy</span>
            </span>
          </label>
        </div>
        <button
          type="submit"
          className={`${
            isInfoFilledout
              ? "button-3"
              : "bg-[#D0D5DD] text-[#64748B] rounded-md font-medium cursor-not-allowed"
          }  py-3 px-3 w-40 my-5 mx-auto`}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default AccountCreation2;
