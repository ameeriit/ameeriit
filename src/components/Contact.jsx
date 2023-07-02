import map from "../assets/images/map.jpg";

const Contact = () => {
  return (
    <section id="section2" className="contact-section text-black">
      <div className="contact-wrapper pt-[30px] pb-[10px]">
        <h2
          className="font-medium text-xl sm:text-2xl lg:text-3xl mb-10 container mx-auto"
          style={{ textShadow: "0 2px 6px black" }}
        >
          Find Me Here
        </h2>
        <div className="w-[100%] h-[400px]">
          <img className="w-full h-full object-cover" src={map} alt="" />
        </div>
        <div className="text-center">
          <p>Say Hello</p>
          <a href="">
            <img src="" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
