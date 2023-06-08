const Contact = () => {
  return (
    <>
      <section className="contact-section text-columbia-blue pt-[40px] pb-[60px] px-[50px] ">
        <div className="contact-wrapper container mx-auto">
          <h2 className="font-semibold text-2xl md:text-4xl mb-10 relative inline-block  after:content-['] after:absolute after:h-[4px] after:w-[110%] after:bg-columbia-blue after:bottom-[-8px] after:left-0">
            Contact
          </h2>
          <form className="flex flex-col w-[100%] md:w-[80%] lg:w-[60%]">
            <label
              className="mb-1 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]"
              htmlFor="fullname"
            >
              Full Name:
            </label>
            <input
              className="px-4 py-2 rounded mb-4 text-blue-yonder font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]"
              type="text"
              name="fullname"
              placeholder="Enter Your Full Name"
            />
            <label
              className="mb-1 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="px-4 py-2 rounded mb-4 text-blue-yonder font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
            <label
              className="mb-1 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]"
              htmlFor="message"
            >
              Write Me:
            </label>
            <textarea
              className="px-4 py-2 rounded text-blue-yonder font-semibold mb-8 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
            ></textarea>
            <button className="bg-malachite rounded p-2 font-semibold transition-all hover:bg-picton-blue">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
