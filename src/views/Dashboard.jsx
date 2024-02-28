import React, { useState, useEffect } from "react";
import Upcoming from "../components/Upcoming";
import FiltersDashboard from "../components/FiltersDashboard";
import ActivitiesDashboard from "../components/ActivitiesDashboard";
import BreakCreation from "../components/BreakCreation";
import BreakCreationConfirmation from "../components/BreakCreationConfirmation";
import ShowUserBio from "../components/ShowUserBio";
import { auth } from "../config/firebase";

function Dashboard() {
  const [isPostBreakVisible, setIsPostBreakVisible] = useState(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [isUserBioVisible, setIsUserBioVisible] = useState(false);
  const [userName, setUserName] = useState(null);
  const [pageLoaded, setPageLoaded] = useState(false);
  
  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUserName(user.displayName.slice(0, user.displayName.indexOf(" ")));
      } else {
        // No user is signed in
        setUserName(null);
      }
    });

    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Set a timeout to mark the page as loaded after 1 second
    const timeout = setTimeout(() => {
      setPageLoaded(true);
    }, 1000);

    // Clean up the timeout when the component is unmounted
    return () => clearTimeout(timeout);
  }, []);

  console.log(auth.currentUser);

  const handlePostBreak = () => {
    setIsPostBreakVisible(true);
  };

  const date = new Date();
  const month = (date.getMonth() + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const day = date.getDate().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const year = date.getFullYear();

  const hours = date.getHours().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const minutes = date.getMinutes().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  const handleClickDay = () => {
    setToggleDate(!toggleDate);
    toggleDate ? setToggleDay("Day") : setToggleDay("Week");
  };

  const [toggleDay, setToggleDay] = useState("Day");
  const [toggleDate, setToggleDate] = useState(true);

  return (
    <div className={`min-h-screen pt-28 bg-[#003F71] px-9 ${pageLoaded ? "" : "hidden"}`}>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center">
        {isPostBreakVisible ? (
          <BreakCreation
            setIsPostBreakVisible={setIsPostBreakVisible}
            setIsConfirmationVisible={setIsConfirmationVisible}
          />
        ) : isConfirmationVisible ? (
          <BreakCreationConfirmation
            setIsPostBreakVisible={setIsPostBreakVisible}
            setIsConfirmationVisible={setIsConfirmationVisible}
          />
        ) : isUserBioVisible ? (
          <ShowUserBio setIsUserBioVisible={setIsUserBioVisible} />
        ) : null}
      </div>
      <div className="flex flex-col gap-5">
        <div>
          {/* TOP MESSAGE */}
          <div className="flex justify-between items-center">
            {/* Name and Date */}
            <div className="flex flex-col gap-1 text-white">
              <h2 className="text-[32px]">Welcome {userName}!</h2>
              <div className="flex gap-6">
                <h3>
                  Date: {month}/{day}/{year}
                </h3>
                <h3>
                  Time: {hours}:{minutes} {date.getHours() >= 12 ? "pm" : "am"}
                </h3>
              </div>
            </div>
            {/* End of Name and Date */}
            {/* Buttons */}
            <div className="flex gap-8">
              <button onClick={handleClickDay} className="button-2 px-6 py-2">
                {toggleDay}
              </button>
              <button onClick={handlePostBreak} className="button-3 px-6 py-2">
                + POST A BREAK
              </button>
            </div>
            {/* End of Buttons */}
          </div>
          {/* END OF TOP MESSAGE */}
        </div>
        {/*  */}

        {/* BOTTOM STUFF */}
        <div className="flex gap-8">
          {/* LEFT */}
          <div className="w-1/4 flex flex-col gap-4">
            <Upcoming />
            <FiltersDashboard />
          </div>
          {/* END OF LEFT */}
          {/* Activities Dashboard */}
          <ActivitiesDashboard setIsUserBioVisible={setIsUserBioVisible} />
          {/* End of Activities Dashboard */}
        </div>
        {/* END OF BOTTOM STUFF */}
        {/*  */}
      </div>
    </div>
  );
}

export default Dashboard;
