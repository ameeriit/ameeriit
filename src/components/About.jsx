import globalBg from "../assets/images/magicpattern.png";
import mypersonal from "../assets/images/my.png";
import send from "../assets/images/send.svg";

const About = () => {
  return (
    <>
      <section
        id="section1"
        className="about-section pt-[100px] pb-[80px] px-[15px] text-white"
        style={{
          backgroundImage: `url(${globalBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" max-w-[650px] mx-auto text-center">
          <div className="">
            <div className="section-title ">
              <img className="mx-auto" width={200} src={mypersonal} alt="" />
            </div>
          </div>

          <div className="text-[12px] md:text-[14px] leading-6 mb-[20px]">
            <p className="mb-[10px]">
              Hey ! My name is <span className="text-orange-cm"> Amrit </span>
              and I&apos;m a{" "}
              <span className="text-orange-cm"> Web Developer </span>
              with a passion for front-end development and design. I aspire
              toward a career that will allow me to channel my creativity
              through crafting beautiful software and engaging experiences.
            </p>

            <p className="mb-[10px]">
              Passionate and driven
              <span className="text-orange-cm"> Frontend Developer </span>.
              Experienced in designing and developing stunning websites and user
              interfaces, committed to delivering high-quality work, and staying
              up-to-date with the latest technologies.
            </p>
            <p className="mb-[10px">
              When I&apos;m not on the computer, I enjoy traveling, gaming, and
              cooking foods.
            </p>
          </div>

          <div>
            <p className="font-itim font-bold text-[28px] mb-1">Say Hello,</p>
            <a
              className="inline-block bg-orange-cm rounded-full p-2 transition-all hover:bg-green-cm"
              href="mailto:amritpokharel51@gmail.com"
            >
              <img src={send} width={25} alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
