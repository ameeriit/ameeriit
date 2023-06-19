import { useEffect, useState } from "react";
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

  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // Adjust the selector based on your section elements
      let currentSection = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section.id; // Assuming the section has an "id" attribute
        }
      });
      setCurrentSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getIconColor = (sectionId) => {
    if (sectionId === "section1") {
      return "#5FDB86"; // Customize the color for the section with id "section1"
    }
    if (sectionId === "section2") {
      return "#6147C6"; // Customize the color for the section with id "section2"
    }
    return "white";
  };

  return (
    <>
      <div className="social-media-handles fixed top-[50%] left-2 translate-y-[-50%]  flex flex-col gap-4">
        {socialLinks.map((icon, index) => (
          <li key={index} className="list-none">
            <a className="block" href={icon.url}>
              <span style={{ color: getIconColor(currentSection) }}>
                {icon.socials}
              </span>
            </a>
          </li>
        ))}
      </div>
    </>
  );
};

export default SideSocialMedia;
