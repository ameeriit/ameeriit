import skillMore from "../assets/images/arrow_loop_right.svg";
import CountUp from "react-countup";

const SkillBar = () => {
  const skills = [
    { name: "HTML", percentage: 90, color: "#F44336" },
    { name: "CSS", percentage: 80, color: "#E91E63" },
    { name: "JavaScript", percentage: 70, color: "#9C27B0" },
  ];

  const skillsdetails = [
    {
      skillDesc: "Language",
      skillName: [
        "Javascript",
        "HTML",
        "CSS",
        "Sass",
        "Less",
        "Tailwind",
        "Bootstrap",
        "SQL",
      ],
    },
    {
      skillDesc: "Frameworks",
      skillName: ["React", "Wordpress"],
    },
    {
      skillDesc: "Tools",
      skillName: [
        "Bash",
        "Git & Github",
        "Gulp",
        "Chrome Dev Tools",
        "Postman",
        "MongoDB",
      ],
    },
    {
      skillDesc: "Design",
      skillName: [
        "Sketch",
        "InDesign",
        "Prototyping",
        "Wire Framing",
        "Unit Testing",
        "Figma",
        "Zeplin",
        "PhotoShop",
        "Illustrator",
      ],
    },
  ];
  return (
    <section id="section2" className="skill-section pt-[60px] px-[15px] ">
      <div className="skill-wrapper flex justify-center">
        <div className="flex flex-wrap gap-5 sm:gap-10 md:gap-20 justify-center text-center mb-[20px] sm:mb-[40px] md:mb-[60px]">
          {skills.map((skill, index) => (
            <div
              className="skill rounded-[50%] w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] flex flex-col items-center justify-center "
              key={index}
              style={{ border: `10px solid ${skill.color}` }}
            >
              <CountUp
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 block font-itim"
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
      <div
        className="skills-more max-w-[750px] mx-auto flex flex-col gap-4 lg:gap-20 lg:flex-row"
        data-aos="flip-up"
      >
        <div>
          <h3 className=" text-blue-600 inline-block relative text-[24px] font-semibold mb-[10px]">
            Skills
          </h3>
          <img
            className=" w-[40px] sm:w-[60px] md:w-[80px]"
            src={skillMore}
            alt=""
          />
        </div>
        <ul className="flex flex-[80%] flex-wrap gap-8 md:gap-0 justify-between">
          {skillsdetails.map((details, index) => (
            <li
              className="text-[20px] font-itim font-bold uppercase"
              key={index}
            >
              {details.skillDesc}
              <ul className="pt-[8px]">
                {details.skillName.map((skillName, exindex) => (
                  <li
                    className="text-[14px] font-comfortaa font-medium capitalize"
                    key={exindex}
                  >
                    {skillName}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillBar;
