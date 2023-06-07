import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// Import images
import Bootstrap from "../assets/images/boostrap.svg";
import Css from "../assets/images/css.svg";
import Figma from "../assets/images/figma.svg";
import Git from "../assets/images/git.svg";
import Html from "../assets/images/html.svg";
import Jquery from "../assets/images/jquery.svg";
import Js from "../assets/images/js.svg";
import Less from "../assets/images/less.svg";
import Photoshop from "../assets/images/photoshop.svg";
import ReactImg from "../assets/images/react.svg";
import Redux from "../assets/images/redux.svg";
import Sass from "../assets/images/sass.svg";
import Tailwind from "../assets/images/tailwind.svg";
import Wordpress from "../assets/images/wordpress.svg";

const techSlides = [
  { image: Bootstrap },
  { image: Css },
  { image: Figma },
  { image: Git },
  { image: Html },
  { image: Jquery },
  { image: Js },
  { image: Less },
  { image: Photoshop },
  { image: ReactImg },
  { image: Redux },
  { image: Sass },
  { image: Tailwind },
  { image: Wordpress },
];

const TechStackSlider = () => {
  return (
    <>
      <Splide
        className="py-[80px]"
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          gap: "10px",
          drag: "free",
          arrows: false,
          pagination: false,
          perPage: 8,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {techSlides.map((slide, index) => (
          <SplideSlide key={index}>
            <img
              src={slide.image}
              alt=""
              style={{
                width: "50%",
                aspectRatio: "3/2",
                objectFit: "contain",
              }}
            />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default TechStackSlider;