import skillMore from "../assets/images/arrow_loop_right.svg";

const SkillBar = () => {
  const skills = [
    { name: "HTML", percentage: "90%", color: "#F44336" },
    { name: "CSS", percentage: "80%", color: "#E91E63" },
    { name: "JavaScript", percentage: "70%", color: "#9C27B0" },
  ];

  return (
    <section className="skill-section text-smoky-black">
      <div className="skill-wrapper container mx-auto px-10 py-12">
        <h2
          className="font-medium text-6xl mb-10 font-[itim] "
          style={{ textShadow: "0 2px 6px black" }}
        >
          Skills
        </h2>
        <div className="skills  flex flex-wrap justify-center gap-x-[125px] gap-y-[50px] text-center mb-[80px]">
          {skills.map((skill, index) => (
            <div className="skill-name" key={index}>
              <div
                style={{ border: "10px solid" + skill.color }}
                className={`skills-bar-wrapper mb-[20px] text-black bg-white rounded-[50%] w-[200px] h-[200px] flex items-center justify-center`}
              >
                <span className="text-2xl font-brunoace font-normal">
                  {skill.percentage}
                </span>
              </div>
              <p className="text-2xl font-brunoace font-semibold">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
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
