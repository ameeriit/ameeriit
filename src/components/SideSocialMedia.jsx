import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaMailchimp,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

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
    {
      socials: <FaTwitter style={{ width: "24px", height: "24px" }} />,
      url: "https://twitter.com/ameeriit",
    },
    {
      socials: <FaFacebook style={{ width: "24px", height: "24px" }} />,
      url: "https://www.facebook.com/ameeriit/",
    },
    {
      socials: <FaInstagram style={{ width: "24px", height: "24px" }} />,
      url: "https://www.instagram.com/amrit.pokharel_01/",
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
      return "red"; // Customize the color for the section with id "section1"
    }
    if (sectionId === "section2") {
      return "#6147C6"; // Customize the color for the section with id "section2"
    }
    // Add more conditions to customize colors for other sections

    // Default color when no specific condition matches
    return "white";
  };

  return (
    <>
      <div className="social-media-handles fixed top-[50%] left-2 translate-y-[-50%]  flex flex-col gap-4">
        {socialLinks.map((icon, index) => (
          <li
            key={index}
            className="list-none text-columbia-blue hover:text-malachite"
          >
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
