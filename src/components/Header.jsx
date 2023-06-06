import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <>
      <header className="header-section">
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
                      className="text-columbia-blue font-[Montserrat] font-[300] text-lg hover:text-dark-vanilla"
                      to={link.path}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <button className="text-columbia-blue font-[Montserrat] text-lg border-[1px] px-3 py-1 rounded-md transition-all hover:bg-columbia-blue hover:text-black">
            Get In Touch
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
