import TechCloud from "../components/TechCloud";
import ProfileImage from "../components/ProfileImage";
import AboutText from "../components/AboutText";
import ExperienceText from "../components/ExperienceText";
const AboutPage = () => {
  return (
    <div className="my-[4rem]">
      <div className="lg:hidden">
        <ProfileImage />
      </div>
      <div className="hidden lg:block border-t-2 border-b-2 border-secondary/70">
        <TechCloud />
      </div>
      <AboutText />
      <ExperienceText />
    </div>
  );
};

export default AboutPage;
