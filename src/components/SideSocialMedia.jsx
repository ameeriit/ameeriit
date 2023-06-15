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
      <div className="social-media-handles fixed bottom-[0] right-4 translate-y-[-16px]  flex flex-col gap-4">
        {socialLinks.map((icon, index) => (
          <li
            key={index}
            className="list-none text-malachite hover:text-dirty-white"
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
