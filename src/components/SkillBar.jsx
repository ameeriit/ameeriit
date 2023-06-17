import skillMore from "../assets/images/arrow_loop_right.svg";

const SkillBar = () => {
  // const skills = [
  //   { name: "HTML", percentage: 90, color: "#F44336" },
  //   { name: "CSS", percentage: 80, color: "#E91E63" },
  //   { name: "JavaScript", percentage: 70, color: "#9C27B0" },
  // ];
  return (
    <section
      id="section2"
      className="skill-section text-smoky-black py-[60px] px-[50px]"
    >
      <div className="skill-wrapper container mx-auto">
        <h2
          className="font-medium text-6xl mb-10 font-[itim]"
          style={{ textShadow: "0 2px 6px black" }}
        >
          Skills
        </h2>

        <div className="skills-more max-w-[850px] mx-auto flex gap-[20px]">
          <img className="w-[80px]" src={skillMore} alt="" />
          <div>
            <h3 className=" inline-block font-brunoace relative text-lg font-semibold before:contents-[''] before:block before:h-[3px] before:w-[120%] before:bg-smoky-black before:absolute before:bottom-[-3px] before:left-0 mb-[10px]">
              More...
            </h3>
            <p className="font-jura text-base font-semibold">
              React, Wordpress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillBar;
