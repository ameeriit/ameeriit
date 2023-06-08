const SkillBar = () => {
  const skills = [
    { name: "HTML", percentage: "90%", color: "#F44336" },
    { name: "CSS", percentage: "80%", color: "#E91E63" },
    { name: "JavaScript", percentage: "70%", color: "#9C27B0" },
    { name: "Wordpress", percentage: "60%", color: "#673AB7" },
    { name: "Jquery", percentage: "50%", color: "#3F51B5" },
    { name: "React", percentage: "60%", color: "#2196F3" },
    { name: "Tailwind", percentage: "80%", color: "#03A9F4" },
    { name: "Bootstrap", percentage: "80%", color: "#00BCD4" },
    { name: "Less", percentage: "80%", color: "#009688" },
    { name: "Sass", percentage: "80%", color: "#4CAF50" },
  ];

  return (
    <section className="skill-section text-columbia-blue bg-blue-yonder pt-[40px] pb-[60px] px-[50px]">
      <div className="skill-wrapper container mx-auto">
        <h2 className="font-semibold text-2xl md:text-4xl mb-[30px] md:mb-[70px] relative inline-block text-columbia-blue after:content-['] after:absolute after:h-[4px] after:w-[110%] after:bg-columbia-blue after:bottom-[-8px] after:left-0">
          Skills
        </h2>
        <div className="skills md:columns-2">
          {skills.map((skill, index) => (
            <div className="skill-name mb-6 " key={index}>
              <p className="font-semibold  text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
                {skill.name}
              </p>
              <div className="skills-bar-wrapper flex flex-col items-end w-[100%] md:w-[80%] text-sm md:text-lg">
                <span>{skill.percentage}</span>
                <div className="skill-bar w-[100%] block bg-dark-vanilla h-[8px] rounded relative">
                  <span
                    className="skill-percentage absolute w-[80%] h-[8px] rounded left-0 top-0"
                    style={{ backgroundColor: skill.color }}
                  ></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillBar;
