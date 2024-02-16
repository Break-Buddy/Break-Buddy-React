import DashboardPreview from "../assets/dashboardPreview.png";
import PostABreakPreview from "../assets/PostABreakPreview.png";

function PreviewDashboard() {
  return (
    <div className="py-14 px-5 bg-[#FEF8EB]">
      <div className="flex flex-col justify-center items-center gap-12">
        <h2 className="font-semibold">TAKE A PEEK</h2>
        <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
          <img src={DashboardPreview} alt="Dashboard Preview" />
          <img src={PostABreakPreview} alt="Post A Break Preview" />
        </div>
        <div>
          <h2 className="font-semibold">Dashboard + Break Creation</h2>
          <h3 className="w-80">
            We’ve made it easier to semi-spontanously take breaks with others!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default PreviewDashboard;
