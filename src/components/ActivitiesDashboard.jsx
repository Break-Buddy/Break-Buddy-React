import user1 from "../assets/User1.png";
import user2 from "../assets/friendAvatar1.png";
import user3 from "../assets/friendAvatar2.png";
import user4 from "../assets/friendAvatar3.png";

const users = [
  {
    name: "Alano O.",
    hour: "5 hrs",
    duration: "45 min",
    time: "6:00-6:45",
    activity: "Stretch",
    img: user3,
  },
  {
    name: "Travis B.",
    hour: "1 hr",
    duration: "30 min",
    time: "2:00-2:30",
    activity: "Late Lunch",
    img: user1,
  },
  {
    name: "Ravish T.",
    hour: "2.5 hrs",
    duration: "1 hr",
    time: "3:30-4:30",
    activity: "A Walk",
    img: user2,
  },
  {
    name: "Paulina",
    hour: "3 hrs",
    duration: "25 min",
    time: "4:00-4:25",
    activity: "Stretch",
    img: user4,
  },
];

function ActivitiesDashboard({ setIsUserBioVisible }) {
  return (
    <div className="w-3/4 bg-white rounded-md px-7 py-7">
      <div className="flex flex-col items-center gap-4">
        <h3 className="font-bold">BREAKS HAPPENING SOON</h3>

        {/* Card */}
        {users.map((user, i) => (
          <div
            key={i}
            className="border flex w-full justify-between px-4 py-4 rounded-md bg-[#FEF8EB]"
          >
            {/* Left Side */}
            <div className="flex items-start gap-4">
              <img
                src={user.img}
                className={`${i == 0 && "w-7"} cursor-pointer`}
                onClick={(e) => {
                 i === 0 && setIsUserBioVisible(true);
                }}
                alt={user.name}
              />
              <div className="flex flex-col gap-2">
                <h3>
                  <span className="font-semibold">{user.name}</span> is taking a
                  break in <span className="font-semibold">{user.hour}</span>
                </h3>
                <div className="flex gap-3">
                  <h3>
                    <span className="font-semibold">Duration:</span>{" "}
                    {user.duration}
                  </h3>
                  <h3>
                    <span className="font-semibold">Time:</span> {user.time}
                  </h3>
                </div>
              </div>
            </div>
            {/* End of Left Side */}

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <h3 className="font-semibold">{user.activity}</h3>
              <button className="button-3 px-4 py-2">JOIN</button>
            </div>
            {/* End of Right Side */}
          </div>
        ))}
        {/* End of Card */}
      </div>
    </div>
  );
}

export default ActivitiesDashboard;
