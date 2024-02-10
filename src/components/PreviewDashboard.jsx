import DashboardPreview from "../assets/dashboardPreview.png";
import PostABreakPreview from "../assets/PostABreakPreview.png";

function PreviewDashboard() {
  return (
    <div className="py-14 px-5">
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
        <img src={DashboardPreview} alt="Dashboard Preview" />
        <img src={PostABreakPreview} alt="Post A Break Preview" />
      </div>
    </div>
  );
}

export default PreviewDashboard;
