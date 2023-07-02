import skillMore from "../assets/images/arrow_loop_right.svg";
import CountUp from "react-countup";
import TechStackSlider from "./TechStackSlider";

const SkillBar = () => {
  const skills = [
    { name: "HTML", percentage: 90, color: "#F44336" },
    { name: "CSS", percentage: 80, color: "#E91E63" },
    { name: "JavaScript", percentage: 70, color: "#9C27B0" },
  ];
  return (
    <section id="section2" className="skill-section py-[60px] px-[50px] ">
      <div className="skill-wrapper container mx-auto">
        <h2
          className="font-medium text-4xl sm:text-4xl lg:text-6xl mb-10]"
          style={{ textShadow: "0 2px 6px black" }}
        >
          Skills
        </h2>
        <div className="flex flex-wrap gap-5 sm:gap-10 md:gap-20 justify-center text-center mb-[20px] sm:mb-[40px] md:mb-[60px]">
          {skills.map((skill, index) => (
            <div
              className="skill rounded-[50%] w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] flex flex-col items-center justify-center "
              key={index}
              style={{ border: `10px solid ${skill.color}` }}
            >
              <CountUp
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 block"
                end={skill.percentage}
                enableScrollSpy="true"
                scrollSpyDelay="5"
                scrollSpyOnce="true"
                suffix="%"
              ></CountUp>
              <p className="text-base sm:text-lg lg:text-2xl font-semibold">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-more max-w-[850px] mx-auto flex gap-[20px] mb-[60px]">
        <img
          className=" w-[40px] sm:w-[60px] md:w-[80px]"
          src={skillMore}
          alt=""
        />
        <div>
          <h3 className=" inline-block relative text-sm sm:text-base md:text-lg font-semibold before:contents-[''] before:block before:h-[3px] before:w-[120%] before:bg-black before:absolute before:bottom-[-3px] before:left-0 mb-[10px]">
            More...
          </h3>
          <p className="text-xs sm:text-sm md:text-base font-semibold">
            React, Wordpress
          </p>
        </div>
      </div>
      <TechStackSlider />
    </section>
  );
};

export default SkillBar;
