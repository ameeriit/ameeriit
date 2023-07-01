// import { FaDownload } from "react-icons/fa";
import bannermy from "../assets/images/banner-my.svg";
import arr from "../assets/images/arrow.svg";
// import bannerbg from "../assets/images/ban-bg.jpg";
// import Typed from "typed.js";
// import { useRef, useEffect } from "react";

const Banner = () => {
  // const rainbowStyle = {
  //   backgroundImage:
  //     "linear-gradient(-90deg, #adfbda 0, #35c3ff 30%, #fda399 50%, #76d880 70%, #ebf38b 90%, #adfbda 100%)",
  //   backgroundSize: "100%",
  //   backgroundRepeat: "repeat",
  //   WebkitBackgroundClip: "text",
  //   WebkitTextFillColor: "transparent",
  //   MozBackgroundClip: "text",
  //   filter: "drop-shadow(0 0 2rem #000)",
  // };

  // const typedRef = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     strings: ["Developer.", "Designer."],
  //     typeSpeed: 100,
  //     loop: true,
  //   };

  //   const typed = new Typed(typedRef.current, options);

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  const bannerList = [
    { banli: "Crafting Digital Experiences." },
    {
      banli: "Transforming Ideas into Seamless Web Experiences. ",
    },
  ];

  return (
    <section className="banner-section pt-[150px] pb-[60px]">
      <div className="w-[100%] mx-auto">
        <div className="banner-wrapper border-[1px] border-white">
          <div className="banner-content w-[67.36%] text-white pl-[60px] py-[60px]">
            <p className="welcome text-[24px]  border-[1px] border-white inline-block px-[14px] py-[4px] mb-[6px]">
              Welcome I'M
            </p>
            <br />
            <div className="text-[24px] border-[1px] border-white inline-block px-[14px] pt-[32px] pb-[4px] px-[16px] mb-[6px]">
              <p className="text-[64px] font-bulgatti">Amrit Pokharel</p>
              <span className="font-comfortaa font-bold text-[64px]">
                WEB-DEVELOPER
              </span>
            </div>
            <ul className="border-[1px] border-white inline-block mb-[6px] pl-[30px] pr-[16px] py-[8px] relative before:block before:content-[''] before:w-[2px] before:h-[60%] before:bg-white before:absolute before:left-[16px] before:top-[50%] before:translate-y-[-50%]">
              {bannerList.map((inlist, index) => (
                <li className="" key={index}>
                  {inlist.banli}
                </li>
              ))}
            </ul>
            <br />
            <button className="border-[1px] border-white inline-block text-[24px] px-[14px] py-[4px]">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
