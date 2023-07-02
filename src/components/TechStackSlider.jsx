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
import PhotoShop from "../assets/images/photoshop.svg";
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
  { image: PhotoShop },
  { image: ReactImg },
  { image: Redux },
  { image: Sass },
  { image: Tailwind },
  { image: Wordpress },
];

const TechStackSlider = () => {
  return (
    <>
      <div id="section1" className="tech-section">
        <Splide
          aria-label="My Favorite Images"
          options={{
            type: "loop",
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
            breakpoints: {
              280: {
                perPage: 1,
              },
              425: {
                perPage: 2,
              },
              648: {
                perPage: 3,
              },
              1024: {
                perPage: 6,
              },
              1280: {
                perPage: 7,
              },
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
                  width: "40%",
                  aspectRatio: "3/2",
                  objectFit: "contain",
                }}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default TechStackSlider;
