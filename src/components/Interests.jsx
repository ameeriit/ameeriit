import inImg from "../assets/images/inImg.png";

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
    >
      <div className="interests-wrapper container mx-auto text-smoky-black font-itim">
        <h2
          className="font-medium text-6xl mb-4 "
          style={{ textShadow: "0 2px 6px black" }}
        >
          INTERESTS
        </h2>
        <div className="flex items-center justify-between">
          <ul className="content-img-wrapper h-fit ml-10 relative before:content before:block before:w-[3px] before:h-[110%] before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[-20px] before:bg-smoky-black">
            {interestList.map((inList, index) => (
              <li className="text-xl" key={index}>
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
