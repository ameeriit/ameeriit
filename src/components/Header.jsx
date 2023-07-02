import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <span className="sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-semibold text-red-600 text-center inline-block w-[100%]">
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
            <button></button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
