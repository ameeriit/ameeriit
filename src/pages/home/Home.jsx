import About from "../../components/About";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
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
      <Contact />
    </>
  );
};

export default Home;
