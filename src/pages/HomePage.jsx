import ProfileImage from "../components/ProfileImage";
import TechStack from "../components/TechStack";
import AboutSection from "../components/AboutSection";
import LatestProjects from "../components/LatestProjects";
import IntroSection from "../components/IntroSection";

const Home = () => {
  return (
    <div className="overflow-hidden pt-20 min-h-[80vh] mx-8 text-center justify-items-center">
      <IntroSection />
      <ProfileImage />
      <TechStack />
      <AboutSection />
      <LatestProjects />
    </div>
  );
};

export default Home;
