import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
    { path: "/experience", name: "Experience" },
  ];

  return (
    <>
      <header className="header-section px-12">
        <div className="header-wrapper container mx-auto flex justify-between items-center py-6">
          <div className="site-title-nav flex gap-12">
            <div className="site-title">
              <Link to="/">
                <img className="invert-0" src={logo} width={30} alt="logo" />
              </Link>
            </div>
            <nav className="menu-navigation">
              <ul className="menu flex gap-6">
                s
                {navLinks.map((link) => (
                  <li className="menu-items" key={link.path}>
                    <Link
                      className="text-columbia-blue font-[Montserrat] font-[300] text-lg hover:text-picton-blue"
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
            href="#_"
            className="relative px-5 py-3 overflow-hidden font-regular text-columbia-blue hover:text-black rounded-lg group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-malachite group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-malachite group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-malachite group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-malachite group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-malachite opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 ease ">
              Bro Mario?
            </span>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
