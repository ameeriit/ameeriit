import { FaLinkedin, FaGithub, FaMailchimp } from "react-icons/fa";

const SideSocialMedia = () => {
  const socialLinks = [
    {
      socials: <FaLinkedin style={{ width: "30px", height: "30px" }} />,
      url: "https://www.linkedin.com/in/amrit-pokharel-359216a8/",
    },
    {
      socials: <FaGithub style={{ width: "30px", height: "30px" }} />,
      url: "https://github.com/ameeriit",
    },
    {
      socials: <FaMailchimp style={{ width: "30px", height: "30px" }} />,
      url: "mailto:amritpokharel51@gmail.com",
    },
  ];

  return (
    <>
      <div className="social-media-handles fixed top-[50%] left-2 translate-y-[-50%]  flex flex-col gap-4">
        {socialLinks.map((icon, index) => (
          <li
            key={index}
            className="list-none text-columbia-blue hover:text-malachite"
          >
            <a className="block" href={icon.url}>
              {icon.socials}
            </a>
          </li>
        ))}
      </div>
    </>
  );
};

export default SideSocialMedia;
