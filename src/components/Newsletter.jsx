import newsimg from "../assets/images/newsimg.jpg";

const Newsletter = () => {
  return (
    <section
      id="section1"
      className="newsletter-section text-white pt-[40px] pb-[60px] px-[50px] bg-smoky-black"
    >
      <div className="newsletter-wrapper container mx-auto">
        <h2
          className="font-medium text-6xl mb-10 font-[itim]"
          style={{ textShadow: "0 2px 6px black" }}
        >
          NEWSLETTER
        </h2>
        <div
          className="p-[150px]"
          style={{
            backgroundImage: `url(${newsimg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <form className="flex flex-col items-center">
            <input
              className="w-[50%] bg-white text-smoky-black px-6 py-3 mb-4 rounded outline-none"
              type="text"
              placeholder="Type Your Email Here..."
            />
            <button
              href="https://mario.nintendo.com/"
              className="border-[2px] hover:border-malachite border-white text-white mario-btn relative pt-[10px] pb-[8px] px-[10px] overflow-hidden font-regular rounded-lg group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-malachite group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-malachite group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-malachite group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-malachite group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-malachite opacity-0 group-hover:opacity-100"></span>
              <span className="relative flex gap-1 items-center transition-colors duration-300 delay-200 ease ">
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
