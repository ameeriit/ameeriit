import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { useState, useEffect } from "react";

const Header = () => {
  const [toggleHam, setToggleHam] = useState(true);
  const [isFixed, setIsFixed] = useState(false);

  const handleHamClick = () => {
    setToggleHam(!toggleHam);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { path: "/abt", name: "About" },
    { path: "/exp", name: "Experience" },
    { path: "/prj", name: "Projects" },
    { path: "/blog", name: "Blogs" },
  ];

  return (
    <>
      <header className="header-section px-12 fixed w-[100%] bg-black z-50">
        <div className="header-wrapper container mx-auto flex justify-between items-center py-6">
          <div className="site-title-nav flex gap-12">
            <div className="site-title">
              <Link to="/">
                <img
                  className="invert-0 hover:opacity-[0.5] z-50"
                  src={logo}
                  width={100}
                  alt="logo"
                />
              </Link>
            </div>
            <nav
              className={`menu-navigation md:static md:block flex fixed z-50 w-[100%] md:w-[inherit] h-[100%] md:h-[inherit]  top-0  items-center justify-center bg-black md:bg-inherit transition-all ${
                toggleHam ? "left-[100%]  " : "left-[0] "
              }`}
            >
              <ul
                className={`menu flex gap-6 flex-col items-center md:flex-row ${
                  toggleHam ? "" : ""
                }`}
              >
                {navLinks.map((link) => (
                  <li className="menu-items" key={link.path}>
                    <Link
                      className="text-columbia-blue font-montserrat-normal text-lg hover:text-malachite"
                      to={link.path}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <a
            href="https://mario.nintendo.com/"
            className="mario-btn relative pt-[10px] pb-[8px] px-[10px] overflow-hidden font-regular text-columbia-blue hover:text-black rounded-lg group mr-[50px]"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-malachite group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-malachite group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-malachite group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-malachite group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-malachite opacity-0 group-hover:opacity-100"></span>
            <span className="relative flex gap-1 items-center transition-colors duration-300 delay-200 ease ">
              Play Mario
              <span className="font-medium text-base group-hover:text-black">
                ?
              </span>
            </span>
          </a>
          <button
            onClick={handleHamClick}
            className="ham-btn flex flex-col items-end md:hidden"
          >
            <span
              className={`block w-[32px] h-[3px] bg-malachite mb-[5px] transition-all ${
                toggleHam
                  ? ""
                  : "rotate-[45deg] translate-x-[6px] translate-y-[8px]"
              }`}
            ></span>
            <span
              className={`block w-[20px] h-[3px] bg-malachite transition-all ${
                toggleHam ? "" : "translate-x-4 opacity-0 "
              }`}
            ></span>
            <span
              className={`block w-[12px] h-[3px] bg-malachite mt-[5px] transition-all ${
                toggleHam
                  ? ""
                  : "w-[32px] rotate-[-45deg] translate-x-[6px] translate-y-[-8px]"
              }`}
            ></span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
