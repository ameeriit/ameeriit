import skillimg from "../assets/images/skill-map.jpg";

const SkillMap = () => {
  return (
    <section
      id="section2"
      className="px-[25px] py-[40px] sm:px-[100px] sm:py-12 bg-gradient-to-r from-green-300 via-orange-200"
    >
      <div className="skillmap-wrapper container mx-auto ">
        <div className="flex flex-col gap-10">
          <div className="flex gap-2 sm:gap-6 items-center justify-center">
            <div>
              <p className="text-blue-600 font-semibold text-base sm:text-lg md:text-xl">
                ameeriit
              </p>
              <p className="text-xs sm:text-sm md:text-base">Frontend-Dev</p>
            </div>
            <p className="text-xs sm:text-sm md:text-base bg-black text-white rounded-lg px-6 py-3 relative before:contents-[''] before:block before:w-[16px] before:h-[16px] before:bg-black before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[-5px] before:rotate-[45deg]">
              I want to learn new things keep exploring and have fun everyday!
            </p>
          </div>
          <div className="skill-map-img-wrapper">
            <img
              className="w-[700px] mx-auto mix-blend-darken"
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
