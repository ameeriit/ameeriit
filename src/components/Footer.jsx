import { FaLinkedin, FaGithub, FaMailchimp } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      socials: <FaLinkedin style={{ width: "16px", height: "16px" }} />,
      url: "https://www.linkedin.com/in/amrit-pokharel-359216a8/",
    },
    {
      socials: <FaGithub style={{ width: "16px", height: "16px" }} />,
      url: "https://github.com/ameeriit",
    },
    {
      socials: <FaMailchimp style={{ width: "16px", height: "16px" }} />,
      url: "mailto:amritpokharel51@gmail.com",
    },
  ];
  return (
    <>
      <footer className=" py-4 text-black-cm font-bold pb-8">
        <div className="footer-wrapper container px-[50px] mx-auto text-center flex-col sm:flex-row sm:flex justify-between items-center">
          <div
            className="max-w-[200px] mx-auto sm:mx-[0] mb-[25px] sm:mb-[0]"
            data-aos="fade-right"
          >
            <p className="text-[14px]">
              Designed & Developed by Amrit Pokharel &copy; 2022.
            </p>
          </div>
          <ul
            className="flex justify-center gap-3 text-green-cm"
            data-aos="fade-left"
          >
            {socialLinks.map((icon, index) => (
              <li key={index} className="list-none">
                <a className="block" href={icon.url}>
                  <span>{icon.socials}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
