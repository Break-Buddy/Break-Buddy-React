import React, { useState } from "react";

function Dashboard() {
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
    setToggleDate(!toggleDate)
    toggleDate ? setToggleDay("Day") : setToggleDay("Week")
  };

  const [toggleDay, setToggleDay] = useState("Day");
  const [toggleDate, setToggleDate] = useState(true);

  return (
    <div className="min-h-screen pt-28 bg-[#003F71]">
      <div>
        {/* TOP MESSAGE */}
        <div className="flex justify-between items-center px-9">
          {/* Name and Date */}
          <div className="flex flex-col gap-1 text-white">
            <h2 className="text-[32px]">Welcome Tara!</h2>
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
            <button onClick={handleClickDay} className="button-2 px-6 py-2">{toggleDay}</button>
            <button className="button-3 px-6 py-2">+ POST A BREAK</button>
          </div>
          {/* End of Buttons */}
        </div>
        {/* END OF TOP MESSAGE */}
      </div>
    </div>
  );
}

export default Dashboard;