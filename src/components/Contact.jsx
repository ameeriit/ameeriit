import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("xayzgkan");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      <section className="contact-section text-columbia-blue pt-[40px] pb-[60px] px-[50px] ">
        <div className="contact-wrapper container mx-auto">
          <h2 className="font-semibold text-2xl md:text-4xl mb-10 relative inline-block  after:content-['] after:absolute after:h-[4px] after:w-[110%] after:bg-columbia-blue after:bottom-[-8px] after:left-0">
            Contact
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[100%] md:w-[80%] lg:w-[60%]"
          >
            <label
              className="mb-1 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              id="email"
              className="px-4 py-2 rounded mb-4 text-blue-yonder font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] focus:outline-none"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter Your Email"
              autoComplete="off"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              className="mb-1 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]"
              htmlFor="message"
            >
              Write Me:
            </label>
            <textarea
              className="px-4 py-2 rounded text-blue-yonder font-semibold mb-8 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]"
              id="message"
              cols="30"
              rows="10"
              value={message}
              onChange={handleMessageChange}
              placeholder="Enter Your Message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="text-black bg-malachite rounded p-2 font-semibold transition-all hover:bg-picton-blue"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
