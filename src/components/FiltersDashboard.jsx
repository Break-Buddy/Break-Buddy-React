const activities = [
  {
    title: "Just Chat",
    value: "justChat",
  },
  {
    title: "At Home",
    value: "atHome",
  },
  {
    title: "Outdoors",
    value: "outdoors",
  },
];

const joinFilters = [
  {
    title: "Public",
    value: "public",
  },
  {
    title: "Private",
    value: "private",
  },
  {
    title: "Same Gender Only",
    value: "sameGenderOnly",
  },
];

function FiltersDashboard() {
  return (
    <div className="bg-white rounded-md px-7 py-7">
      <div className="flex flex-col gap-7">
        <h3 className="font-bold">FILTERS</h3>
        {/* FILTERS */}
        <div className="flex ">
          {/* Activity Type */}
          <div className="flex flex-col gap-5 pl-8">
            <h3 className="font-semibold">Activity Type</h3>
            <div>
              {activities.map((activity, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    name="activityType"
                    value={activity.value}
                  />
                  <h3>{activity.title}</h3>
                </div>
              ))}
            </div>
          </div>
          {/* End of Activity Type */}
          {/* Join */}
          <div className="flex flex-col gap-5 pl-14">
            <h3 className="font-semibold">Join</h3>
            <div>
              {joinFilters.map((join, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    className="cursor-pointer"
                    type="radio"
                    name="joinFilter"
                    value={join.value}
                  />
                  <h3>{join.title}</h3>
                </div>
              ))}
            </div>
          </div>
          {/* End of Join */}
        </div>
      </div>
    </div>
  );
}

export default FiltersDashboard;
