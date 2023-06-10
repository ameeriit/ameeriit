// const expericenceLi = [
//   {
//     expitems:
//       "Worked as Frontend Developer Intern at Web Experts Nepal – 5.5 Months",
//     nestedItems: [
//       "Transform designs from PSD, Zeplin and Figma to Website.",
//       "Slice the designs and collect resources.",
//       "Implement different design approaches using different libraries.",
//       "Maintain, develop and implement reusable code for different websites.",
//       "Create Responsive designs for the Website.",
//     ],
//   },
//   {
//     expitems: "Worked as Technical Support at Vainet Communication – 3 Months",
//     nestedItems: [
//       "Troubleshooting client network.",
//       "System configuration, upgrades, and parameters.",
//     ],
//   },
// ];

const About = () => {
  return (
    <>
      <section className="about-section bg-blue-yonder py-[60px] px-[50px]">
        <div className="about-wrapper container mx-auto">
          <p className="text-columbia-blue text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-center">
            "Passionate and driven Frontend Developer with five and a half
            months of experience. Experienced in designing and developing
            stunning websites and user interfaces, committed to delivering
            high-quality work, and staying up-to-date with the latest
            technologies."
          </p>

          {/* <ul className="mb-4 list-decimal pl-8">
            {expericenceLi.map((exp, index) => (
              <li className="text-columbia-blue" key={index}>
                {exp.expitems}
                <ul className="list-disc pl-8">
                  {exp.nestedItems.map((nestedItem, nestedIndex) => (
                    <li className="text-columbia-blue" key={nestedIndex}>
                      {nestedItem}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul> */}
        </div>
      </section>
    </>
  );
};

export default About;
