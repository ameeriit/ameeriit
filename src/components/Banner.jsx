import { FaDownload } from "react-icons/fa";
import bannermy from "../assets/images/banner-my.svg";
import banbg from "../assets/images/ban-bg.jpg";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

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

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Developer.", "Designer."],
      typeSpeed: 100,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="banner-section w-[100%] h-[100%] relative">
      <div className="banner-img-wrapper absolute top-0 left-0 w-[100%] h-[100%] before:contents[''] before:bg-[iris] before:opacity-6 before:block before:w-[100%] before:h-[100%] before:absolute before:top-0 before:left-0 z-[-1]">
        <img
          src={banbg}
          alt="banner.jpg"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="banner-wrapper relative container mx-auto flex flex-col md:flex-row items-center justify-between px-10 pt-[120px] pb-[30px] xl:pt-[150px] xl:pb-[50px] 2xl:pt-[250px] 2xl:pb-[50px] gap-[70px]">
        <div className="banner-img w-full lg:w-2/5">
          <img
            className="w-[280px] h-[100%] mx-auto"
            src={bannermy}
            alt="ban-logo"
          />
        </div>
        <div className="banner-content w-full lg:w-3/5">
          <h1 className=" font-[itim] font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 text-white">
            Hi, I'm <br />
            <span
              className=" font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 text-clip"
              style={rainbowStyle}
            >
              Amrit Pokharel
            </span>
          </h1>

          <div className="flex gap-2 flex-col md:flex-row mb-4 md:mb-0">
            <p className="text-columbia-blue font-semibold text-[25px] md:mb-6">
              Hi, I am a Web-
              <span className="text-malachite" ref={typedRef}></span>
            </p>
          </div>
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
      </div>
    </section>
  );
};

export default Banner;
