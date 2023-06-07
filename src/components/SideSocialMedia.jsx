import { FaLinkedin, FaGithub, FaMailchimp } from "react-icons/fa";

const SideSocialMedia = () => {
  const icons = [FaLinkedin, FaGithub, FaMailchimp];

  return (
    <>
      <div className="social-media-handles fixed top-[50%] left-2 translate-y-[-50%]  flex flex-col gap-4">
        {icons.map((Icon, index) => (
          <Icon
            className="text-columbia-blue hover:text-malachite w-[30px] h-[30px]"
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default SideSocialMedia;
