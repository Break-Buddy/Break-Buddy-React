import React, { useState } from "react";
import CameraIcon from "../assets/CameraIcon.png";

const AccountCreation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [timezone, setTimezone] = useState("");
  const [gender, setGender] = useState("");
  const [isOver18, setIsOver18] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleTimezoneChange = (e) => {
    setTimezone(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleIsOver18Change = (e) => {
    setIsOver18(e.target.checked);
  };

  const handleAgreeTermsChange = (e) => {
    setAgreeTerms(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data to your backend or perform any other actions
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Timezone:", timezone);
    console.log("Gender:", gender);
    console.log("Is Over 18:", isOver18);
    console.log("Agree Terms:", agreeTerms);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-lg">
        <div className="w-20 p-6 bg-[#D0D5DD] h-20 rounded-full">
          <img classname className="w-full" src={CameraIcon} />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex gap-8">
              <div className="flex flex-col items-start">
                <label
                  htmlFor="firstName"
                  className="text-black font-semibold mb-1"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  className="input-field bg-transparent border border-solid border-[#000000] rounded-[8px] w-[201px] h-[40px] pl-2"
                />
              </div>
              <div className="flex flex-col items-start">
                <label
                  htmlFor="lastName"
                  className="text-black font-semibold mb-1"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={handleLastNameChange}
                  className="input-field bg-transparent border border-solid border-[#000000] rounded-[8px] w-[201px] h-[40px] pl-2"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start pt-4">
            <label htmlFor="timezone" className="text-black font-semibold mb-1">
              Timezone
            </label>
            <input
              id="timezone"
              type="text"
              value={timezone}
              onChange={handleTimezoneChange}
              className="input-field bg-transparent border border-solid border-[#000000] rounded-[8px] w-full h-[40px] pl-2"
            />
          </div>
          <div className="flex flex-col items-start pt-4">
            <label htmlFor="gender" className="text-black font-semibold mb-1">
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={handleGenderChange}
              className="select-field bg-transparent border border-solid border-[#000000] rounded-[8px] w-[201px] h-[40px] pl-2"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isOver18}
                onChange={handleIsOver18Change}
                className="checkbox-field mr-2"
              />
              <span className="text-black">I am over 18 years old</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={handleAgreeTermsChange}
                className="checkbox-field mr-2"
              />
              <span className="text-black">
                I have read Break Buddy's Terms and Privacy Policy
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="button-3 py-3 px-3 w-40 mx-auto"
            disabled
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountCreation;
