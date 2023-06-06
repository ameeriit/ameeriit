import bannerpic from "../../assets/images/banner-pic.png";

const Home = () => {
  return (
    <>
      <section className="banner-section container mx-auto py-[100px] flex items-center justify-between">
        <div className="banner-content max-w-xl">
          <h1 className="text-columbia-blue font-extrabold text-8xl  font-[Gruppo] mb-6">
            Amrit Pokharel
          </h1>
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
