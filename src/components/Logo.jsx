import siteLogo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <div>
      <img className="invert-[1]" src={siteLogo} width={100} alt="" />
    </div>
  );
};

export default Logo;
