import React from "react";

function BreakCreationConfirmation({
  setIsPostBreakVisible,
  setIsConfirmationVisible,
}) {
  const handleGotIt = () => {
    setIsPostBreakVisible(false);
    setIsConfirmationVisible(false);
  };

  return (
    <div className="py-9 px-9 flex border rounded-2xl bg-white">
      <div className="flex flex-col items-center gap-8">
        <h3>Your Break will appear in the break list and under “Upcoming”</h3>
        <h3 className="font-semibold">
          You will not be able to delete it after someone else has joined.
        </h3>
        <button
          onClick={handleGotIt}
          className="button-3 px-3 py-2 w-fit text-sm"
        >
          Got it!
        </button>
        <div className="flex gap-3">
          <input type="checkbox" className="w-4 items-center" />
          <h3>Don’t show this message again</h3>
        </div>
      </div>
    </div>
  );
}

export default BreakCreationConfirmation;
