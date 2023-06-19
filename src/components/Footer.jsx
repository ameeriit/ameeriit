import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const navLinks = [
    { path: "/abt", name: "About" },
    { path: "/exp", name: "Experience" },
    { path: "/prj", name: "Projects" },
    { path: "/blog", name: "Blogs" },
  ];
  return (
    <>
      <footer className=" py-4 bg-smoky-black ">
        <div className="footer-wrapper container mx-auto text-center">
          <div className="flex justify-between mb-4">
            <Logo />
            <nav className="text-right">
              <ul className="">
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
          <div className="relative">
            <p className="text-columbia-blue text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] px-2 sm:px-4 pt-4 before:content-[''] before:block before:w-[100%] before:h-[2px] before:bg-white before:absolute before:top-0 before:left-0">
              Copyright &copy; Amrit Pokharel. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
