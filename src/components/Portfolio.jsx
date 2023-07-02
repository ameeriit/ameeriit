const Portfolio = () => {
  const projects = [
    {
      name: "Ecommerce",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error, architecto qui in, laudantium ullam veritatis cupiditate, nostrum sit officia officiis assumenda ex libero repudiandae? Vel temporibus facere corporis natus!",
      languages: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Portfolio Website",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error, architecto qui in, laudantium ullam veritatis cupiditate, nostrum sit officia officiis assumenda ex libero repudiandae? Vel temporibus facere corporis natus!",
      languages: ["HTML", "CSS", "React"],
    },
    {
      name: "Blog App",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error, architecto qui in, laudantium ullam veritatis cupiditate, nostrum sit officia officiis assumenda ex libero repudiandae? Vel temporibus facere corporis natus!",
      languages: ["HTML", "CSS", "Node.js", "Express"],
    },
    {
      name: "Movie App",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error, architecto qui in, laudantium ullam veritatis cupiditate, nostrum sit officia officiis assumenda ex libero repudiandae? Vel temporibus facere corporis natus!",
      languages: ["HTML", "CSS", "React", "Restful-Api"],
    },
    {
      name: "Landing Pages",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error, architecto qui in, laudantium ullam veritatis cupiditate, nostrum sit officia officiis assumenda ex libero repudiandae? Vel temporibus facere corporis natus!",
      languages: ["HTML", "CSS", "Jquery", "WordPress"],
    },
  ];

  return (
    <section className="project-section pt-[70px] pb-[20px] px-[20px]">
      <div className="container mx-auto">
        <div className="project-wrapper max-w-[1000px] mx-auto flex-col gap-8 sm:flex sm:flex-row">
          <h5 className="section-title mb-[20px] sm:mb-[0] text-2xl w-full sm:w-1/4 text-left sm:text-right text-blue-600">
            Projects
          </h5>
          <div className="project-description w-full sm:w-3/4">
            {projects.map((prj, index) => (
              <ul className="mb-8" key={index}>
                <li className="font-itim font-bold text-[20px] uppercase mb-[10px]">
                  {prj.name}
                </li>
                <li className="text-[14px] mb-[10px]">{prj.content}</li>
                <ul className="flex flex-wrap gap-3">
                  {prj.languages.map((language, langIndex) => (
                    <li
                      className="text-[14px] block border-[1px] border-blue-600 px-[8px] pt-[4px] pb-[3px] rounded-[4px] text-blue-600"
                      key={langIndex}
                    >
                      {language}
                    </li>
                  ))}
                </ul>
              </ul>
            ))}
            <button className="text-orange-600 transition-all hover:text-blue-600">
              Many more...
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
