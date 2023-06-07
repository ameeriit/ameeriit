import bannerpic from "../../assets/images/my.png";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Portfolio from "../../components/Portfolio";
import SkillBar from "../../components/SkillBar";
import TechStackSlider from "../../components/TechStackSlider";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  const rainbowStyle = {
    backgroundImage:
      "linear-gradient(-90deg, #adfbda 0, #35c3ff 30%, #fda399 50%, #76d880 70%, #ebf38b 90%, #adfbda 100%)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
    filter: "drop-shadow(0 0 2rem #000)",
  };
  return (
    <>
      <section className="banner-section container mx-auto pt-[80px] px-[120px] flex items-center justify-between">
        <div className="banner-content max-w-xl">
          <h1
            className="font-extrabold text-8xl font-[Gruppo] mb-6 text-clip"
            style={rainbowStyle}
          >
            Amrit Pokharel
          </h1>
          <div className="flex gap-2">
            <p className="text-columbia-blue font-semibold text-[25px] mb-6 ">
              Hi, I am a Web
            </p>
            <ul className="dynamic-text leading-[38px] h-[38px] overflow-hidden">
              <li className="text-malachite font-semibold text-[25px] list-none relative top-0 animate-sli">
                <span className="relative after:content-[''] after:absolute after:h-[120%] after:w-[100%] after:border-l-[2px] after:border-malachite after:left-0 after:animate-ani after:bg-black">
                  Developer.
                </span>
              </li>
              <li className="text-malachite font-semibold text-[25px] list-none relative top-0 animate-sli">
                <span className="relative after:content-[''] after:absolute after:h-[120%] after:w-[100%] after:border-l-[2px] after:border-malachite after:left-0 after:animate-ani after:bg-black">
                  Designer.
                </span>
              </li>
            </ul>
          </div>
          <p className="text-columbia-blue mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            repellendus quod ipsa laudantium.
          </p>
          <button className="text-columbia-blue font-[Montserrat] text-lg border-[1px] px-3 py-1 rounded-md transition-all hover:bg-picton-blue hover:border-picton-blue hover:text-black flex gap-6 items-center">
            Download CV <FaDownload />
          </button>
        </div>{" "}
        <div className="banner-img">
          <img className="w-[100%] h-[100%]" src={bannerpic} alt="ban-logo" />
        </div>
      </section>
      <TechStackSlider />
      <About />
      <Portfolio />
      <SkillBar />
      <Contact />
    </>
  );
};

export default Home;
