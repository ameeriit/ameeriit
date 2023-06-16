import About from "../../components/About";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Interests from "../../components/Interests";
import Newsletter from "../../components/Newsletter";
import Portfolio from "../../components/Portfolio";
import SkillBar from "../../components/SkillBar";
import SkillMap from "../../components/SkillMap";
import TechStackSlider from "../../components/TechStackSlider";

const Home = () => {
  return (
    <>
      <Banner />
      <TechStackSlider />
      <SkillBar />
      <About />
      <SkillMap />
      <Portfolio />
      <Interests />
      <Newsletter />
      <Contact />
    </>
  );
};

export default Home;
