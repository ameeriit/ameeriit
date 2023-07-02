import newsimg from "../assets/images/newsimg.jpg";

const Newsletter = () => {
  return (
    <section
      id="section1"
      className="newsletter-section text-white pt-[40px] pb-[60px] px-[50px] bg-black"
    >
      <div className="newsletter-wrapper container mx-auto">
        <h2
          className="font-medium text-4xl sm:text-4xl lg:text-6xl mb-10]"
          style={{ textShadow: "0 2px 6px black" }}
        >
          NEWSLETTER
        </h2>
        <div
          className=" sm:p-[40px] md:p-[80px] lg:p-[100px]"
          style={{
            backgroundImage: `url(${newsimg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <form className="flex flex-col items-center">
            <input
              className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] w-[100%] sm:w-[80%] xl:w-[500px] bg-white text-black px-4 py-2 sm:px-6 sm:py-3 mb-4 rounded outline-none"
              type="text"
              placeholder="Type Your Email Here..."
            />
            <button className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] border-[2px] hover:border-malachite border-white text-white mario-btn relative sm:pt-[10px] px-4 pt-[4px] pb-[6px] sm:pb-[8px] sm:px-[10px] overflow-hidden font-regular rounded-lg group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-malachite group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-malachite group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-malachite group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-malachite group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-malachite opacity-0 group-hover:opacity-100"></span>
              <span className="relative flex gap-1 items-center transition-colors duration-300 delay-200 ease">
                Subscribe
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
