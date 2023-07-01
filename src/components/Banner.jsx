import { FaDownload, FaLocationArrow } from "react-icons/fa";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import hi from "../assets/images/hi.png";
import banBgElem from "../assets/images/bannerbgelement.svg";
import mySvg from "../assets/images/my-svg.svg";

const Banner = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Developer.", "Designer."],
      typeSpeed: 100,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const bannerList = [
    { banli: "Crafting Digital Experiences." },
    {
      banli: "Transforming Ideas into Seamless Web Experiences. ",
    },
  ];

  return (
    <section className="banner-section w-[100%] h-[100%] relative py-[60px] md:py-[80px] lg:py-[80px] xl:py-[100px] 2xl:py-[220px] ">
      <div className="container mx-auto flex items-center relative px-[40px] max-[320px]:pr-[15px] max-[320px]:pl-[25px]">
        <div className="banner-content w-full lg:w-3/5">
          <span className="bg-temptress font-bold text-white p-2 rounded inline-block bg-orange-cm px-[20px] mb-[40px] md:mb-[60px]">
            Welcome, I{"\u0060"}M
          </span>
          <br />
          <h1
            className="font-bulgatti font-extrabold text-green-cm text-4xl max-[320px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 inline-block relative"
            style={{ textShadow: "0px 11px 10px rgba(81,67,21,0.8)" }}
          >
            Amrit Pokharel
            {/* <span
              className=" font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 text-clip"
              style={rainbowStyle}
            >
              Amrit Pokharel
            </span> */}
            <img
              className="absolute top-[-45px] right-[-25px] animate-waving-hand"
              src={hi}
              width={30}
              alt=""
            />
          </h1>

          <div className="flex gap-2 flex-col md:flex-row md:mb-0 ">
            <p className="font-comfortaa uppercase text-green-cm font-semibold text-xl max-[320px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
              Web-
              <span className="text-orange-cm " ref={typedRef}></span>
            </p>
          </div>
          <div>
            <span className="mb-4 md:mb-6 text-[10px] sm:text-[12px] md:text-[14px] font-semibold flex items-center">
              <FaLocationArrow />
              -Nepal, Kathmandu, Sitapaila
            </span>
            <ul className="text-[12px] sm:text-[14px] md:text-[16px] font-bold border-2 relative border-orange-cm px-4 py-1 inline-block mb-4 before:content-[''] before:block before:w-[2px] before:h-[80%] before:rounded-lg before:absolute before:left-[8px] before:bg-black">
              {bannerList.map((inlist, index) => (
                <li className="" key={index}>
                  {inlist.banli}
                </li>
              ))}
            </ul>
            <br />

            <a
              href="#"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-green-cm border-2 border-green-cm group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-orange-cm border-2 border-green-cm group-hover:bg-malachite"></span>
              <span className="relative text-cetacean-blue  group-hover:text-white flex items-center gap-3">
                Resume <FaDownload />
              </span>
            </a>
          </div>
        </div>
        <div className="absolute top-[50%] right-0 translate-y-[-50%] overflow-hidden opacity-[0.6] z-[-1]">
          <img className="animate-rotate-img" src={banBgElem} alt="" />
          <img
            className="absolute top-[42%]
          left-[45%] translate-[-50%] "
            width={60}
            src={mySvg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
