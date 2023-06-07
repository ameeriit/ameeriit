import projimg1 from "../assets/images/proj.png";
import projimg2 from "../assets/images/proj.png";
import projimg3 from "../assets/images/proj.png";
import projimg4 from "../assets/images/proj.png";
import projimg5 from "../assets/images/proj.png";
import projimg6 from "../assets/images/proj.png";

const Portfolio = () => {
  const images = [projimg1, projimg2, projimg3, projimg4, projimg5, projimg6];

  return (
    <>
      <section className="portfolio-section container mx-auto text-columbia-blue">
        <div className="portfolio-wrapper py-[100px]">
          <h2 className=" font-semibold text-4xl mb-6 inline-block relative after:content-['] after:absolute after:h-[4px] after:w-[110%] after:bg-columbia-blue after:bottom-[-8px] after:left-0">
            Portfolio
          </h2>
          <p className="text-xl mb-8">Check My Works here</p>
          <div className="project-showcase flex flex-wrap justify-center gap-6">
            {images.map((image, index) => (
              <div className="project w-[30%]" key={index}>
                <img src={image} alt="" style={{ width: "100%" }} />
                <div className="flex justify-between p-8">
                  <p className="font-semibold text-xl">Demo</p>
                  <p className="font-semibold text-xl">Code</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
