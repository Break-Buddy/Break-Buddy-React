import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import LandingDisplay from "../components/LandingDisplay";
import PreviewDashboard from "../components/PreviewDashboard";

function Home() {
  return (
    <div>
      <LandingDisplay />
      <HowItWorks />
      <PreviewDashboard />
      <FAQ />
    </div>
  );
}

export default Home;
