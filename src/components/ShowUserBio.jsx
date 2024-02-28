import friendAvatar1 from "../assets/friendAvatar2.png";
import { AddFriendIcon } from "./Icons";

function ShowUserBio({ setIsUserBioVisible }) {
  return (
    <div className="py-9 px-9 w-[450px] gap-8 flex border rounded-2xl bg-white flex-col font-manrope">
      <div className="flex justify-center">
        <img src={friendAvatar1} alt="" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <h3 className="font-bold w-[35%]">Name</h3>
          <h3>Alan O.</h3>
        </div>
        <div className="flex gap-2">
          <h3 className="font-bold w-[35%]">Gender</h3>
          <h3>Man</h3>
        </div>
        <div className="flex gap-2">
          <h3 className="font-bold w-[35%]">Time Zone</h3>
          <h3>PST US & Canada</h3>
        </div>
        <div className="flex gap-2">
          <h3 className="font-bold w-[260px]">Bio</h3>
          <h3>
            Dog dad. Chef in Cali and currently obsessed with Japanese food
          </h3>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-7 items-center justify-center">
        <button
          onClick={() => setIsUserBioVisible(false)}
          className="border flex justify-center items-center px-3 py-2 rounded-lg bg-[#F3B734]"
        >
          Back to Dashboard
        </button>

        <button className="border flex rounded-lg bg-[#F3B734] px-3 py-2 gap-2">
          <AddFriendIcon />
          Add to Private
        </button>
      </div>
      {/* End Buttons */}
    </div>
  );
}

export default ShowUserBio;
