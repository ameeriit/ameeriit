import map from "../assets/images/map.jpg";

const Contact = () => {
  return (
    <section
      id="section2"
      className="contact-section pt-[40px] pb-[60px] px-[50px] text-smoky-black"
    >
      <div className="contact-wrapper container mx-auto">
        <h2
          className="font-medium text-4xl sm:text-4xl lg:text-6xl mb-10 font-[itim]"
          style={{ textShadow: "0 2px 6px black" }}
        >
          CONTACT
        </h2>
        <div className="flex flex-col lg:flex-row gap-[30px] md:gap-[50px]">
          <form className="flex flex-col w-[100%] lg:w-[50%]">
            <label
              className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-brunoace font-semibold mb-1"
              htmlFor="fullname"
            >
              Full Name:
            </label>
            <input
              className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] border-[1px] border-smoky-black px-4 py-2 rounded-lg mb-4 outline-none font-itim font-normal "
              id="fullname"
              type="text"
              placeholder="Full Name..."
              required
            />
            <label
              className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-brunoace font-semibold mb-1"
              htmlFor="email"
            >
              E-mail:
            </label>
            <input
              className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] border-[1px] border-smoky-black px-4 py-2 rounded-lg mb-4 outline-none font-itim font-normal"
              id="email"
              type="text"
              placeholder="E-mail..."
              required
            />
            <label
              className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-brunoace font-semibold mb-1"
              htmlFor="phonenumber"
            >
              Phone Number:
            </label>
            <input
              className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] border-[1px] border-smoky-black px-4 py-2 rounded-lg mb-4 outline-none font-itim font-normal"
              id="phonenumber"
              type="text"
              placeholder="Phone Number..."
            />
            <label
              className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-brunoace font-semibold mb-1"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] border-[1px] border-smoky-black px-4 py-2 rounded-lg mb-4 outline-none font-itim font-normal"
              id="message"
              name=""
              cols="30"
              rows="10"
              placeholder="Message..."
              required
            ></textarea>
            <button className="bg-iris text-white px-6 py-2 rounded transition-all hover:bg-malachite">
              Send
            </button>
          </form>
          <div className="flex justify-center items-center w-[100%] lg:w-[50%]">
            <img className="rounded-xl" width={500} src={map} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
