import map from "../assets/images/map.jpg";

const Contact = () => {
  return (
    <section
      id="section2"
      className="contact-section pt-[40px] pb-[60px] px-[50px] text-smoky-black"
    >
      <div className="contact-wrapper container mx-auto">
        <h2
          className="font-medium text-6xl mb-4 font-itim"
          style={{ textShadow: "0 2px 6px black" }}
        >
          CONTACT
        </h2>
        <div className="flex gap-[50px]">
          <form className="flex flex-col w-[50%]">
            <label
              className="font-brunoace font-semibold mb-1"
              htmlFor="fullname"
            >
              Full Name:
            </label>
            <input
              className="border-[1px] border-smoky-black px-4 py-2 rounded-lg mb-4 outline-none font-itim font-normal "
              id="fullname"
              type="text"
              placeholder="Full Name..."
              required
            />
            <label className="font-brunoace font-semibold mb-1" htmlFor="email">
              E-mail:
            </label>
            <input
              className="border-[1px] border-smoky-black px-4 py-2 rounded-lg mb-4 outline-none font-itim font-normal"
              id="email"
              type="text"
              placeholder="E-mail..."
              required
            />
            <label
              className="font-brunoace font-semibold mb-1"
              htmlFor="phonenumber"
            >
              Phone Number:
            </label>
            <input
              className="border-[1px] border-smoky-black px-4 py-2 rounded-lg mb-4 outline-none font-itim font-normal"
              id="phonenumber"
              type="text"
              placeholder="Phone Number..."
            />
            <label
              className="font-brunoace font-semibold mb-1"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="border-[1px] border-smoky-black px-4 py-2 rounded-lg mb-4 outline-none font-itim font-normal"
              id="message"
              name=""
              cols="30"
              rows="10"
              placeholder="Message..."
              required
            ></textarea>
          </form>
          <div className="flex justify-center items-center w-[50%]">
            <img className="rounded-xl" width={500} src={map} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
