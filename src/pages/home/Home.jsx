import About from "../../components/About";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Portfolio from "../../components/Portfolio";
import SkillBar from "../../components/SkillBar";
import TechStackSlider from "../../components/TechStackSlider";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <TechStackSlider />
      <Portfolio />
      <SkillBar />
      <Contact />
    </>
  );
};

export default Home;
