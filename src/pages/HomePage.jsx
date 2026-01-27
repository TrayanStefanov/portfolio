import ProfileImage from "../components/ProfileImage";
import TechStack from "../components/TechStack";
import AboutSection from "../components/AboutSection";
import LatestProjects from "../components/LatestProjects";
import IntroSection from "../components/IntroSection";

const Home = () => {
  return (
    <div className="overflow-hidden pt-20 lg:min-w-7xl min-h-[80vh] mx-8 text-center justify-items-center">
      <div className="flex flex-col lg:flex-row lg:w-7xl lg:gap-60 lg:min-h-[80vh] place-content-center">
        <IntroSection />
        <ProfileImage />
      </div>
      <div className="lg:flex lg:flex-row lg:w-7xl lg:gap-8 lg:mb-20 justify-around items-center">
      <TechStack />
      <AboutSection />
      </div>
      <LatestProjects />
    </div>
  );
};

export default Home;
