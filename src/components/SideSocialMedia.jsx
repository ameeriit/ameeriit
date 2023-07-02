import { FaLinkedin, FaGithub, FaMailchimp } from "react-icons/fa";

const SideSocialMedia = () => {
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
      <div className="">
        {socialLinks.map((icon, index) => (
          <li key={index} className="list-none">
            <a className="block" href={icon.url}>
              <span>{icon.socials}</span>
            </a>
          </li>
        ))}
      </div>
    </>
  );
};

export default SideSocialMedia;
