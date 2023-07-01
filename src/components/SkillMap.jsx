import mypersonal from "../assets/images/my.png";
import skillimg from "../assets/images/skill-map.jpg";
import whiteartban from "../assets/images/calligraphy-artist-hero-section-bg.svg";

const SkillMap = () => {
  return (
    <section
      id="section2"
      className="px-[40px] py-[40px] sm:px-[100px] sm:py-12"
      style={{
        backgroundImage: `url(${whiteartban})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="skillmap-wrapper container mx-auto ">
        <div className="flex flex-col gap-10">
          <div className="flex gap-2 sm:gap-6 items-center justify-center">
            <img
              className="w-[40px] sm:w-[60px] md:w-[80px]"
              src={mypersonal}
              alt=""
            />
            <div>
              <p className="font-itim font-semibold text-base sm:text-lg md:text-xl">
                ameeriit
              </p>
              <p className="text-xs sm:text-sm md:text-base">Frontend-Dev</p>
            </div>
            <p className="text-xs sm:text-sm md:text-base bg-smoky-black text-white rounded-lg px-6 py-3 relative before:contents-[''] before:block before:w-[16px] before:h-[16px] before:bg-smoky-black before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[-5px] before:rotate-[45deg]">
              I want to learn new things keep exploring and have fun everyday!
            </p>
          </div>
          <div className="skill-map-img-wrapper">
            <img
              className="w-[700px] mx-auto relative z-[-1]"
              src={skillimg}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillMap;
