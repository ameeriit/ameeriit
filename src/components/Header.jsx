import { Link } from "react-router-dom";
import Logo from "./Logo";

import { useState } from "react";

const Header = () => {
  const [toggleHam, setToggleHam] = useState(true);

  const handleHamClick = () => {
    setToggleHam(!toggleHam);
  };

  const navLinks = [
    { path: "/", name: "About" },
    { path: "/", name: "Experience" },
    { path: "/", name: "Projects" },
    { path: "/", name: "Blogs" },
  ];

  return (
    <>
      <span className="sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-semibold font-itim text-red-600 text-center inline-block w-[100%]">
        Website Under-Construction
      </span>
      <header>
        <div className="container mx-auto px-[40px]">
          <div className="site-title-nav flex justify-between items-center gap-12">
            <div className="site-title">
              <Link to="/">
                <Logo />
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
                      className="text-black font-comfortaa font-bold text-lg hover:text-malachite"
                      to={link.path}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              onClick={handleHamClick}
              className="ham-btn flex flex-col items-end md:hidden z-50"
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
        </div>
      </header>
    </>
  );
};

export default Header;
