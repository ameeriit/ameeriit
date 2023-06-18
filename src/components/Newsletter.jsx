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
            <button className="bg-iris px-6 py-2 rounded transition-all hover:bg-blue-yonder">
              Button
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
