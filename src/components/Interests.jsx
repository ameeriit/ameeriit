import inImg from "../assets/images/inImg.png";
import whiteartban from "../assets/images/calligraphy-artist-hero-section-bg.svg";

const interestList = [
  { list: "Involvement in new software and hardware interaction projects." },
  { list: "Creating web apps and websites." },
  {
    list: "Collaborating with colleagues to pitch ideas about projects and new technologies.",
  },
];

const Interests = () => {
  return (
    <section
      id="section2"
      className="interests-section pt-[40px] pb-[60px] px-[50px]"
      style={{
        backgroundImage: `url(${whiteartban})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="interests-wrapper container mx-auto text-smoky-black font-itim">
        <h2
          className="font-medium text-4xl sm:text-4xl lg:text-6xl mb-10 font-[itim] "
          style={{ textShadow: "0 2px 6px black" }}
        >
          INTERESTS
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <ul className="content-img-wrapper mb-16 md:mb-0 h-fit ml-10 relative before:content before:block before:w-[3px] before:h-[110%] before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[-20px] before:bg-smoky-black">
            {interestList.map((inList, index) => (
              <li
                className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]"
                key={index}
              >
                {inList.list}
              </li>
            ))}
          </ul>
          <div className="interest-img">
            <img className="w-[300px]" src={inImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
