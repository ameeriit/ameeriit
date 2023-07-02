import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import About from "./components/About";
import SkillBar from "./components/SkillBar";
import TechStackSlider from "./components/TechStackSlider";
import SkillMap from "./components/SkillMap";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <SkillBar />
      <TechStackSlider />
      <SkillMap />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
