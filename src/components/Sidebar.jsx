import myban from "../assets/images/banner-my.svg";
const Sidebar = () => {
  return (
    <>
      <div
        className="side-intro-bar text-white fixed right-0 bg-[#0B1B33] h-100%
      top-0"
      >
        <div className="side-intro-wrapper">
          <img src={myban} alt="" />
          <button className="border-[1px] border-white inline-block text-[24px] px-[14px] py-[4px]">
            Contact Me
          </button>
          <nav>
            <ul></ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
