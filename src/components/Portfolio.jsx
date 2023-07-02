import projimg1 from "../assets/images/proj.png";
import projimg2 from "../assets/images/proj.png";
import projimg3 from "../assets/images/proj.png";

const Portfolio = () => {
  const projectImages = [
    {
      image: projimg1,
      demoUrl: "https://www.example.com/demo1",
      codeUrl: "https://www.example.com/code1",
    },
    {
      image: projimg2,
      demoUrl: "https://www.example.com/demo2",
      codeUrl: "https://www.example.com/code2",
    },
    {
      image: projimg3,
      demoUrl: "https://www.example.com/demo3",
      codeUrl: "https://www.example.com/code3",
    },
  ];

  return (
    <section
      id="section1"
      className="portfolio-section text-white pt-[40px] pb-[60px] px-[50px] bg-black"
    >
      <div className="portfolio-wrapper container mx-auto">
        <h2
          className="font-medium text-4xl sm:text-4xl lg:text-6xl mb-10"
          style={{ textShadow: "0 2px 6px black" }}
        >
          PROJECTS
        </h2>
        <div className="project-showcase flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
          {projectImages.map((project, index) => (
            <div className="project w-[90%] md:w-[30%] sm:w-[40%]" key={index}>
              <a href={project.demoUrl}>
                <img
                  className="mb-4 md:mb-0"
                  src={project.image}
                  alt=""
                  style={{ width: "100%" }}
                />
              </a>
              <div className="flex justify-between md:p-8 flex-col md:flex-row">
                <a
                  href={project.demoUrl}
                  className="font-semibold text-sm md:text-xl mb-2 md:mb-0"
                >
                  Demo
                </a>
                <a
                  href={project.codeUrl}
                  className="font-semibold text-sm md:text-xl"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
