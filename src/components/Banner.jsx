import { FaDownload } from "react-icons/fa";
import bannerpic from "../assets/images/my.png";

const Banner = () => {
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
      <section className="banner-section pt-[120px] px-[50px]">
        <div className="banner-wrapper container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="banner-content md:max-w-sm lg:max-w-xl">
            <h1
              className="font-extrabold text-5xl md:text-6xl lg:text-8xl font-[Gruppo] mb-6 text-clip"
              style={rainbowStyle}
            >
              Amrit Pokharel
            </h1>
            <div className="flex gap-2 flex-col md:flex-row mb-4 md:mb-0">
              <p className="text-columbia-blue font-semibold text-[25px] md:mb-6 ">
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
            <p className="text-columbia-blue mb-6 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              repellendus quod ipsa laudantium.
            </p>
            <a
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-malachite group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-columbia-blue border-2 border-malachite group-hover:bg-malachite"></span>
              <span className="relative text-cetacean-blue group-hover:text-white flex items-center gap-3">
                Resume <FaDownload />
              </span>
            </a>
          </div>
          <div className="banner-img">
            <img className="w-[100%] h-[100%]" src={bannerpic} alt="ban-logo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
