import projimg1 from "../assets/images/proj.png";
import projimg2 from "../assets/images/proj.png";
import projimg3 from "../assets/images/proj.png";
import projimg4 from "../assets/images/proj.png";
import projimg5 from "../assets/images/proj.png";
import projimg6 from "../assets/images/proj.png";

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
    {
      image: projimg4,
      demoUrl: "https://www.example.com/demo4",
      codeUrl: "https://www.example.com/code4",
    },
    {
      image: projimg5,
      demoUrl: "https://www.example.com/demo5",
      codeUrl: "https://www.example.com/code5",
    },
    {
      image: projimg6,
      demoUrl: "https://www.example.com/demo6",
      codeUrl: "https://www.example.com/code6",
    },
  ];

  return (
    <section className="portfolio-section text-columbia-blue pt-[40px] pb-[60px] px-[50px]">
      <div className="portfolio-wrapper container mx-auto">
        <h2 className="font-semibold text-2xl md:text-4xl mb-6 md:mb-10 inline-block relative after:content-[''] after:absolute after:h-[4px] after:w-[110%] after:bg-columbia-blue after:bottom-[-8px] after:left-0">
          Portfolio
        </h2>
        <p className="mb-8 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
          Check My Works here
        </p>
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
