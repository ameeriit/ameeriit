import mypersonal from "../assets/images/my.png";

const SkillMap = () => {
  return (
    <section className="px-[20px]">
      <div className="skillmap-wrapper container mx-auto">
        <h2
          className="font-medium text-6xl mb-10 font-[itim] "
          style={{ textShadow: "0 2px 6px black" }}
        >
          Skill-Map
        </h2>
        <div>
          <div className="flex">
            <img className="w-[80px]" src={mypersonal} alt="" />
            <p className="">ameeriit</p>
            <p className="">Frontend-Dev</p>
          </div>
          <input type="text" />
        </div>
      </div>
    </section>
  );
};

export default SkillMap;
