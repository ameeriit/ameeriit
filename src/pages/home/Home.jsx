import bannerpic from "../../assets/images/banner-pic.png";

const Home = () => {
  const rainbowStyle = {
    backgroundImage:
      "linear-gradient(-90deg, #adfbda 0, #35c3ff 30%, #fda399 50%, #76d880 70%, #ebf38b 90%, #adfbda 100%)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
    filter: "drop-shadow(0 0 2rem #000)",
  };
  return (
    <>
      <section className="banner-section container mx-auto py-[80px] flex items-center justify-between">
        <div className="banner-content max-w-xl">
          <h1
            className="font-extrabold text-8xl  font-[Gruppo] mb-6 text-clip"
            style={rainbowStyle}
          >
            Amrit Pokharel
          </h1>
          <p className="text-columbia-blue font-semibold text-[25px] mb-6 ">
            Hi, I am a Frontend Developer.
          </p>
          <p className="text-columbia-blue mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            repellendus quod ipsa laudantium.
          </p>
          <button className="text-columbia-blue font-[Montserrat] text-lg border-[1px] px-3 py-1 rounded-md transition-all hover:bg-columbia-blue hover:text-black">
            Read More
          </button>
          <div className="social-media-icons"></div>
        </div>
        <div className="banner-img">
          <img className="w-[100%] h-[100%]" src={bannerpic} alt="ban-logo" />
        </div>
      </section>
    </>
  );
};

export default Home;
