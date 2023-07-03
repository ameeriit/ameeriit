import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import About from "./components/About";
import SkillBar from "./components/SkillBar";
import TechStackSlider from "./components/TechStackSlider";
import SkillMap from "./components/SkillMap";
import Portfolio from "./components/Portfolio";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <svg
          className="fixed w-[80px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          width="550"
          height="550"
          viewBox="0 0 550 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="draw1"
            className="stroke-red-cm stroke-[20px] fill-transparent animate-animate1"
            d="M260.372 181.551C271.933 227.23 264.332 277.304 243.674 319.343C234.413 338.189 222.002 356.765 205.521 370.103C200.852 373.882 193.22 379.546 186.831 376.351C182.711 374.291 180.902 369.62 180.749 365.237C180.255 351.068 193.661 342.156 205.631 338.033C219.977 333.091 237.676 332.92 252.078 337.756C266.686 342.662 277.668 354.09 289.236 363.689"
            style={{ strokeDasharray: 380, strokeDashoffset: 380 }}
          />
          <path
            id="draw2"
            className="stroke-red-cm stroke-[20px] fill-transparent animate-animate2"
            d="M237.956 239.509C244.508 222.749 248.675 205.471 252.193 187.863C256.607 165.774 261.489 143.583 264.443 121.242C266.422 106.282 266.651 91.2562 265.622 76.1825C264.569 60.7582 265.035 83.8143 265.18 86.8554C266.728 119.347 267.61 152.046 271.053 184.432C276.991 240.297 290.97 294.601 309.486 347.877C320.248 378.842 331.692 409.702 344.094 440.111C349.908 454.366 355.509 467.476 365.578 479.267"
            style={{ strokeDasharray: 600, strokeDashoffset: 600 }}
          />
          <path
            id="draw3"
            className="stroke-red-cm stroke-[20px] fill-transparent animate-animate3"
            d="M275.301 388.571C287.178 386.922 299.139 380.032 310.137 375.633C324.641 369.831 338.993 364.189 353.929 359.708"
            style={{ strokeDasharray: 90, strokeDashoffset: 90 }}
          />
          <circle
            id="draw4"
            cx="275"
            cy="275"
            r="260"
            className="stroke-orange-cm stroke-[30px] fill-transparent animate-animate4"
            style={{ strokeDasharray: 60, strokeDashoffset: 360 }}
          />
        </svg>
      ) : (
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
      )}
    </>
  );
};

export default App;
