import ProfileImage from "../components/ProfileImage";
import TechStack from "../components/TechStack";
import AboutSection from "../components/AboutSection";
import LatestProjects from "../components/LatestProjects";
import IntroSection from "../components/IntroSection";

const Home = () => {
  return (
    <div className="overflow-hidden pt-20 w-full 2xl:min-w-7xl min-h-[80vh] 2xl:mx-8 text-center justify-items-center">
      <div className="flex flex-col lg:flex-row w-fill lg:w-7xl lg:gap-60 lg:min-h-[80vh] place-content-center">
        <IntroSection />
        <ProfileImage />
      </div>
      <div className="lg:flex 2xl:flex-row 2xl:w-7xl 2xl:gap-8 2xl:mb-20 justify-around items-center">
      <TechStack />
      <AboutSection />
      </div>
      <LatestProjects />
    </div>
  );
};

export default Home;
